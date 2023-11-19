// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [[
        '@nuxtjs/google-fonts',
        {
            families: {
                Manrope: [200, 300, 400, 500, 600, 700, 800],
                Inter: [200, 300, 400, 500, 600, 700, 800]
            }
        }
    ]],
	css: ['@/assets/styles/global.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/_colors.scss" as *;'
				}
			}
		}
	},
	ssr: true,
})