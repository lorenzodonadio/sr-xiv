<script lang="ts">
	import '../app.postcss';
	import GradientBackground from '$lib/components/GradientBackground.svelte';
	import Header from '$lib/components/Header.svelte';
	import { showHeader } from '$lib/stores/headerState';

	export const prerender = true;
</script>

<div class="text-white min-h-screen h-full w-full relative overflow-x-hidden">
	<GradientBackground />
	{#if $showHeader}
		<Header />
	{/if}

	<main class="scroll-smooth snap-y snap-proximity">
		<slot />
	</main>
</div>
