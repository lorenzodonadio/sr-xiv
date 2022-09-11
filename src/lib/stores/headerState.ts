import { writable } from 'svelte/store';

export let showHeader = writable(true);

let lastY = 0;
export let setShowOnScroll = (scrollY: number) => {
	if (scrollY <= 32) {
		showHeader.set(true);
		lastY = scrollY;
	} else {
		const dy = scrollY - lastY;
		lastY = scrollY;

		if (dy >= 0) {
			showHeader.set(false);
		} else showHeader.set(true);
	}
};
