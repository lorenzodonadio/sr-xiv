<script lang="ts">
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

<div class="z-10 relative origin-top-left top-0 opacity-80 h-full">
	{#if clientHeight > 0}
		<AnimalLayer {scrollY} {clientHeight} />
	{/if}
</div>

<div
	bind:clientHeight
	class="flex-col justify-center mx-auto w-full max-w-7xl  relative z-20 opacity-90 px-2 sm:px-12"
>
	<section class=" pt-12 h-screen" id="hero">
		<h2 class="font-bold text-2xl md:text-3xl lg:text-5xl my-8 text-center">
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
			<div class="w-40 sm:w-56">
				<TranslucidCard
					><div class="sm:p-2">
						<h5 class="text-2xl sm:text-4xl font-extrabold">15.- CHF</h5>
						<span class="sm:text-lg">Plein tarif</span>
					</div></TranslucidCard
				>
			</div>
			<div class="w-40 sm:w-56">
				<TranslucidCard
					><div class="sm:p-2">
						<h5 class="text-2xl sm:text-4xl font-extrabold">10.- CHF</h5>
						<span class="sm:text-lg">Avec la carte Sat</span>
					</div></TranslucidCard
				>
			</div>
		</div>
		<div class="px-4 pt-2">
			Vous pouvez acheter des places:
			<ul class="list-disc ml-8">
				<li>en ligne, sur le site Petzi</li>
				<li>chez l'un des points de vente Petzi</li>
				<li>à Satellite entre 11h et 14h ou à semaine des associations jusqu'a soldout!</li>
			</ul>
		</div>
	</section>
	<section class=" pt-12" id="infos">
		<h2 class="font-bold text-3xl lg:text-5xl mb-4 text-center">Infos pratiques</h2>

		<p>
			19h00 : Ouverture des portes - 20h00 : Début des concerts - 02h30 : Fin de la Musique - 03h00
			: Fermeture des portes
		</p>
		<p>On a un grill etc etc</p>
		<p>
			Entrée et sécurité : Sont strictement interdits à l'intérieur du festival : les objets
			dangereux, les liquides, boissons, gourdes, bouteilles et autres contenants—même vides—venant
			de l'extérieur.
		</p>
		<p>Attention : toute sortie du site est définitive !</p>
		<p>
			Jeune public : L'entrée au festival est interdite aux personnes de moins de 16 ans
			non-accompagnées d'un parent ou d'une personne adulte responsable.
		</p>
		<p>
			Venez en transports publics! Métro M1 : Arrêt EPFL. <br />
			Bus 31, 105 : Arrêt Blévallaire / Argand. <br />
			Bus 701 : Arrêt Pâqueret. <br />
			Des navettes retour des TL partiront de l'avenue Picard à 01h30,02h30 et 03h15. Arrêts : Renens,
			Malley et Lausanne-Flon.
		</p>
		<p>Attention : Le parking du Rolex Learning Center fermera ses portes à minuit.</p>
	</section>
	<Footer />
</div>
