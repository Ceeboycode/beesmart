<script setup lang="ts">
import { defineComponent, h } from 'vue';
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = withDefaults(
    defineProps<{
        size?: 'sm' | 'md' | 'lg' | 'xl';
        label?: string;
        overlay?: boolean;
        class?: HTMLAttributes['class'];
    }>(),
    { size: 'md', overlay: false },
);

const sizeMap = {
    sm: 'w-28 h-28',
    md: 'w-44 h-44',
    lg: 'w-60 h-60',
    xl: 'w-80 h-80',
};

const textSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
};

/* ─── helpers ─────────────────────────────── */
function hexPoints(cx: number, cy: number, r: number): string {
    const pts = [];
    for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 180) * (60 * i);
        pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
    }
    return pts.join(' ');
}

function beeElements() {
    return [
        h('ellipse', { cx:'-10', cy:'-3', rx:'9',  ry:'4.5', fill:'white', opacity:'0.88', class:'w-lt' }),
        h('ellipse', { cx:'10',  cy:'-3', rx:'9',  ry:'4.5', fill:'white', opacity:'0.88', class:'w-rt' }),
        h('ellipse', { cx:'-9',  cy:'5',  rx:'6',  ry:'3',   fill:'white', opacity:'0.5',  class:'w-lb' }),
        h('ellipse', { cx:'9',   cy:'5',  rx:'6',  ry:'3',   fill:'white', opacity:'0.5',  class:'w-rb' }),
        h('ellipse', { cx:'0', cy:'5', rx:'6', ry:'9', fill:'#F59E0B' }),
        h('rect',    { x:'-6', y:'2', width:'12', height:'3', rx:'1.5', fill:'#1C1917', opacity:'0.32' }),
        h('rect',    { x:'-6', y:'7', width:'12', height:'3', rx:'1.5', fill:'#1C1917', opacity:'0.32' }),
        h('circle', { cx:'0', cy:'-7', r:'5.5', fill:'#F59E0B' }),
        h('circle', { cx:'-2.2', cy:'-8',   r:'1.6', fill:'#1C1917', opacity:'0.85' }),
        h('circle', { cx:'2.2',  cy:'-8',   r:'1.6', fill:'#1C1917', opacity:'0.85' }),
        h('circle', { cx:'-2.2', cy:'-8.5', r:'0.6', fill:'white',   opacity:'0.7'  }),
        h('circle', { cx:'2.2',  cy:'-8.5', r:'0.6', fill:'white',   opacity:'0.7'  }),
        h('path', { d:'M-2 -4.5 Q0 -2.5 2 -4.5', stroke:'#92400E', 'stroke-width':'1', 'stroke-linecap':'round', opacity:'0.5' }),
        h('line',   { x1:'-1.5', y1:'-12', x2:'-5', y2:'-17', stroke:'#92400E', 'stroke-width':'1.2', 'stroke-linecap':'round' }),
        h('circle', { cx:'-5.5', cy:'-18', r:'1.6', fill:'#FBBF24', stroke:'#92400E', 'stroke-width':'0.8' }),
        h('line',   { x1:'1.5',  y1:'-12', x2:'5',  y2:'-17', stroke:'#92400E', 'stroke-width':'1.2', 'stroke-linecap':'round' }),
        h('circle', { cx:'5.5',  cy:'-18', r:'1.6', fill:'#FBBF24', stroke:'#92400E', 'stroke-width':'0.8' }),
        h('path', { d:'M0 14 L-1.8 19 L0 16.5 L1.8 19 Z', fill:'#D97706' }),
    ];
}

/* ─── HiveScene ────────────────────────────── */
const HiveScene = defineComponent({
    name: 'HiveScene',
    props: { sizeClass: String },
    render() {
        const R   = 15;
        const CX  = 100;
        const CY  = 100;
        const D   = R * Math.sqrt(3);

        const hexCenters: [number, number, string, number][] = [
            [CX,       CY,          '#FBBF24', 1   ],
            [CX + D,   CY,          '#F59E0B', 0.9 ],
            [CX - D,   CY,          '#F59E0B', 0.9 ],
            [CX + D/2, CY - R*1.5, '#FCD34D', 0.85],
            [CX - D/2, CY - R*1.5, '#FCD34D', 0.85],
            [CX + D/2, CY + R*1.5, '#F59E0B', 0.85],
            [CX - D/2, CY + R*1.5, '#F59E0B', 0.85],
        ];

        const hexagons = hexCenters.map(([x, y, fill, op], i) =>
            h('g', { key: `h${i}` }, [
                h('polygon', { points: hexPoints(x, y, R - 1), fill, opacity: op }),
                h('polygon', { points: hexPoints(x, y, R - 1), fill: 'none', stroke: '#D97706', 'stroke-width': '1.5', opacity: 0.6 }),
                h('polygon', { points: hexPoints(x, y - R * 0.3, R * 0.4), fill: 'white', opacity: 0.12 }),
            ])
        );

        const bees = [
            h('g', { key: 'b1', class: 'bee-orbit-b1' }, [h('g', { class: 'bee-inner' }, beeElements())]),
            h('g', { key: 'b2', class: 'bee-orbit-b2' }, [h('g', { class: 'bee-inner' }, beeElements())]),
            h('g', { key: 'b3', class: 'bee-orbit-b3' }, [h('g', { class: 'bee-inner' }, beeElements())]),
        ];

        const drip = h('ellipse', {
            cx: CX, cy: CY + R * 1.5 + 14, rx: '3', ry: '5',
            fill: '#FCD34D', class: 'drip', opacity: '0.9',
        });

        return h('div', { class: this.sizeClass }, [
            h('svg', { viewBox: '0 0 200 200', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', class: 'w-full h-full overflow-visible' }, [
                h('circle', { cx: CX, cy: CY, r: '52', fill: '#F59E0B', opacity: '0.08', class: 'hive-glow' }),
                ...hexagons,
                drip,
                ...bees,
            ]),
        ]);
    },
});

/* ─── HoneyDots ────────────────────────────── */
const HoneyDots = defineComponent({
    name: 'HoneyDots',
    render() {
        return h('div', { class: 'flex items-center gap-2' }, [
            h('span', { class: 'honey-dot d1' }),
            h('span', { class: 'honey-dot d2' }),
            h('span', { class: 'honey-dot d3' }),
        ]);
    },
});
</script>

<template>
    <!-- Full-screen overlay -->
    <Teleport v-if="overlay" to="body">
        <div
            class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-amber-50/85 backdrop-blur-sm dark:bg-gray-950/85"
            role="status"
            :aria-label="label ?? 'Loading'"
        >
            <HiveScene :size-class="sizeMap[size]" />
            <p v-if="label" :class="cn('font-semibold text-amber-700 dark:text-amber-400 tracking-wide', textSize[size])">
                {{ label }}
            </p>
            <HoneyDots />
        </div>
    </Teleport>

    <!-- Inline -->
    <div
        v-if="!overlay"
        :class="cn('flex flex-col items-center justify-center gap-3', props.class)"
        role="status"
        :aria-label="label ?? 'Loading'"
    >
        <HiveScene :size-class="sizeMap[size]" />
        <p v-if="label" :class="cn('font-semibold text-amber-700 dark:text-amber-400 tracking-wide', textSize[size])">
            {{ label }}
        </p>
        <HoneyDots />
    </div>
</template>

<style>
.bee-orbit-b1 { animation: orbit-b1 3.2s linear infinite; }
@keyframes orbit-b1 {
    0%   { transform: translate(162px, 100px); }
    25%  { transform: translate(100px, 162px); }
    50%  { transform: translate(38px,  100px); }
    75%  { transform: translate(100px, 38px);  }
    100% { transform: translate(162px, 100px); }
}

.bee-orbit-b2 { animation: orbit-b2 4.8s linear infinite; }
@keyframes orbit-b2 {
    0%   { transform: translate(66px,   158.9px); }
    25%  { transform: translate(41.1px, 66px);    }
    50%  { transform: translate(134px,  41.1px);  }
    75%  { transform: translate(158.9px,134px);   }
    100% { transform: translate(66px,   158.9px); }
}

.bee-orbit-b3 { animation: orbit-b3 5.5s linear infinite; }
@keyframes orbit-b3 {
    0%   { transform: translate(71.5px,  50.6px);  }
    25%  { transform: translate(149.4px, 71.5px);  }
    50%  { transform: translate(128.5px, 149.4px); }
    75%  { transform: translate(50.6px,  128.5px); }
    100% { transform: translate(71.5px,  50.6px);  }
}

.w-lt { transform-origin: 0px -3px; animation: flap-t 0.15s ease-in-out infinite alternate; }
.w-rt { transform-origin: 0px -3px; animation: flap-t 0.15s ease-in-out infinite alternate; }
.w-lb { transform-origin: 0px  5px; animation: flap-b 0.15s ease-in-out infinite alternate; }
.w-rb { transform-origin: 0px  5px; animation: flap-b 0.15s ease-in-out infinite alternate; }
@keyframes flap-t {
    from { transform: scaleY(1);    opacity: 0.88; }
    to   { transform: scaleY(0.08); opacity: 0.25; }
}
@keyframes flap-b {
    from { transform: scaleY(1);   opacity: 0.5;  }
    to   { transform: scaleY(0.1); opacity: 0.15; }
}

.hive-glow { animation: glow-pulse 2.4s ease-in-out infinite; }
@keyframes glow-pulse {
    0%, 100% { r: 52; opacity: 0.08; }
    50%       { r: 58; opacity: 0.16; }
}

.drip {
    animation: honey-drip 2.8s ease-in-out infinite;
    transform-origin: 100px 128px;
}
@keyframes honey-drip {
    0%   { transform: scaleY(0.4) translateY(-4px);  opacity: 0;   }
    20%  { transform: scaleY(1)   translateY(0px);   opacity: 0.9; }
    70%  { transform: scaleY(1.4) translateY(6px);   opacity: 0.8; }
    90%  { transform: scaleY(0.3) translateY(14px);  opacity: 0.2; }
    100% { transform: scaleY(0)   translateY(18px);  opacity: 0;   }
}

.honey-dot { display: block; width: 8px; height: 8px; border-radius: 9999px; animation: dot-bounce 1.2s ease-in-out infinite; }
.d1 { background-color: #F59E0B; animation-delay: 0s;    }
.d2 { background-color: #FBBF24; animation-delay: 0.18s; }
.d3 { background-color: #FCD34D; animation-delay: 0.36s; }
@keyframes dot-bounce {
    0%, 100% { transform: translateY(0)    scale(0.75); opacity: 0.4; }
    50%       { transform: translateY(-7px) scale(1.2);  opacity: 1;   }
}
</style>
