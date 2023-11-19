<script setup lang="ts">
	defineProps<{
		image: string
		title: string
		direction: string
		summary: string
		review: string
	}>()
</script>

<template>
	<article>
		<div class='title'>
			<img :src="image" alt="" />
			<h5 class='name'>{{ title }}</h5>
			<span class="direction">{{ direction }}</span>
		</div>
<!--		<h5 class="summary">{{ summary }}</h5>-->
		<span class="review">{{ review }}</span>
	</article>
</template>

<style scoped lang="scss">
	article {
		background-color: transparentize($secondary-dark, 0.75);
		//background-color: $background-dark;

		border: 1px solid $secondary-dark;
		border-radius: 20px;

		padding: 20px 20px;
	}

	.title {
		display: grid;
		align-items: center;
		grid-template-columns: 48px + 12 1fr;
		grid-template-rows: 24px 24px 1fr;
		margin-bottom: 10px;
	}

	img {
		width: 48px;
		height: 48px;
		object-fit: cover;
		border-radius: 10px;

		grid-column: 1;
		grid-row: 1 / 3;
	}

	.name {
		font-weight: 700;

		grid-column: 2;
		grid-row: 1;
	}

	.direction {
		font-weight: 700;

		grid-column: 2;
		grid-row: 2;
	}

	.summary {
		font-weight: 500;

		grid-column: 1 / 3;
		grid-row: 3;
	}

	.review {
		font-size: 1rem;
		font-weight: 400;

		grid-column: 1 / 3;
		grid-row: 4;
	}
</style>
