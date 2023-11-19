<script setup lang="ts">
	const showDropdown = ref(false)
	const dialog = ref(false)

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
		<article class="head-wrapper">
			<div class="head-container">
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
			</div>
		</article>

		<div class="wall">
			<div class="blob i1" />
			<div class="blob i2" />
			<svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#010f13"
					fill-opacity="1"
					d="M0,160L34.3,181.3C68.6,203,137,245,206,224C274.3,203,343,117,411,106.7C480,96,549,160,617,154.7C685.7,149,754,75,823,37.3C891.4,0,960,0,1029,42.7C1097.1,85,1166,171,1234,213.3C1302.9,256,1371,256,1406,256L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
			</svg>
		</div>

		<article class="not-head-slide">
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

			<section>
				<!--							<h3>Чому нас обирають студенти?</h3>-->
			</section>

			<Section title="Оцініть наш сервіс">
				<Rate />
			</Section>

			<Bubbles />
		</article>

		<!--		<div>Ми не на зв'язку, бо нахуй нам ваші проблеми today</div>-->
	</main>

	<Transition>
		<div class="dialog-wrapper" v-if="dialog">
			<div class="try-dialog">
				<h3 class="shindows">Ваш Windows заблокований</h3>
				<p>
					Якшо не бажаєте проєбати своє життя і нити шо ви дєд, беріть індивідуальне
					мєнторство у
					<NuxtLink to="https://t.me/offsdfg">@offeex</NuxtLink>
					, за символічну плату (шоби я не сдох з голоду).
				</p>
				<p>
					якщо хочете <span class="red">з'їбати</span> з цієї сторінки, то кнопка
					схована, спершу купіть менторство патом пагаварім
				</p>
				<button class="knopka ziebat" @mouseover="onHover">З'їбати</button>
				<button class="knopka kupit" @click="naebka">Взяти менторство</button>
				<span class="yapoteryaldevstvennost" v-if="vivcelohi">
					Шо, не получилось з'їбать?)))))))
				</span>
				<img class="pizdec-loh" v-if="vivcelohi" src="/images/loh.gif" alt="" />
			</div>
		</div>
	</Transition>
</template>

<style lang="scss">
	body {
		overflow-x: hidden;

		&:has(.dialog-open) {
			overflow-y: hidden;
		}
	}

	a {
		color: $accent-dark;
	}

	header {
		position: fixed;
		z-index: 12;
		width: 100%;
		padding: 6px 48px;
		box-sizing: border-box;

		background-color: $background;
		box-shadow: 0px 0px 24px $secondary;

		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 50px;

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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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

	.head-wrapper {
		width: 100vw;
		background-color: $background;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.head-container {
		width: 1200px;
		height: 100vh;
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
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

	.not-head-slide {
		color: $text-dark;
		width: 1200px;
	}

	.dropdown {
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

	.dialog-wrapper {
		display: flex;
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(20px);
	}

	.try-dialog {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 60vw;
		height: 60vh;
		padding: 20px 25px;
		margin: auto;

		background-color: $background-dark;
		color: $text-dark;
		border: 2px solid $primary-dark;
		border-radius: 20px;
		box-shadow: 0 0 20px $primary-dark;

		&.v-enter-active {
			transition: all 0.5s ease-out;
		}

		&.v-leave-active {
			transition: all 0.5s ease-in;
		}

		&.v-enter-from,
		&.v-leave-to {
			opacity: 0;
			scale: 0.5;
		}

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

	@media screen and (max-width: 1920px) {
		.wave {
			bottom: -120px;
		}
	}

	@media screen and (max-width: 1280px) {
		.head-container {
			width: 960px;
		}

		.not-head-slide {
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
			width: 768px;
			align-items: center;
		}

		.not-head-slide {
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

		.head-container {
			align-items: center;
			width: 480px;
		}

		.not-head-slide {
			width: 480px;
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

	@media screen and (max-width: 480px) {
		header {
			padding: 6px 16px;
			gap: 12px;
		}

		.head-container {
			align-items: center;
			width: 320px;
		}

		.not-head-slide {
			width: 320px;
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
</style>
