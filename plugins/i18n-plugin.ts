// plugins/i18n-plugin.js

import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
    const i18n = createI18n({
        legacy: false,
        locale: 'pt',
        globalInjection: true,
        messages: {
            pt: {
                titulo: 'Meus Videos!'
            },
            en: {
                titulo: 'My Videos!'
            },
        }
    })

    nuxtApp.vueApp.use(i18n)
})
