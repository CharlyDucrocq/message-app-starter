<template>
    <div class="sender-icon">
        <img :src="sender.profileImage"/>
    </div>
</template>

<script>
    export default {
        name: "SenderIcon",
        props: {
            sender : Object
        }
    }
</script>

<style scoped>
    .sender-icon {
        display: flex;
        justify-content: center;
        border-radius: 100%;
        overflow: hidden;
        height: 12vw;
        width: 24vw;
    }
</style>
