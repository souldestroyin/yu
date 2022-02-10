import YuButton from "./YuButton"

// 组件变插件
YuButton.install = app => app.component('YuButton', YuButton)


// 组件库
const YuUi = {
    YuButton,
    install: app => {
        app.use(YuButton)
    }
}

export default YuUi