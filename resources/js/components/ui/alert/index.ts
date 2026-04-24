import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Alert } from "./Alert.vue"
export { default as AlertDescription } from "./AlertDescription.vue"
export { default as AlertTitle } from "./AlertTitle.vue"

export const alertVariants = cva(
  "relative w-full rounded-2xl border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default:
          "bg-card text-card-foreground border-border",
        destructive:
          "bg-red-50 text-red-800 border-red-200 [&>svg]:text-red-600 dark:bg-red-950/30 dark:text-red-300 dark:border-red-900/50",
        honey:
          "bg-amber-50 text-amber-900 border-amber-200 [&>svg]:text-amber-600 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800/50",
        success:
          "bg-emerald-50 text-emerald-900 border-emerald-200 [&>svg]:text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-900/50",
        warning:
          "bg-yellow-50 text-yellow-900 border-yellow-200 [&>svg]:text-yellow-600 dark:bg-yellow-950/30 dark:text-yellow-300 dark:border-yellow-900/50",
        info:
          "bg-blue-50 text-blue-900 border-blue-200 [&>svg]:text-blue-600 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-900/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export type AlertVariants = VariantProps<typeof alertVariants>
