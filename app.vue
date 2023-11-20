<script setup lang="ts">
	const showDropdown = ref(false)
	const dialog = ref(false)

	useHead({
		title: 'Безкоштовні курси IT-програмування для ВСІХ онлайн з ПАЯЛЬНИКОМ',
		meta: [
			{ name: 'description', content: 'Курси програмування для українців допоможуть з працевлаштуванням та пошуком роботи. Ментори, тренінги, якісна освіта' },
		],
	})
</script>

<template>
	<header>
		<img src="/logo.png" alt="" />
		<NuxtLink to="https://github.com/offeex">Автор цього шедевру</NuxtLink>
		<NuxtLink to="https://www.instagram.com/dok1__/">Спів-автор</NuxtLink>
		<NuxtLink to="https://discord.gg/GFbrE6YUB9">Діскорд</NuxtLink>
		<NuxtLink to="https://t.me/offeex">Телеграм</NuxtLink>
	</header>

	<main :class="{ 'dialog-open': dialog }">
		<div class='head-bg' />
		<section class="head-container">
			<p class="robotamrii"
			>❥━━● &nbsp;&nbsp;&nbsp;IT-курси онлайн з гнучким графіком
			</p>
			<div class="title-container">
				<h1>Хочеш влетіти в IT?</h1>
				<!--      ВГАДАЙ ХТО НІХУЯ НЕ ЗНАЄ, АЛЕ ЗАРОБЛЯЄ БІЛЬШЕ ТЕБЕ - МИ!-->
			</div>
			<h5>А влети-ка на завод, довбойоб</h5>
			<h5>пройди безкоштовний оффлайн-марафон на станку</h5>
			<button class="try-button" @click="dialog = true"> Спробувати! </button>
			<div class="muzhik" />
		</section>

		<div class="wall">
			<div class="blob i1" />
			<div class="blob i2" />
			<img class='wave' src='/images/wave.svg' alt='' />
		</div>

		<Section title="Чому варто обрати саме нас?">
				<GridView :gap="20" :columns="2">
					<ImageTextCard image="/images/podzemnaya-pravda.jpg" title="робота за їжу" />
					<ImageTextCard
						image="/images/polet-normalniy.jpg"
						title="вчитися можна прямо з макдональдсу" />
					<ImageTextCard
						image="/images/guesswhosmovin.jpg"
						title="після закінчення курсу ти отримаєш рівно ніхуя" />
					<ImageTextCard image="/images/bus.jpg" title="гроші ніхто не поверне" />
				</GridView>
			</Section>

		<div class="dropdown">
				<div class="bar">
					<h4>Що ми для цього робимо?</h4>
					<button class="show-button" @click="showDropdown = !showDropdown">
						Показати
					</button>
				</div>
				<Transition>
					<p class="nayobka" v-if="showDropdown">найобуємо вас на гроші</p>
				</Transition>
			</div>

		<Section
				title="Компаніям не вистачає спеціалістів"
				followup="А таких як ти там ітак дохуя"
				:margin-title="14">
				<GridView :gap="20" :columns="2">
					<ImageCard image="/images/stata-7.jpg" class="mobilizaciya" height="200px" />
					<ImageCard image="/images/stata-2.jpg" />
					<ImageCard image="/images/stata-5.jpg" />
					<ImageCard image="/images/stata-3.jpg" class="svincity" height="400px" />
				</GridView>
			</Section>

		<Section title="Відгуки студентів">
				<GridView :gap="20" :columns="3">
					<Review
						image="/images/review3.png"
						title="Пєтя 25 років"
						direction="устроївся в макдональдс"
						summary="По закінченню курсу Пєтя знайшов роботу в макдональдсі"
						review="блять, 400 відгуків на React розробника, чому платять всього 200$, в курсах написано 1500 шо за развод ало" />
					<Review
						image="/images/review2.jpg"
						title="Вася 22 роки"
						direction="Влаштувався на стройку"
						summary="Влаштувався на стройку"
						review="одних сіньйорів беруть, як цей досвід взагалі отримати. Та ну в пізду його і ці курси" />
					<Review
						image="/images/review1.jpeg"
						title="Muhammad 26 рочки"
						direction="Робить шавуху"
						summary="Робить шавуху"
						review="ПУТИН ПАЖАЛУСТА ПАМАГАЕТ ВСЕ ТАДЖИК БЕДНЫЙ НИКТО НЕ ПОМОГАЕТ НА ТАДЖИК ДЕНЬГИ НЕТУ ДЛЯ КУПИТЬ ПРАДУКТА🙏🙏🙏😭😭😭" />
				</GridView>
			</Section>

		<Section title="Що про нас пишуть">
				<GridView :gap="20" :columns="3">
					<Comment
						image="/images/comment1.jpeg"
						name="Cвітлана Петрівна"
						description="хотела отдать сына на курсы, но теперь хочу в детдом" />
					<Comment
						image="/images/comment2.jpg"
						name="Василь Ворон"
						description="хотів працювати фронтом і робити дизайн, але ж дизайн сайтів, а не окопів бля, шо за туфта" />
					<Comment
						image="/images/comment3.jpeg"
						name="Ліза Кайдашенко"
						description="Після курсів працюю HR'ом в військоматі, всі айтішники задоволені, дякую!" />
				</GridView>
			</Section>

		<Section title="Оцініть наш сервіс">
				<Rate />
			</Section>

		<Bubbles />

		<!--		<div>Ми не на зв'язку, бо нахуй нам ваші проблеми today</div>-->
	</main>

	<Popup :open='dialog'/>
</template>

<style lang="scss">
	body {
		overflow-x: hidden;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		color: $text-dark;

		&:has(.dialog-open) {
			overflow-y: hidden;
		}
	}

	header {
		position: fixed;
		left: 0;
		z-index: 12;
		width: 100%;
		padding: 6px 30px;
		box-sizing: border-box;

		background-color: $background;
		box-shadow: 0px 0px 24px $secondary;

		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 30px;

		// <NuxtLink> style
		a {
			text-decoration: none;
			color: $text;
		}

		img {
			width: 36px;
			height: 36px;
			border-radius: 10px;
		}
	}

	main {
		width: 1200px;
	}

	.wall {
		overflow: hidden;
		pointer-events: none;
		position: absolute;
		z-index: 1;
		width: 100vw;
		height: 100%;
		left: 0;
		bottom: 0;
	}

	.wave {
		width: 100%;
		bottom: -200px;
		position: absolute;
	}

	.blob {
		filter: blur(120px);

		position: absolute;
		z-index: -2;

		@for $i from 1 to 4 {
			&.i#{$i} {
				$blob-size: 120vh;
				background-image: url('/images/blob-#{$i}.svg');
				width: $blob-size;
				height: $blob-size;
			}
		}

		&.i1 {
			bottom: -700px;
			left: -450px;
		}

		&.i2 {
			bottom: -500px;
			right: -200px;
		}
	}

	.head-bg {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;

		width: 100vw;
		height: 100svh;

		background-color: $background;
	}

	.head-container {
		width: 100%;
		height: 100svh;
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		color: $text;
	}

	.robotamrii {
		color: $text;
		font-size: 14px;
		font-weight: 500;
		bottom: 20px;
	}

	.title-container {
		background-color: $background-dark;

		transform: rotate(359deg);
		padding: 0px 14px;
		margin-bottom: 30px;
	}

	a {
		color: $accent-dark;
	}

	h1 {
		color: $secondary;
		transform: rotate(1deg);
	}

	h5 {
		font-weight: 500;
	}

	.try-button {
		margin-top: 40px;
		padding: 8px 16px;
		z-index: 11;

		border: none;
		border-radius: 4px;
		outline: 2px solid transparent;

		background-color: $background-dark;
		color: $primary;
		font-size: 24px;
		font-weight: 500;

		transition: all 0.2s;

		&:hover {
			cursor: pointer;

			outline: 2px solid $background-dark;
			box-shadow: 0 0 10px $secondary;

			background-color: $secondary;
			color: $text;
		}
	}

	.muzhik {
		position: absolute;
		right: 0;
		z-index: 2;
		transform: rotate(8deg);

		width: 260px;
		height: 290px;

		outline: 2px dashed $background-dark;
		outline-offset: 6px;

		background-image: url('/images/bagatiy-tip.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: -64px 34px;
	}

	.dropdown {
		width: 100%;
		margin-bottom: 60px;
	}

	.bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 32px 40px;

		border-top-left-radius: 8px;
		border-top-right-radius: 8px;

		color: $background-dark;
		background-color: $primary-dark;
	}

	.show-button {
		padding: 10px 20px;

		border: none;
		border-radius: 6px;

		background-color: $background-dark;
		color: $primary;
		font-size: 18px;
		font-weight: 500;

		transition: background-color 0.2s;

		&:hover {
			cursor: pointer;
			background-color: $secondary-dark;
		}
	}

	.nayobka {
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		background-color: $secondary-dark;
		color: $primary;
		font-weight: 500;

		margin: 6px 0 0 0;
		padding: 16px 40px;

		&.v-enter-active,
		&.v-leave-active {
			transition: all 0.5s ease;
		}

		&.v-enter-from,
		&.v-leave-to {
			padding: 0 40px;
			margin: 0;
			font-size: 0;
		}
	}

	.mobilizaciya {
		grid-column: 1 / 3;
	}

	.svincity {
		grid-column: 1 / 3;
	}

	.dialog-open {
		overflow-y: hidden;
	}

	@media screen and (max-width: 1920px) {
		.wave {
			bottom: -120px;
		}
	}

	@media screen and (max-width: 1280px) {
		main {
			width: 960px;
		}

		.wave {
			bottom: 0;
		}

		.muzhik {
			width: 160px;
			height: 200px;
		}
	}

	@media screen and (max-width: 1024px) {
		.head-container {
			align-items: center;
		}

		main {
			width: 768px;
		}

		.muzhik {
			display: none;
		}

		.mobilizaciya {
			grid-column: unset;
		}

		.svincity {
			grid-column: unset;
		}
	}

	@media screen and (max-width: 768px) {
		header {
			padding: 6px 20px;
			gap: 18px;
		}

		main {
			width: 480px;
		}
	}

	@media screen and (max-width: 480px) {
		header {
			padding: 6px 16px;
			gap: 12px;
		}

		main {
			width: 320px;
		}
	}
</style>
