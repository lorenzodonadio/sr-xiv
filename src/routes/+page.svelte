<script lang="ts">
	import AnimalLayer from '$lib/components/AnimalLayer.svelte';
	import ArtistCard from '$lib/components/cards/ArtistCard.svelte';
	import Lineup from '$lib/components/Lineup.svelte';
	import { descriptions } from '$lib/components/descriptions';
	import { setShowOnScroll } from '$lib/stores/headerState';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
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
	class="flex-col justify-center mx-auto max-w-7xl relative z-20 opacity-90 px-2 sm:px-12"
>
	<section class=" pt-12 h-screen" id="hero">
		<h2 class="font-bold text-2xl md:text-3xl lg:text-5xl my-8 text-center">
			La 14ème édition de notre festival SATROCKS revient le 7 octobre 2022, de 19h à 3h.
		</h2>

		<div>
			<p />

			<div class="flex justify-center">
				<ImageCarousel />
			</div>
			<p>
				SatRocks est un festival de 1400 personnes, 4 scènes, et de nombreux.ses artistes venant
				d'ici et d'ailleurs. La musique ne fait pas l'entièreté du festival, il y aura aussi des
				nomades, des bars à bières et différentes activités éparpillées sur le site.
			</p>
		</div>
	</section>

	<section class=" pt-12" id="lineup">
		<Lineup />
	</section>
	<section class=" pt-12" id="artists">
		<div class="flex flex-wrap gap-4 justify-center">
			<ArtistCard title="Archair" src="artists/archair.png" text={descriptions.archair} />
			<ArtistCard title="I-Bredda" src="artists/l_bredda.jpeg" text={descriptions.i_bredda} />
			<ArtistCard title="Kety Fusco" src="artists/kety_fusco.jpg" text={descriptions.kety_fusco} />
			<ArtistCard title="We Are Magonia" src="artists/we_magonia.png" text={descriptions.magonia} />
			<ArtistCard
				title="Maissouille"
				src="artists/maissouille.jpeg"
				text={descriptions.maissouille}
			/>
			<ArtistCard title="Mascarpone" src="artists/mascarpone.jpeg" text={descriptions.mascarpone} />
			<ArtistCard
				title="Nathalie Froehlich"
				src="artists/nathalie_froehlich.jpg"
				text={descriptions.nathalie}
			/>
			<ArtistCard title="Regal Trip" src="artists/regal_trip.jpg" text={descriptions.regal_trip} />
			<ArtistCard title="Roots of Joy" src="artists/roots_joy.jpeg" text={descriptions.roots_joy} />
			<ArtistCard
				title="Wading Birds"
				src="artists/wading_birds.jpeg"
				text={descriptions.wading_birds}
			/>
		</div>
	</section>

	<section class=" pt-12" id="tickets">BILLETERIE?</section>
	<section class=" pt-12" id="infos">
		<p>
			19h00 : Ouverture des portes - 20h00 : Début des concerts - 02h30 : Fin de la Musique - 03h00
			: Fermeture des portes
		</p>
	</section>
</div>
