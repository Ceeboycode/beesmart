import { ref } from 'vue';

// Module-level state — shared across the entire app (singleton)
const isLoading = ref(false);
const loadingLabel = ref('Loading...');

export function useLoading() {
    function show(label = 'Loading...') {
        loadingLabel.value = label;
        isLoading.value = true;
    }

    function hide() {
        isLoading.value = false;
    }

    async function run<T>(action: () => Promise<T>, label = 'Loading...'): Promise<T> {
        show(label);
        try {
            return await action();
        } finally {
            hide();
        }
    }

    return { isLoading, loadingLabel, show, hide, run };
}
