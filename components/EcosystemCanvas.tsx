'use client';

import React, { useRef, useEffect } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  color: string;
  pulse: number;
  baseAngle: number;
  orbitRadius: number;
}

interface Dimensions {
  width: number;
  height: number;
}

export default function EcosystemCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const dimsRef = useRef<Dimensions>({ width: 0, height: 0 });
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const visibleRef = useRef(true);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const labels = ['SEO', 'PPC', 'CONTENT', 'SOCIAL', 'WEB', 'DATA'];
    const colors = ['#67e8f9', '#c084fc', '#4ade80', '#f472b6', '#fbbf24', '#60a5fa'];

    const initNodes = (width: number, height: number) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const orbitBase = Math.min(width, height) * 0.28;
      const coreRadius = Math.max(18, Math.min(width, height) * 0.055);
      const nodeRadius = Math.max(10, coreRadius * 0.46);

      nodesRef.current = [
        {
          x: centerX,
          y: centerY,
          vx: 0,
          vy: 0,
          radius: coreRadius,
          label: 'SNK',
          color: '#67e8f9',
          pulse: 0,
          baseAngle: 0,
          orbitRadius: 0,
        },
        ...labels.map((label, i) => {
          const angle = (i / labels.length) * Math.PI * 2 - Math.PI / 2;
          const orbitRadius = orbitBase + (i % 2) * orbitBase * 0.18;
          return {
            x: centerX + Math.cos(angle) * orbitRadius,
            y: centerY + Math.sin(angle) * orbitRadius,
            vx: Math.cos(angle + 1.5) * 0.35,
            vy: Math.sin(angle + 1.5) * 0.35,
            radius: nodeRadius,
            label,
            color: colors[i],
            pulse: i * 0.8,
            baseAngle: angle,
            orbitRadius,
          };
        }),
      ];
    };

    const setupCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = rect.width;
      const height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const prev = dimsRef.current;
      dimsRef.current = { width, height };

      if (
        !prev.width ||
        !prev.height ||
        Math.abs(prev.width - width) > 2 ||
        Math.abs(prev.height - height) > 2
      ) {
        initNodes(width, height);
      }

      return { width, height };
    };

    const updatePointer = (clientX: number, clientY: number, active: boolean) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
        active,
      };
    };

    const handleMouseMove = (e: MouseEvent) => updatePointer(e.clientX, e.clientY, true);
    const handleMouseLeave = () => {
      pointerRef.current.active = false;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        e.preventDefault();
        updatePointer(e.touches[0].clientX, e.touches[0].clientY, true);
      }
    };
    const handleTouchEnd = () => {
      pointerRef.current.active = false;
    };

    setupCanvas();

    const resizeObserver = new ResizeObserver(() => setupCanvas());
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(canvas);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchcancel', handleTouchEnd);

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      if (!visibleRef.current) return;

      const { width, height } = dimsRef.current;
      if (!width || !height) return;

      timeRef.current += 0.016;
      const time = timeRef.current;
      const nodes = nodesRef.current;
      const pointer = pointerRef.current;
      const centerX = width / 2;
      const centerY = height / 2;
      const maxDist = Math.min(width, height) * 0.42;
      const connectDist = Math.min(width, height) * 0.55;
      const pointerRadius = Math.min(width, height) * 0.38;

      ctx.clearRect(0, 0, width, height);

      // Ambient grid
      ctx.strokeStyle = 'rgba(103, 232, 249, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 32;
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      nodes.forEach((node, index) => {
        if (index === 0) {
          node.x = centerX;
          node.y = centerY;
          node.pulse = Math.sin(time * 1.8) * 3;
          return;
        }

        const dx = node.x - centerX;
        const dy = node.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        node.vx += (centerX - node.x) * 0.0007;
        node.vy += (centerY - node.y) * 0.0007;
        node.vx += (-dy / dist) * 0.032;
        node.vy += (dx / dist) * 0.032;

        if (pointer.active) {
          const mdx = pointer.x - node.x;
          const mdy = pointer.y - node.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy) || 1;
          if (mdist < pointerRadius) {
            const force = (1 - mdist / pointerRadius) * 1.1;
            node.vx -= (mdx / mdist) * force;
            node.vy -= (mdy / mdist) * force;
          }
        }

        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.965;
        node.vy *= 0.965;

        if (dist > maxDist) {
          const pull = (dist - maxDist) * 0.04;
          node.vx -= (dx / dist) * pull;
          node.vy -= (dy / dist) * pull;
        }

        node.pulse = Math.sin(time * 2.2 + index) * 2.5;
      });

      // Connections
      ctx.lineWidth = 1.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = Math.min(width, height) * 0.1;

          if (dist < connectDist && dist > minDist) {
            const alpha = 0.08 + (1 - dist / connectDist) * 0.18;
            ctx.strokeStyle = `rgba(103, 232, 249, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.setLineDash([6, 9]);
            ctx.lineDashOffset = -(time * 18) % 22;
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // Always connect satellites to core
      const core = nodes[0];
      nodes.slice(1).forEach((node) => {
        ctx.strokeStyle = 'rgba(103, 232, 249, 0.22)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(core.x, core.y);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();
      });

      // Nodes
      const fontSize = Math.max(9, Math.min(width, height) * 0.024);
      const coreFontSize = fontSize * 1.2;

      nodes.forEach((node, index) => {
        const r = node.radius + (index === 0 ? node.pulse * 0.6 : node.pulse * 0.35);

        const grad = ctx.createRadialGradient(node.x, node.y, r * 0.4, node.x, node.y, r * 2.8);
        grad.addColorStop(0, node.color + '55');
        grad.addColorStop(0.5, node.color + '15');
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 2.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = index === 0 ? '#0a0a0f' : '#111114';
        ctx.strokeStyle = node.color;
        ctx.lineWidth = index === 0 ? 3 : 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = node.color + '40';
        ctx.beginPath();
        ctx.arc(node.x - r * 0.25, node.y - r * 0.25, r * 0.35, 0, Math.PI * 2);
        ctx.fill();

        ctx.textAlign = 'center';
        if (index > 0) {
          ctx.fillStyle = '#e4e4e7';
          ctx.font = `600 ${fontSize}px var(--font-poppins)`;
          ctx.fillText(node.label, node.x, node.y + fontSize * 0.35);
        } else {
          ctx.fillStyle = '#67e8f9';
          ctx.font = `700 ${coreFontSize}px var(--font-poppins)`;
          ctx.fillText('CORE', node.x, node.y + coreFontSize * 0.3);
        }
      });

      // Floating particles
      ctx.fillStyle = 'rgba(103, 232, 249, 0.55)';
      const particleCount = Math.floor(Math.min(width, height) / 18);
      for (let p = 0; p < particleCount; p++) {
        const px = (p * 31 + time * 12) % width;
        const py =
          height * 0.2 + Math.sin(p + time * 1.3) * height * 0.22 + (p % 3) * height * 0.08;
        const size = 1 + Math.sin(time * 3 + p) * 0.5;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Pointer glow
      if (pointer.active) {
        const glow = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          pointerRadius * 0.5
        );
        glow.addColorStop(0, 'rgba(227, 30, 36, 0.08)');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, pointerRadius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchcancel', handleTouchEnd);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-crosshair touch-none"
      style={{ background: 'transparent' }}
      aria-label="Interactive digital ecosystem visualization. Move your cursor to interact with connected nodes."
      role="img"
    />
  );
}
