<script lang="ts">
	import TranslucidCard from './TranslucidCard.svelte';

	export let text: string;
	export let src: string;
	export let title: string;

	let hideText = true;
</script>

<TranslucidCard>
	<h3 class="font-semibold text-xl my-2 text-center">{title}</h3>
	<img class=" rounded-md w-full max-h-40 object-cover" {src} alt={title} />
	<p on:click={() => (hideText = !hideText)} class:line-clamp-5={hideText} class="text-justify ">
		{@html text}
	</p>
	<div class="flex justify-between mt-2">
		<div class="">
			<slot />
		</div>

		<button class="hover:text-teal-400" on:click={() => (hideText = !hideText)}
			>{hideText ? 'Lire plus +' : 'Lire moins -'}</button
		>
	</div>
</TranslucidCard>
