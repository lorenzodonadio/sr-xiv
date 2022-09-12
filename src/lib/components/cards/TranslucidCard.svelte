<script lang="ts">
	export let colorTo = 'to-emerald-200';
</script>

<div class="relative rounded-xl p-4 max-w-sm shadow-md">
	<div class="rounded-xl absolute inset-0 bg-gradient-to-tr from-white {colorTo} opacity-30" />
	<div class="relative">
		<slot />
	</div>
</div>
