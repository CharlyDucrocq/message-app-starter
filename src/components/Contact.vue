<template>
    <div id="item-list-shadow-box">
    <div class="contact item-list">
        <SenderIcon :sender="contact"/>
        <p id="name">{{contact.name}}</p>
    </div>
    </div>
</template>

<script>
    import SenderIcon from "./SenderIcon";
    export default {
        name: "Contact",
        components: {SenderIcon},
        props: {
            contact: Object
        }
    }
</script>

<style scoped>
    .contact{
        display: flex;
    }
    .item-list {
        margin-right: 1em;
        margin-left: 1em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;

        border-bottom: solid rgba(0,0,0,0.1);

        display: flex;
        align-content: center;
        align-items: center;
    }
    #item-list-shadow-box {
        margin-left: -100px;
        margin-right: -100px;

        padding-right: 100px;
        padding-left: 100px;


        box-shadow: inset rgba(0,0,0,0.10) 0 0 67px;
    }
    #name{
        margin-left: 30px;
        font-weight: bold;
        font-size: 1.4em;
    }
    .contact{
        padding-left: 50px;
    }
</style>
