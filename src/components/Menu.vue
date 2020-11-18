<template>
    <div class="menu absolute">
        <div class="group-button menu-button"><i class="fas fa-user-friends"></i></div>
        <div class="phone-button menu-button"><i class="fas fa-phone"></i></div>
        <div class="msg-button menu-button button-selected"><i class="fas fa-comment-dots"><div id="unread-msg-icon">{{unreadMessages}}</div></i></div>
        <div class="card-button menu-button"><i class="fas fa-id-card"></i></div>
        <div class="more-button menu-button"><i class="fas fa-ellipsis-h"></i></div>
    </div>
    <div class="menu hidden">
        <div id="group-button" class="menu-button"><i class="fas fa-user-friends"></i></div>
        <div id="phone-button" class="menu-button"><i class="fas fa-phone"></i></div>
        <div id="msg-button" class="menu-button button-selected"><i class="fas fa-comment-dots"></i></div>
        <div id="card-button" class="menu-button"><i class="fas fa-id-card"></i></div>
        <div id="more-button" class="menu-button"><i class="fas fa-ellipsis-h"></i></div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            unreadMessages: Number,
        }
    }
</script>

<style scoped>
    .absolute {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;

        box-shadow: 0 0 10px, inset 0 0 3px;
    }
    .hidden{
        visibility: hidden;
    }
    .menu{
        padding-bottom: 1em;
        padding-top: 1em;

        display: flex;
        flex-flow: row;
        justify-content: space-around;

        background-color: white;
    }
    .menu-button i {
        font-size: 4em;
        position: relative;
    }
    #unread-msg-icon{
        position: absolute;
        top: 2px;
        right: -14px;
        font-size: 0.25em;
        border-radius: 33%;
        padding: 0.3em;
        font-family: 'Signika', sans-serif;
        background-color: red;
        color: white;
    }
    #unread-msg-icon:empty{
        display: none;
    }
    .button-selected{
        border-bottom: solid 6px dodgerblue;
        color: dodgerblue;
    }
</style>
