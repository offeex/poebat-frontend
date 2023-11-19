<script setup lang="ts">
	defineProps<{
		gap: number
		columns: number
	}>()
</script>

<template>
	<ul :style="{ '--grid-gap': `${gap}px`, '--columns': `${columns}` }">
		<slot></slot>
	</ul>
</template>

<style scoped lang="scss">
	ul {
		list-style: none;
		padding: 0;
		margin: 0;

		display: grid;
		grid-gap: var(--grid-gap);
		grid-template-columns: repeat(var(--columns), 1fr);
	}

	@media screen and (max-width: 1024px) {
		ul {
			grid-template-columns: 1fr;
		}
	}
</style>
