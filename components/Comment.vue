<script setup lang="ts">
	defineProps<{
		image: string
		name: string
		description: string
	}>()
</script>

<template>
	<article>
		<img :src="image" alt="" />
		<div class="text">
			<h4 class="name">{{ name }}</h4>
			<span class="description">{{ description }}</span>
		</div>
	</article>
</template>

<style scoped lang="scss">
	$image_size: 96px;

	article {
		display: flex;
		align-items: center;
		gap: 20px;

		//background-color: $secondary-dark;
		border: 3px dotted $primary-dark;
		border-radius: 20px;

		padding: 6px 9px 6px 9px;
	}

	img {
		width: $image_size;
		height: 200px;
		object-fit: cover;
		border-radius: 12px;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.name {
		font-weight: 870;
	}

	.description {
		grid-column: 1 / 3;
		font-weight: 600;
	}

	@media screen and (max-width: 768px) {
		img {
			height: 120px;
		}
	}
</style>
