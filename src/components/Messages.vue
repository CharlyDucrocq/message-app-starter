<template>
    <div class="messages">
        <div class="list-header absolute">
            <div class="header1"><div>Chat</div><div><i class="fas fa-search"></i><i class="fas fa-plus"></i></div></div>
            <div class="header2"><div class="sort_button sort-selected">All</div><div class="sort_button">Favorites</div><div class="sort_button">Channels</div></div>
        </div>
        <div class="list-header hidden">
            <div class="header1"><div>Chat</div><div><i class="fas fa-search"></i><i class="fas fa-plus"></i></div></div>
            <div class="header2"><div class="sort_button sort-selected">All</div><div class="sort_button">Favorites</div><div class="sort_button">Channels</div></div>
        </div>
        <Message v-on:read="updateMsgRead(currentMessage.id, $event)" v-for="currentMessage in msgList" :key="currentMessage.id" :message="currentMessage"/>
    </div>
</template>

<script>
    import Message from "./Message";

    export default {
        name: "Messages",
        data() {
            return {

            }
        },
        computed : {
          msgList() {
              return this.$store.getters.sortMessagesByDate;
          }
        },
        created() {
            this.$store.dispatch('setMessages');
        },
        components : {
            Message
        },
        methods : {
            updateMsgRead(id, read){
                this.msgList.find((m) => m.id === id).read = read;
            }
        }
    }
</script>

<style scoped>
    .absolute{
        top: 0;
        left: 0;
        right: 0;

        position: fixed;
        background-color: white;

        box-shadow: 0 0 10px,inset 0 0 3px;
    }
    .hidden{
        visibility: hidden;
    }
    .list-header{
        padding-top: 35px;
        padding-left: 35px;
        padding-right: 35px;

        margin-left: -10px;
        margin-right: -10px;
        margin-top: -10px;

        display: flex;
        flex-direction: column;
        font-size: 3em;
        font-family: 'Signika', sans-serif;
    }
    .list-header i{
        margin-right: 20px;
        font-size: 0.9em;
    }
    .list-header>div{
        display: flex;
        flex-direction: row;
    }
    .header1{
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .header2{
        font-size: 0.5em;
    }
    .sort_button{
        margin-left: 10px;
    }
    .sort-selected{
        border-bottom: solid 6px dodgerblue;
        color: dodgerblue;
    }
</style>
