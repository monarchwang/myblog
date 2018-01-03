<template>
    <div class="comment-container">

    </div>
</template>

<script>
    export default {
        name: "comment",
        data() {
            return {
                comments: [
                    {
                        id: 111,
                        from: "Tom",
                        to: "",
                        agreeNum: 10,
                        disagreeNum: 5,
                        order: 1,
                        content: '这个是对的吗',
                        reply: [{
                            id: 123,
                            from: "Jim",
                            to: "Tom",
                            agreeNum: 10,
                            disagreeNum: 5,
                            order: 1,
                            content: 'yes I had test',
                        },{
                            id: 1234,
                            from: "Ketty",
                            to: "Jim",
                            agreeNum: 10,
                            disagreeNum: 5,
                            order: 2,
                            content: 'but I have a mistake',
                        }],
                    },{
                        id: 222,
                        from: "Jackon",
                        to: "",
                        agreeNum: 10,
                        disagreeNum: 5,
                        order: 2,
                        content: 'Good',
                        reply: [],
                    },
                    {
                        id: 666,
                        from: "Mackle",
                        to: "",
                        agreeNum: 10,
                        disagreeNum: 5,
                        order: 3,
                        content: 'thank you very much',
                        reply: [],
                    }
                    ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .comment-container {

    }
</style>