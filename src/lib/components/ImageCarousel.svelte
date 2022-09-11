<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import { fade } from 'svelte/transition';

	const carouselPhotos = [
		'/homeimg/img1.jpg',
		'/homeimg/img2.jpg',
		'/homeimg/img3.jpg',
		'/homeimg/img4.jpg',
		'/homeimg/img5.jpg',
		'/homeimg/img6.jpg',
		'/homeimg/img7.jpg',
		'/homeimg/img8.jpg'
	];

	let index = 0;
	let interval: any;

	const next = () => {
		index = (index + 1) % carouselPhotos.length;
	};
	const back = () => {
		index = index === 0 ? carouselPhotos.length - 1 : (index - 1) % carouselPhotos.length;
	};

	onMount(() => {
		for (const i in carouselPhotos) {
			setTimeout(() => {
				next();
			}, 200 * (1 + parseInt(i)));
		}
		setTimeout(() => {
			interval = setInterval(() => {
				next();
			}, 3000);
		}, 200 * carouselPhotos.length);
	});

	onDestroy(() => clearInterval(interval));
</script>

<div
	class="w-[90%] lg:w-[70%] min-w-[370px] aspect-video relative rounded-md shadow-lg overflow-clip"
>
	{#each [carouselPhotos[index]] as src (index)}
		<img
			class="absolute w-full h-full object-cover"
			transition:fade={{ duration: 100 }}
			{src}
			alt=""
		/>
	{/each}

	<button
		class="absolute top-[48%] hover:text-teal-400 font-bold opacity-80 right-1 p-2"
		on:click={next}>&#62</button
	>
	<button
		class="absolute top-[48%] hover:text-teal-400 font-bold opacity-80 left-1 p-2"
		on:click={back}>&#60</button
	>
</div>
