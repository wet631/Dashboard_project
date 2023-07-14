import store from '../store/index'
function setRem () {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    let d;
    if ((width / height) > (16 / 9)) {
        d = height / 9 * 16
    } else {
        d = width;
    }
    const scale = d / 1920 * 100;
    store.commit('setBaseUnit', scale)
    document.documentElement.style.fontSize = `${scale}px`
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}
