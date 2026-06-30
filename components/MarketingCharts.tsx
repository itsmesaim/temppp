'use client';

import { motion } from './motion';

export type KpiMetric = {
  value: string;
  label: string;
  change: string;
  positive?: boolean;
};

export type ChartPoint = {
  label: string;
  value: number;
};

export function KpiStrip({ metrics }: { metrics: KpiMetric[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A2A2A] rounded-2xl overflow-hidden border border-[#2A2A2A]">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          className="bg-[#141414] px-5 py-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        >
          <div className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1">
            {m.value}
          </div>
          <div className="text-[#666666] text-xs mb-2 leading-snug">{m.label}</div>
          <div
            className={`text-xs font-medium ${m.positive !== false ? 'text-emerald-400' : 'text-[#888888]'}`}
          >
            {m.change}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function BarChart({
  data,
  title,
  unit = '',
}: {
  data: ChartPoint[];
  title: string;
  unit?: string;
}) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5">
      <div className="flex items-center justify-between mb-5">
        <span className="text-white text-sm font-medium">{title}</span>
        <span className="text-[#555555] text-xs">Last 6 months</span>
      </div>
      <div className="flex items-end gap-2 h-36">
        {data.map((d, i) => (
          <div key={d.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
            <motion.div
              className="w-full rounded-t-md bg-gradient-to-t from-[#E31E24] to-[#E31E24]/50 min-h-[4px]"
              initial={{ height: 0 }}
              animate={{ height: `${(d.value / max) * 100}%` }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            />
            <span className="text-[#555555] text-[10px]">{d.label}</span>
          </div>
        ))}
      </div>
      {unit && (
        <div className="mt-3 pt-3 border-t border-[#2A2A2A] text-[#666666] text-xs">{unit}</div>
      )}
    </div>
  );
}

export function LineChart({ data, title }: { data: ChartPoint[]; title: string }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  const min = Math.min(...data.map((d) => d.value));
  const range = max - min || 1;
  const w = 280;
  const h = 100;
  const pad = 8;

  const points = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((d.value - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  });

  const areaPoints = `${pad},${h - pad} ${points.join(' ')} ${w - pad},${h - pad}`;

  return (
    <div className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5">
      <div className="text-white text-sm font-medium mb-4">{title}</div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" aria-hidden>
        <defs>
          <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E31E24" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E31E24" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill="url(#lineFill)" />
        <motion.polyline
          points={points.join(' ')}
          fill="none"
          stroke="#E31E24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        {data.map((d, i) => {
          const x = pad + (i / (data.length - 1)) * (w - pad * 2);
          const y = h - pad - ((d.value - min) / range) * (h - pad * 2);
          return <circle key={d.label} cx={x} cy={y} r="3" fill="#E31E24" />;
        })}
      </svg>
      <div className="flex justify-between mt-2">
        {data.map((d) => (
          <span key={d.label} className="text-[#555555] text-[10px]">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PerformancePanel({
  metrics,
  barData,
  lineData,
  barTitle,
  lineTitle,
}: {
  metrics: KpiMetric[];
  barData: ChartPoint[];
  lineData: ChartPoint[];
  barTitle: string;
  lineTitle: string;
}) {
  return (
    <div className="space-y-4">
      <div className="text-[#555555] text-xs uppercase tracking-wider mb-1">
        Typical client outcomes
      </div>
      <KpiStrip metrics={metrics} />
      <BarChart data={barData} title={barTitle} />
      <LineChart data={lineData} title={lineTitle} />
      <p className="text-[#444444] text-[11px] leading-relaxed">
        Based on aggregated campaign data across SNK client accounts. Individual results vary.
      </p>
    </div>
  );
}
