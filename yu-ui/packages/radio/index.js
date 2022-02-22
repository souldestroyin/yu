import YuRadio from './Radio.vue'

YuRadio.install = function(app) {
    app.component(YuRadio.name, YuRadio)
}

export default YuRadio