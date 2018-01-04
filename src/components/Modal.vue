<template>
    <transition name="ease">
        <div class="mask" v-show="visible"></div>
    </transition>
</template>

<script>
    export default {
        name: "modal",
        data() {
            return {
                visible: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(55, 55, 55, 0.6);
        height: 100%;
        z-index: 999;
        &-hidden {
            display: none;
        }
    }

    .ease-enter-active, .ease-appear {
        opacity: 0;
        animation-timing-function: linear;
        animation-duration: .2s;
    }

    .ease-leave-active {
        animation-timing-function: linear;
        animation-duration: .2s;
    }
</style>