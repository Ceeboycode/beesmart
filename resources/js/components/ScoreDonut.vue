<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    score: number;
    maxScore: number;
    correct: number;
    incorrect: number;
    skipped: number;
    total: number;
}>();

const percentage = computed(() =>
    props.maxScore === 0 ? 0 : Math.round((props.score / props.maxScore) * 100),
);

const gradeColor = computed(() => {
    const p = percentage.value;
    if (p >= 75) return '#d97706';
    if (p >= 50) return '#d97706';
    return '#dc2626';
});

const gradeLabel = computed(() => {
    const p = percentage.value;
    if (p >= 90) return 'Excellent!';
    if (p >= 75) return 'Great job!';
    if (p >= 60) return 'Good effort';
    return 'Keep going!';
});

// Pointy-top hexagon geometry
const R = 18;
const GAP = 2.5;
const COL_W = R * Math.sqrt(3); // ≈ 31.18
const ROW_H = R * 1.5;          // 27
const PAD = R + 8;

const numCols = computed(() => {
    if (props.total === 0) return 1;
    if (props.total <= 4) return props.total;
    if (props.total <= 8) return 4;
    if (props.total <= 12) return 5;
    if (props.total <= 18) return 6;
    return 7;
});

const numRows = computed(() => Math.max(1, Math.ceil(props.total / numCols.value)));

const hexPts = (cx: number, cy: number, r: number) =>
    Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
    }).join(' ');

const cells = computed(() => {
    const out: Array<{
        x: number; y: number;
        type: 'correct' | 'incorrect' | 'skipped';
        idx: number;
        outer: string; fill: string; shine: string;
    }> = [];

    let i = 0;
    for (let row = 0; row < numRows.value && i < props.total; row++) {
        for (let col = 0; col < numCols.value && i < props.total; col++) {
            const x = PAD + col * COL_W + (row % 2 === 1 ? COL_W / 2 : 0);
            const y = PAD + row * ROW_H;
            const type: 'correct' | 'incorrect' | 'skipped' =
                i < props.correct ? 'correct'
                : i < props.correct + props.incorrect ? 'incorrect'
                : 'skipped';
            out.push({
                x, y, type, idx: i,
                outer: hexPts(x, y, R),
                fill:  hexPts(x, y, R - GAP),
                shine: hexPts(x, y - R * 0.17, (R - GAP) * 0.42),
            });
            i++;
        }
    }
    return out;
});

const vbW = computed(() =>
    PAD * 2 + numCols.value * COL_W + (numRows.value > 1 ? COL_W / 2 : 0),
);
const vbH = computed(() =>
    PAD * 2 + (numRows.value - 1) * ROW_H + R * 2,
);

const CELL_FILL = { correct: '#fbbf24', incorrect: '#e11d48', skipped: '#475569' } as const;
const CELL_SHADOW = { correct: '#92400e', incorrect: '#881337', skipped: '#1e293b' } as const;
</script>

<template>
    <div class="flex select-none flex-col items-center gap-6">
        <!-- Honeycomb -->
        <div class="w-full" style="max-width: 440px">
            <svg
                :viewBox="`0 0 ${vbW} ${vbH}`"
                class="w-full"
                style="overflow: visible"
                aria-hidden="true"
            >
                <g v-for="cell in cells" :key="cell.idx">
                    <!-- Shadow border -->
                    <polygon
                        :points="cell.outer"
                        :fill="CELL_SHADOW[cell.type]"
                        opacity="0.6"
                    />
                    <!-- Coloured fill — staggered pop-in -->
                    <polygon
                        :points="cell.fill"
                        :class="['hx', `hx-${cell.type}`]"
                        :style="{
                            animationDelay: cell.type === 'correct'
                                ? `${cell.idx * 55}ms, ${cell.idx * 55 + 450}ms`
                                : `${cell.idx * 55}ms`,
                        }"
                        :fill="CELL_FILL[cell.type]"
                    />
                    <!-- Specular shine -->
                    <polygon :points="cell.shine" fill="rgba(255,255,255,0.28)" />
                </g>
            </svg>
        </div>

        <!-- Score display -->
        <div class="text-center">
            <p class="text-5xl font-extrabold leading-none tracking-tight" :style="{ color: gradeColor }">
                {{ percentage }}%
            </p>
            <p class="mt-2 text-sm text-muted-foreground">
                {{ score }} / {{ maxScore }} points &nbsp;·&nbsp; {{ gradeLabel }}
            </p>
        </div>

        <!-- Legend -->
        <div class="flex flex-wrap justify-center gap-5 text-sm">
            <span class="flex items-center gap-2">
                <span class="inline-block size-3.5 rounded-[3px]" style="background:#fbbf24" />
                <span class="text-muted-foreground">Correct</span>
                <strong>{{ correct }}</strong>
            </span>
            <span class="flex items-center gap-2">
                <span class="inline-block size-3.5 rounded-[3px]" style="background:#e11d48" />
                <span class="text-muted-foreground">Incorrect</span>
                <strong>{{ incorrect }}</strong>
            </span>
            <span class="flex items-center gap-2">
                <span class="inline-block size-3.5 rounded-[3px]" style="background:#475569" />
                <span class="text-muted-foreground">Skipped</span>
                <strong>{{ skipped }}</strong>
            </span>
        </div>
    </div>
</template>

<style scoped>
/* ── Hex cell pop-in ── */
@keyframes pop-in {
    0%   { opacity: 0; transform: scale(0.1); }
    60%  { transform: scale(1.14); }
    100% { opacity: 1; transform: scale(1); }
}

/* ── Correct cell honey glow ── */
@keyframes honey-glow {
    0%, 100% { filter: drop-shadow(0 0 3px rgba(251, 191, 36, 0.5)); }
    50%       { filter: drop-shadow(0 0 9px rgba(251, 191, 36, 0.95)); }
}

.hx {
    opacity: 0;
    transform-box: fill-box;
    transform-origin: center;
    animation: pop-in 0.44s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.hx-correct {
    animation:
        pop-in     0.44s cubic-bezier(0.34, 1.56, 0.64, 1) both,
        honey-glow 2.2s  ease-in-out infinite;
}
</style>
