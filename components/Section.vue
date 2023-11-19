<script setup lang="ts">
	withDefaults(
		defineProps<{
			title: String
			followup?: String
			marginTitle: number
			marginFollowup: number
		}>(),
		{
			marginTitle: 30,
			marginFollowup: 40
		}
	)
</script>

<template>
	<section>
		<h2 class='name' :style="{ 'margin-bottom': marginTitle + 'px' }">
			{{ title }}
		</h2>
		<h5
			v-if="followup"
			class="followup"
			:style="{ 'margin-bottom': marginFollowup + 'px' }">
			{{ followup }}
		</h5>
		<slot></slot>
	</section>
</template>

<style scoped lang="scss">
	section {
		margin-bottom: 80px;
	}

	.followup {
		font-weight: 600;
	}
</style>
