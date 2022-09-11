<script lang="ts">
	import { fly } from 'svelte/transition';
	import Instagram from './svg/Icons/Instagram.svelte';
</script>

<header
	transition:fly
	class="fixed w-full top-0 z-30 h-12 flex justify-center bg-black bg-opacity-80"
>
	<div class="max-w-7xl w-full border-b border-white flex justify-between">
		<div class="flex px-2 sm:px-12 h-full items-center">
			<a href="/">
				<h1 class="hidden sm:flex text-2xl font-bold hover:text-teal-500 hover:shadow">
					<img class="h-6 my-auto mr-2" src="logo_sat.png" alt="logosat" />
					SATROCKS XIV
				</h1>

				<h1
					class="flex flex-col justify-center sm:hidden text-2xl font-bold hover:text-teal-500 hover:shadow"
				>
					<p class="text-xs -mb-2">SATROCKS</p>
					<p>XIV</p>
				</h1>
			</a>

			<a href="#lineup">
				<p class="text-sm sm:text-base mx-1 sm:mx-4 ml-4 hover:text-teal-500 hover:shadow">
					Lineup
				</p>
			</a>
			<a href="#artists">
				<p class="text-sm sm:text-base mx-1 sm:mx-4 hover:text-teal-500 hover:shadow">Artistes</p>
			</a>
			<a href="#infos">
				<p class="text-sm sm:text-base mx-1 sm:mx-4  hover:text-teal-500 hover:shadow">Infos</p>
			</a>
			<a href="#tickets">
				<p class="text-sm sm:text-base mx-1 sm:mx-4  hover:text-teal-500 hover:shadow">
					Billeterie
				</p>
			</a>
		</div>
		<div class="my-auto w-5 h-5 mr-4">
			<a href="https://www.instagram.com/barsatellite/" target="_blank">
				<Instagram />
			</a>
		</div>
	</div>
</header>
