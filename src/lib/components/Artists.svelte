<script lang="ts">
	import ArtistCard from '$lib/components/cards/ArtistCard.svelte';
	import { descriptions } from '$lib/components/descriptions';

	//$: console.log(clientHeight);
</script>

<h3 id="grandescene" class="text-left mb-2 sm:mb-4 text-xl sm:text-4xl font-semibold">
	GRANDE SCENE
</h3>
<div class="flex flex-wrap gap-4 justify-center">
	<ArtistCard title="Soom T & The Stone Monks" src="artists/soomt.jpg" text={descriptions.soomt} />
	<ArtistCard title="We Are Magonia" src="artists/we_magonia.png" text={descriptions.magonia} />
	<ArtistCard title="Regal Trip" src="artists/regal_trip.jpg" text={descriptions.regal_trip} />
</div>
<h3 id="scenesat" class="text-left my-2 sm:my-4 text-xl sm:text-4xl font-semibold">SCENE SAT</h3>
<div class="flex flex-wrap gap-4 justify-center">
	<ArtistCard
		title="Nathalie Froehlich ft. Yanneck"
		src="artists/nathalie_froehlich.jpg"
		text={descriptions.nathalie}
	/>
	<ArtistCard title="Kety Fusco" src="artists/kety_fusco.jpg" text={descriptions.kety_fusco} />
	<ArtistCard title="Archair" src="artists/archair.png" text={descriptions.archair} />
</div>
<h3 id="sceneunder" class="text-left my-2 sm:my-4 text-xl sm:text-4xl font-semibold">
	SCENE UNDERGROUND
</h3>
<div class="flex flex-wrap gap-4 justify-center">
	<ArtistCard title="Afterlife" src="artists/afterlife.jpg" text={descriptions.afterlife} />
	<ArtistCard title="Mascarpone" src="artists/mascarpone.jpeg" text={descriptions.mascarpone} />
	<ArtistCard title="Maissouille" src="artists/maissouille.jpeg" text={descriptions.maissouille} />
</div>
<h3 id="scenechill" class="text-left my-2 sm:my-4 text-xl sm:text-4xl font-semibold">
	SCENE CHILL
</h3>
<div class="flex flex-wrap gap-4 justify-center">
	<ArtistCard
		title="Wading Birds Sound System"
		src="artists/wading_birds.jpeg"
		text={descriptions.wading_birds}
	/>
	<ArtistCard title="Roots of Joy" src="artists/roots_joy.jpeg" text={descriptions.roots_joy} />
	<ArtistCard title="I-Bredda" src="artists/l_bredda.jpeg" text={descriptions.i_bredda} />
</div>
