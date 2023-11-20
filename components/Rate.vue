<script setup lang="ts">
	const rating = ref(0)
	const warning = ref(false)

	const onClick = (num: number) => {
		if (num === 5) {
			rating.value = num
			warning.value = false
		} else warning.value = true
	}

	const onHover = (num: number, e: Event) => {
		const target = e.target as HTMLImageElement

		const genPos = () => Math.round(Math.random() * 150) - 100
		const genPosPx = () => `${genPos()}px ${genPos()}px`

		if (num < 5) {
			target.style.translate = genPosPx()
		}
	}

	const resolveImg = (num: number) =>
		`/images/star-${num > rating.value ? 'un' : ''}select.svg`
</script>

<template>
	<article>
		<span>
			<img
				v-for="i in 5"
				:src="resolveImg(i)"
				alt=""
				class="star"
				@click="onClick(i, $event)"
				@mouseover="onHover(i, $event)" />
		</span>
		<button>Оцінити!</button>
		<Transition>
			<span class="troll viskochka" v-if="warning && rating !== 5">
				Чуєш бля нижче 5 зірок поставити не мона, зара рекламу буш дивитися 2 години
			</span>
		</Transition>
		<Transition>
			<span class="troll molodec" v-if="rating === 5">
				оооо, отак і тре, наш чувак, молодець
			</span>
		</Transition>
	</article>
</template>

<style scoped lang="scss">
	article {
		display: flex;
		align-items: center;

		user-select: none;
		position: relative;
	}

	$star-size: 54px;
	.star {
		width: $star-size;
		height: $star-size;
		-webkit-user-drag: none;

		&:hover {
			cursor: pointer;
			border: 2px dashed darken(#ffc524, 10%);
			border-radius: 10px;
			box-sizing: border-box;
		}
	}

	button {
		border-radius: 6px;
		background-color: #ffc524;
		outline: 0px dashed darken(#ffc524, 10%);

		margin-bottom: 2px;
		margin-left: 16px;
		padding: 10px 16px;

		border: none;
		font-size: 16px;
		font-weight: 600;

		cursor: pointer;
		transition: 0.1s;

		&:hover {
			background-color: darken(#ffc524, 20%);
			outline-width: 2px;
		}
	}

	.troll {
		font-weight: 600;
		margin-left: 14px;
		max-width: 450px;

		&.v-enter-active {
			transition: all 0.5s ease;
		}

		&.v-enter-from {
			scale: 0;
			opacity: 0;
		}
	}

	.viskochka {
		color: red;
	}

	.molodec {
		color: #64ff64;
	}

	@media screen and (max-width: 768px) {
		article {
			flex-direction: column;
			align-items: center;
			gap: 14px;
		}

		button {
			margin: 0;
		}

		.troll {
			margin: 0;
		}
	}
</style>
