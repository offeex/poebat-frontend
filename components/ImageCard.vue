<script setup lang="ts">
	const props = withDefaults(
		defineProps<{
			image: string
			height: string
		}>(),
		{
			height: '300px'
		}
	)
</script>

<template>
	<li>
		<img :src="props.image" alt="" :style='{height: props.height}' />
	</li>
</template>

<style scoped lang="scss">
	li {
		border: 2px dashed $secondary-dark;
		border-radius: 20px;

		padding: 4px;

		img {
			display: block;
			margin: 0;
			width: 100%;
			height: 300px;
			object-fit: fill;
			border-radius: 20px;
		}
	}
</style>
