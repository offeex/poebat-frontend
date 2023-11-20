<script setup lang="ts"></script>

<template>
	<div class="bubbles">
		<div v-for="_ in 16" class="bubble" />
	</div>
</template>

<style scoped lang="scss">
	.bubbles {
		position: relative;
	}

	.bubble {
		position: absolute;
		background: $primary-dark;
		border-radius: 50%;
		z-index: -1;
		opacity: 0.5;
		animation: rise 10s infinite ease-in;
	}

	.bubble:nth-child(1) {
		left: 10%;
	}

	.bubble:nth-child(2) {
		left: 20%;
	}

	.bubble:nth-child(3) {
		left: 35%;
	}

	.bubble:nth-child(4) {
		left: 50%;
	}

	.bubble:nth-child(5) {
		left: 55%;
	}

	.bubble:nth-child(6) {
		left: 65%;
	}

	.bubble:nth-child(7) {
		left: 70%;
	}

	.bubble:nth-child(8) {
		left: 80%;
	}

	.bubble:nth-child(9) {
		left: 70%;
	}

	.bubble:nth-child(10) {
		left: 25%;
	}

	.bubble:nth-child(11) {
		left: 15%;
	}

	.bubble:nth-child(12) {
		left: 90%;
	}

	.bubble:nth-child(13) {
		left: 40%;
	}

	.bubble:nth-child(14) {
		left: 60%;
	}

	.bubble:nth-child(15) {
		left: 25%;
	}

	@for $i from 1 through 16 {
		.bubble:nth-child(#{$i}) {
			$size: random(20) + 2;
			width: $size + px;
			height: $size + px;

			animation-duration: random(9) + 5s;
			animation-delay: random(3) + -3s;
		}
	}

	@keyframes rise {
		0% {
			bottom: 25px;
			scale: 0;
		}
		50% {
			scale: 1;
		}
		75% {
			opacity: 50%;
		}
		100% {
			bottom: 2600px;
			opacity: 0;
		}
	}
</style>
