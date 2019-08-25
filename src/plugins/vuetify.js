import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                bar: '#f1f1f1',
                primary: "#00285A",
                secondary: "#F1F1F1",
                accent: "#B81614",
                error: "#B81614",
                info: "#00A8E7",
                success: "#4CAF50",
                warning: "#FFC107",
            }
        }
    },
    customProperties: true,
    icons: {
        iconfont: 'mdi',
    },
});
