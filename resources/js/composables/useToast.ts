import { toast as sonnerToast } from 'vue-sonner';

const BEE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" style="width:18px;height:18px">
  <ellipse cx="32" cy="38" rx="13" ry="16" fill="#F59E0B"/>
  <rect x="19" y="33" width="26" height="4.5" rx="2.25" fill="#1C1917" opacity="0.4"/>
  <rect x="19" y="41" width="26" height="4.5" rx="2.25" fill="#1C1917" opacity="0.4"/>
  <circle cx="32" cy="20" r="9" fill="#F59E0B"/>
  <ellipse cx="16" cy="29" rx="10" ry="5.5" fill="white" opacity="0.6" transform="rotate(-22 16 29)"/>
  <ellipse cx="48" cy="29" rx="10" ry="5.5" fill="white" opacity="0.6" transform="rotate(22 48 29)"/>
</svg>`;

type ToastOptions = Parameters<typeof sonnerToast>[1];

export function useToast() {
    /** Standard info-style notification */
    function info(message: string, options?: ToastOptions) {
        return sonnerToast.info(message, options);
    }

    /** Green success notification */
    function success(message: string, options?: ToastOptions) {
        return sonnerToast.success(message, options);
    }

    /** Red error notification */
    function error(message: string, options?: ToastOptions) {
        return sonnerToast.error(message, options);
    }

    /** Yellow warning notification */
    function warning(message: string, options?: ToastOptions) {
        return sonnerToast.warning(message, options);
    }

    /** BeeSmart amber/honey branded notification */
    function honey(message: string, options?: ToastOptions) {
        return sonnerToast(message, {
            ...options,
        });
    }

    /** Loading toast — returns the toast ID so you can dismiss it */
    function loading(message: string, options?: ToastOptions) {
        return sonnerToast.loading(message, options);
    }

    /** Dismiss a specific toast by ID, or all toasts if no ID given */
    function dismiss(id?: string | number) {
        return sonnerToast.dismiss(id);
    }

    /** Promise toast — shows loading, then resolves to success or error */
    function promise<T>(
        promiseFn: Promise<T>,
        messages: { loading: string; success: string; error: string },
        options?: ToastOptions,
    ) {
        return sonnerToast.promise(promiseFn, {
            loading: messages.loading,
            success: messages.success,
            error: messages.error,
            ...options,
        });
    }

    return { info, success, error, warning, honey, loading, dismiss, promise };
}
