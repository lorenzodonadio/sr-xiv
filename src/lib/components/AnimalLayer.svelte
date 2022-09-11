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
		{ top: 26, w: 10, left: 10, fill: '#000000', opacity: 0.6, v: 0.13, component: Jelly },
		{ top: 26, w: 20, left: 20, fill: '#000000', opacity: 0.6, v: 0.13, component: Shark },
		{ top: 36, w: 20, left: 30, fill: '#000000', opacity: 0.6, v: 0.13, component: Shark1 },
		{ top: 46, w: 20, left: 40, fill: '#000000', opacity: 0.6, v: 0.13, component: Shark3 },
		{ top: 56, w: 20, left: 50, fill: '#000000', opacity: 0.6, v: 0.13, component: Shark3 }
	];
</script>

{#each animals as a}
	<div
		style="left: {a.left}%; width: {a.w}%;opacity: {a.opacity};
		top:{(a.top / 100) * clientHeight}px ;  transform: translateY({a.v * scrollY}px) ;"
		class="absolute min-w-[50px]"
	>
		<svelte:component this={a.component} fill={a.fill} />
	</div>
{/each}
