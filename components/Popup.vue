<script setup lang="ts">
	defineProps<{
		open: boolean
	}>()

	const yaloh = ref(false)
	const vivcelohi = ref(false)

	const onHover = (e: Event) => {
		const target = e.target as HTMLButtonElement

		const genPos = () => Math.round(Math.random() * 300) - 150
		const genPosPx = () => `${genPos()}px ${genPos()}px`

		target.style.translate = genPosPx()
		yaloh.value = true
	}

	const naebka = async () => {
		const redirect = async () => navigateTo('https://t.me/offsdfg', { external: true })
		if (yaloh.value) {
			vivcelohi.value = true
			setTimeout(async () => await redirect(), 3000)
		} else await redirect()
	}
</script>

<template>
	<div class="dialog-wrapper" v-if="open">
		<div class="try-dialog">
			<h3 class="shindows">Ваш Windows заблокований</h3>
			<p>
				Якшо не бажаєте проєбати своє життя і нити шо ви дєд, беріть індивідуальне
				мєнторство у
				<NuxtLink to="https://t.me/offsdfg">@offeex</NuxtLink>
				, за символічну плату (шоби я не сдох з голоду).
			</p>
			<p>
				якщо хочете <span class="red">з'їбати</span> з цієї сторінки, то кнопка схована,
				спершу купіть менторство патом пагаварім
			</p>
			<button class="knopka ziebat" @mouseover="onHover">З'їбати</button>
			<button class="knopka kupit" @click="naebka">Взяти менторство</button>
			<span class="yapoteryaldevstvennost" v-if="vivcelohi">
				Шо, не получилось з'їбать?)))))))
			</span>
			<img class="pizdec-loh" v-if="vivcelohi" src="/images/loh.gif" alt="" />
		</div>
	</div>
</template>

<style scoped lang="scss">
	.dialog-wrapper {
		display: flex;
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100svh;
		background-color: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(20px);
	}

	.try-dialog {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 80vw;
		padding: 20px 25px;
		margin: auto;

		background-color: $background-dark;
		color: $text-dark;
		border: 2px solid $primary-dark;
		border-radius: 20px;
		box-shadow: 0 0 20px $primary-dark;

		p {
			font-size: 20px;
		}
	}

	.shindows {
		color: greenyellow;
	}

	.red {
		color: red;
		font-style: italic;
	}

	.knopka {
		margin-top: 20px;
		padding: 8px 12px;
		border: none;
		border-radius: 4px;
		font-size: 16px;
		font-weight: 500;

		a {
			color: unset;
			text-decoration: none;
		}
	}

	.ziebat {
		background-color: darkred;
		color: $text-dark;
	}

	.kupit {
		background-color: $primary-dark;
		color: $text;

		&:hover {
			cursor: pointer;
			background-color: $accent-dark;
		}
	}

	.yapoteryaldevstvennost {
		margin-top: 20px;

		animation: loshara 0.3s linear infinite;

		@keyframes loshara {
			0% {
				color: red;
				transform: translateY(-4px);
			}
			49% {
				color: red;
				transform: translateY(-4px);
			}
			50% {
				color: $text-dark;
				transform: translateY(4px);
			}
			99% {
				color: $text-dark;
				transform: translateY(4px);
			}
			100% {
				color: red;
				transform: translateY(-4px);
			}
		}
	}

	.pizdec-loh {
		width: 200px;
		height: 200px;
	}

	@media screen and (max-width: 480px) {
		.try-dialog {
			width: 90vw;
		}

		.pizdec-loh {
			width: 85px;
			height: 85px;
		}
	}
</style>
