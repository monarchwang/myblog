<template>
    <div class="page">

        <div class="item box" v-show="currentPage > 1" @click="setPage(currentPage - 1)">
            上一页
        </div>

        <div class="item" v-show="currentPage !== 1" @click="setPage(1)">
            1
        </div>

        <div class="dots" v-show="currentPage > 1 + 2">
            ...
        </div>

        <div class="item" v-show="currentPage > 1 + 1" @click="setPage(currentPage - 1)">
            {{currentPage - 1}}
        </div>

        <div class="item box active" @click="setPage(currentPage)">
            {{currentPage}}
        </div>

        <div class="item" v-show="currentPage < totalPage - 1" @click="setPage(currentPage + 1)">
            {{currentPage + 1}}
        </div>

        <div class="dots" v-show="currentPage < totalPage - 2">
            ...
        </div>

        <div class="item" v-show="currentPage !== totalPage" @click="setPage(totalPage)">
            {{totalPage}}
        </div>

        <div class="item box" v-show="currentPage < totalPage" @click="setPage(currentPage + 1)">
            下一页
        </div>
    </div>
</template>

<script>
    export default {
        props: ['current-page', 'total-page', 'page-size', 'set-page']
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/global.scss';

    .page {
        width: 800px;
        margin: 0 auto;
        height: 24px;
        text-align: center;
        user-select: none;
    }

    .item, .dots {
        display: inline-block;
        font-size: 12px;
        letter-spacing: 0;
        line-height: 13px;
        margin: 0 5px;
    }

    .box {
        border: 1px solid #aaa;
        border-radius: 1px;
        padding: 4px 8px;
    }

    .box:hover, .item:hover {
        color: #177CF9;
    }

    .item, .dost, .box {
        cursor: pointer;
    }

    .active {
        color: #fff !important;
        border-radius: 15%;
        transition: border .2s ease-in-out, color .2s ease-in-out;
        background-color:$brightColor;
        border-color: $brightColor;
    }
</style>
