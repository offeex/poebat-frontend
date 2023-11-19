<script setup lang="ts">
	const props = defineProps<{ title: string; image: string }>()
</script>

<template>
	<li>
		<img :src="props.image" />
		<span class="text">{{ props.title }}</span>
	</li>
</template>

<style scoped lang="scss">
	li {
		border: 2px dashed $secondary-dark;
		border-radius: 20px;

		width: 100%;
		height: 100%;
		padding: 10px;
		box-sizing: border-box;

		display: flex;
		justify-content: left;
		align-items: center;
		gap: 16px;
	}

	.text {
		font-size: 24px;
		font-weight: 500;
	}

	img {
		display: block;
		margin: 0;
		width: 140px;
		height: 140px;
		border-radius: 10px;
		object-fit: fill;
	}

	@media screen and (max-width: 480px) {
		img {
			width: 80px;
			height: 80px;
		}
	}
</style>
