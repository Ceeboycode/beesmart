<script setup lang="ts">
import { computed } from 'vue';

export type DonutSegment = {
    label: string;
    value: number;
    color: string;
};

const props = withDefaults(
    defineProps<{
        segments: DonutSegment[];
        centerLabel?: string;
        centerSublabel?: string;
        size?: number;
    }>(),
    { size: 180 },
);

const CX = 60;
const CY = 60;
const R_OUTER = 50;
const R_INNER = 32;
const VIEWBOX = 120;
const GAP_DEG = 1.5; // degrees of gap between segments

const total = computed(() => props.segments.reduce((s, seg) => s + seg.value, 0));

const paths = computed(() => {
    if (total.value === 0) return [];

    const gap = (GAP_DEG * Math.PI) / 180;
    let startAngle = -Math.PI / 2;

    return props.segments
        .filter((s) => s.value > 0)
        .map((seg) => {
            const rawAngle = (seg.value / total.value) * 2 * Math.PI;
            const angle = Math.max(rawAngle - gap, 0.001);
            const endAngle = startAngle + angle;

            const x1 = CX + R_OUTER * Math.cos(startAngle);
            const y1 = CY + R_OUTER * Math.sin(startAngle);
            const x2 = CX + R_OUTER * Math.cos(endAngle);
            const y2 = CY + R_OUTER * Math.sin(endAngle);
            const ix1 = CX + R_INNER * Math.cos(startAngle);
            const iy1 = CY + R_INNER * Math.sin(startAngle);
            const ix2 = CX + R_INNER * Math.cos(endAngle);
            const iy2 = CY + R_INNER * Math.sin(endAngle);
            const large = angle > Math.PI ? 1 : 0;

            const path = [
                `M ${x1.toFixed(2)} ${y1.toFixed(2)}`,
                `A ${R_OUTER} ${R_OUTER} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`,
                `L ${ix2.toFixed(2)} ${iy2.toFixed(2)}`,
                `A ${R_INNER} ${R_INNER} 0 ${large} 0 ${ix1.toFixed(2)} ${iy1.toFixed(2)}`,
                'Z',
            ].join(' ');

            startAngle += rawAngle;
            return { path, color: seg.color, label: seg.label, value: seg.value };
        });
});

const emptyRing = computed(() => total.value === 0);
</script>

<template>
    <div class="flex flex-col items-center gap-4">
        <svg
            :width="size"
            :height="size"
            :viewBox="`0 0 ${VIEWBOX} ${VIEWBOX}`"
            class="overflow-visible"
            role="img"
            :aria-label="centerLabel"
        >
            <!-- empty state ring -->
            <circle
                v-if="emptyRing"
                :cx="CX"
                :cy="CY"
                :r="(R_OUTER + R_INNER) / 2"
                :stroke-width="R_OUTER - R_INNER"
                stroke="currentColor"
                fill="none"
                class="text-muted/40"
            />

            <path
                v-for="(seg, i) in paths"
                :key="i"
                :d="seg.path"
                :fill="seg.color"
                class="transition-opacity hover:opacity-80"
                style="animation: donut-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both"
                :style="{ animationDelay: `${i * 80}ms` }"
            />

            <!-- Center text -->
            <template v-if="centerLabel">
                <text
                    :x="CX"
                    :y="centerSublabel ? CY - 4 : CY + 5"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-size="14"
                    font-weight="700"
                    fill="currentColor"
                    class="text-foreground"
                >
                    {{ centerLabel }}
                </text>
                <text
                    v-if="centerSublabel"
                    :x="CX"
                    :y="CY + 11"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-size="7"
                    fill="currentColor"
                    class="text-muted-foreground"
                    opacity="0.7"
                >
                    {{ centerSublabel }}
                </text>
            </template>
        </svg>

        <!-- Legend -->
        <div class="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
            <div
                v-for="seg in segments.filter((s) => s.value > 0)"
                :key="seg.label"
                class="flex items-center gap-1.5 text-xs"
            >
                <span
                    class="size-2.5 shrink-0 rounded-sm"
                    :style="{ background: seg.color }"
                />
                <span class="text-muted-foreground">{{ seg.label }}</span>
                <span class="font-semibold tabular-nums">{{ seg.value }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes donut-pop {
    from { opacity: 0; transform-origin: 60px 60px; transform: scale(0.6); }
    to   { opacity: 1; transform-origin: 60px 60px; transform: scale(1); }
}
</style>
