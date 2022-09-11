<script lang="ts">
	import TranslucidCard from './TranslucidCard.svelte';

	export let text: string;
	export let src: string;
	export let title: string;
</script>

<TranslucidCard>
	<h3 class="font-semibold text-xl my-2 text-center">{title}</h3>
	<img class=" rounded-md w-full max-h-40 object-cover" {src} alt={title} />
	<p class="text-justify line-clamp-5">
		{text}
	</p>
	<slot />
</TranslucidCard>
