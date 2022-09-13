<script lang="ts">
	import Infos from './Infos.svelte';

	import Artists from '../lib/components/Artists.svelte';

	import AnimalLayer from '$lib/components/AnimalLayer.svelte';
	import Lineup from '$lib/components/Lineup.svelte';
	import { setShowOnScroll } from '$lib/stores/headerState';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import TranslucidCard from '$lib/components/cards/TranslucidCard.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let scrollY: number;
	let clientHeight: number;
	$: if (scrollY) {
		setShowOnScroll(scrollY);
	}
	//$: console.log(clientHeight);
</script>

<svelte:window bind:scrollY />

<div class="z-10 relative origin-top-left top-0 opacity-90">
	{#if clientHeight > 0}
		<AnimalLayer {scrollY} {clientHeight} />
	{/if}
</div>

<div
	bind:clientHeight
	class="flex-col justify-center mx-auto w-full max-w-7xl  relative z-20 opacity-90 px-2 sm:px-12"
>
	<section class="pt-12 h-screen flex flex-col justify-evenly" id="hero">
		<h2 class="font-bold text-2xl md:text-3xl lg:text-5xl  sm:my-3 md:my-5 lg:my-7 text-center">
			La XIV édition de notre festival SATROCKS revient le 7 octobre 2022, de 19h à 3h.
		</h2>

		<div>
			<p />

			<div class="flex justify-center">
				<ImageCarousel />
			</div>
			<p class="mt-4  sm:text-lg text-center">
				SatRocks est un festival de 1400 personnes, 4 scènes, et de nombreux.ses artistes venant
				d'ici et d'ailleurs. La musique ne fait pas l'entièreté du festival, il y aura aussi des
				nomades, des bars à bières et différentes activités éparpillées sur le site
			</p>
		</div>
	</section>

	<section class=" pt-12" id="lineup">
		<h2 class="font-bold text-3xl lg:text-5xl mb-4 text-center">Line up</h2>
		<Lineup />
	</section>
	<section class=" pt-12" id="artists">
		<h2 class="font-bold text-3xl lg:text-5xl mb-4 text-center">Artistes</h2>

		<Artists />
	</section>

	<section class=" pt-12" id="tickets">
		<h2 class="font-bold text-3xl lg:text-5xl mb-4 text-center">Billeterie</h2>

		<div class="flex justify-evenly">
			<a
				href="https://www.petzi.ch/en/events/49951-satellite-satrocks-xiv/"
				target="_blank"
				class="w-40 sm:w-56"
			>
				<TranslucidCard colorTo="to-cyan-400"
					><div class="sm:p-2 ">
						<h5 class="text-2xl sm:text-4xl font-extrabold">15.- CHF</h5>
						<span class="sm:text-lg">Plein tarif</span>
					</div></TranslucidCard
				>
			</a>
			<a
				href="https://www.petzi.ch/en/events/49951-satellite-satrocks-xiv/"
				target="_blank"
				class="w-40 sm:w-56"
			>
				<TranslucidCard colorTo="to-violet-400"
					><div class="sm:p-2">
						<h5 class="text-2xl sm:text-4xl font-extrabold">10.- CHF</h5>
						<span class="sm:text-lg">Avec la carte Sat</span>
					</div></TranslucidCard
				>
			</a>
		</div>
		<div class="flex justify-center text-lg">
			<div class="pt-2">
				Vous pouvez acheter des places:
				<ul class="list-disc ml-8">
					<li>
						en ligne, sur le site <a
							class="hover:text-teal-400 font-semibold underline text-teal-200"
							href="https://www.petzi.ch/en/events/49951-satellite-satrocks-xiv/"
							target="_blank">Petzi</a
						>
					</li>
					<li>chez l'un des points de vente Petzi</li>
					<li>à Satellite entre 11-13h et 15-17h, à partir du 15 septembre jusqu'à soldout!</li>
					<li>au stand Satellite à la semaine des associations</li>
				</ul>
			</div>
		</div>
	</section>
	<section class=" pt-12" id="infos">
		<h2 class="font-bold text-3xl lg:text-5xl mb-4 text-center">Infos pratiques</h2>

		<Infos />
	</section>
	<Footer />
</div>
