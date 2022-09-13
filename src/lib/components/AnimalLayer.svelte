<script lang="ts">
	import Fish from '$svg/Fish.svelte';
	import Fish1 from '$svg/Fish1.svelte';
	import Fish1flip from '$svg/Fish1flip.svelte';
	import Seastar from '$svg/Seastar.svelte';
	import Shark from '$svg/Shark.svelte';
	import Sharkflip from '$svg/Sharkflip.svelte';
	import Turtle from '$svg/Turtle.svelte';
	import Manta from '$lib/components/svg/Manta.svelte';
	import Manta1 from '$lib/components/svg/Manta1.svelte';
	import Manta2 from '$lib/components/svg/Manta2.svelte';
	import Shark1 from '$lib/components/svg/Shark1.svelte';
	import Shark2 from '$lib/components/svg/Shark2.svelte';
	import Shark3 from '$lib/components/svg/Shark3.svelte';
	import Shark4 from '$lib/components/svg/Shark4.svelte';
	import Jelly from '$lib/components/svg/Jelly.svelte';
	import Crab from '$lib/components/svg/Crab.svelte';
	import Fish2 from '$lib/components/svg/Fish2.svelte';
	import Fish3 from '$lib/components/svg/Fish3.svelte';
	import Fish4 from '$lib/components/svg/Fish4.svelte';
	import Seahorse from '$lib/components/svg/Seahorse.svelte';
	import Seashell from '$lib/components/svg/Seashell.svelte';
	import Angler from './svg/Angler.svelte';
	export let scrollY: number;
	export let clientHeight: number;

	let animals = [
		//Top Manta Rays
		{ top: 5, w: 20, left: 15, fill: '#000000', opacity: 0.2, v: 0.1, component: Manta2 },
		{ top: 4, w: 10, left: 0, fill: '#000000', opacity: 0.44, v: 0.1, component: Manta1 },
		{ top: 9, w: 18, left: 25, fill: '#000000', opacity: 0.7, v: 0.1, component: Manta },
		{ top: 7, w: 20, left: 4, fill: '#000000', opacity: 0.8, v: 0.11, component: Manta },
		{ top: 8, w: 9, left: 90, fill: '#000000', opacity: 0.8, v: 0.12, component: Manta },
		{ top: 7, w: 16, left: 74, fill: '#000000', opacity: 0.6, v: 0.09, component: Manta },
		{ top: 4, w: 16, left: 55, fill: '#000000', opacity: 0.15, v: 0.095, component: Manta1 },
		{ top: 1, w: 15, left: 60, fill: '#000000', opacity: 0.5, v: 0.09, component: Manta2 },
		{ top: 22, w: 6, left: 65, fill: '#000000', opacity: 0.8, v: -0.05, component: Seahorse },
		{ top: 20.5, w: 3, left: 78, fill: '#000000', opacity: 0.6, v: -0.05, component: Seahorse },
		{ top: 18, w: 5, left: 60, fill: '#000000', opacity: 0.7, v: -0.05, component: Seahorse },
		{ top: 14, w: 5, left: 35, fill: '#000000', opacity: 0.5, v: 0.2, component: Seashell },
		{ top: 15, w: 3, left: 85, fill: '#000000', opacity: 0.5, v: 0.2, component: Seashell },
		{ top: 25, w: 35, left: 45, fill: '#000000', opacity: 0.5, v: 0.15, component: Jelly },
		{ top: 55, w: 25, left: 25, fill: '#000000', opacity: 0.5, v: -1.55, component: Jelly },
		{ top: 26, w: 10, left: 10, fill: '#000000', opacity: 0.6, v: -1.13, component: Jelly },
		{ top: 93, w: 12, left: 70, fill: '#000000', opacity: 0.6, v: -1.2, component: Jelly },
		{ top: 92, w: 8, left: 30, fill: '#000000', opacity: 0.7, v: -1.12, component: Jelly },
		{ top: 26, w: 20, left: 20, fill: '#000000', opacity: 0.6, v: 0.13, component: Shark },
		{ top: 36, w: 20, left: 30, fill: '#000000', opacity: 0.6, v: 0.13, component: Shark1 },
		{ top: 46, w: 20, left: 40, fill: '#000000', opacity: 0.6, v: 0.13, component: Shark3 },
		{ top: 45, w: 18, left: 5, fill: '#000000', opacity: 0.65, v: -0.13, component: Fish4 },

		{ top: 56, w: 10, left: 5, fill: '#000000', opacity: 0.7, v: -0.08, component: Turtle },
		{ top: 62, w: 15, left: 23, fill: '#000000', opacity: 0.7, v: -0.08, component: Turtle },
		{ top: 61, w: 8, left: 15, fill: '#000000', opacity: 0.7, v: -0.08, component: Seastar },
		{ top: 64, w: 12, left: 3, fill: '#000000', opacity: 0.7, v: -0.08, component: Fish },
		{ top: 60, w: 13, left: 75, fill: '#000000', opacity: 0.6, v: -0.08, component: Fish1 },
		{ top: 63, w: 30, left: 35, fill: '#000000', opacity: 0.3, v: -0.08, component: Seastar },
		{ top: 83, w: 20, left: 5, fill: '#000000', opacity: 0.3, v: -0.58, component: Seastar },
		{ top: 33, w: 15, left: 55, fill: '#000000', opacity: 0.3, v: -0.88, component: Seastar },
		{ top: 57, w: 11, left: 85, fill: '#000000', opacity: 0.5, v: -0.08, component: Fish4 },

		{ top: 70, w: 12, left: 8, fill: '#000000', opacity: 0.55, v: -0.3, component: Fish4 },
		{ top: 70, w: 12, left: 10, fill: '#000000', opacity: 0.76, v: -0.05, component: Fish2 },
		{ top: 70, w: 14, left: 12, fill: '#000000', opacity: 0.56, v: -0.13, component: Fish4 },
		{ top: 90, w: 20, left: 80, fill: '#000000', opacity: 0.36, v: -0.6, component: Shark3 },
		{ top: 70, w: 15, left: 75, fill: '#000000', opacity: 0.86, v: -0.05, component: Crab },
		{ top: 70, w: 11, left: 86, fill: '#000000', opacity: 0.6, v: -0.13, component: Crab },

		{ top: 70, w: 65, left: 20, fill: '#000000', opacity: 0.35, v: -0.2, component: Angler },
		{ top: 80, w: 75, left: 10, fill: '#000000', opacity: 0.55, v: -0.1, component: Angler },
		{ top: 92, w: 15, left: 20, fill: '#000000', opacity: 0.55, v: -0.12, component: Shark4 },
		{ top: 92, w: 20, left: 40, fill: '#000000', opacity: 0.55, v: -0.12, component: Shark2 },
		{ top: 92, w: 8, left: 3, fill: '#000000', opacity: 0.75, v: -0.05, component: Fish1flip },
		{ top: 92, w: 25, left: 70, fill: '#000000', opacity: 0.65, v: -0.1, component: Sharkflip },
		{ top: 92, w: 11, left: 10, fill: '#000000', opacity: 0.45, v: -0.1, component: Fish3 },
		{ top: 92, w: 8, left: 14, fill: '#000000', opacity: 0.45, v: -0.01, component: Fish3 },
		{ top: 93, w: 7, left: 18, fill: '#000000', opacity: 0.45, v: -0.13, component: Fish3 },
		{ top: 92, w: 11, left: 7, fill: '#000000', opacity: 0.45, v: -0.091, component: Fish3 }
	];
</script>

{#each animals as a}
	<div
		style="left: {a.left}%; width: {a.w}%;opacity: {a.opacity};
		top:{(a.top / 100) * clientHeight}px ;  transform: translateY({a.v * scrollY}px) ;"
		class="absolute min-w-[50px] max-w-3xl"
	>
		<svelte:component this={a.component} fill={a.fill} />
	</div>
{/each}
