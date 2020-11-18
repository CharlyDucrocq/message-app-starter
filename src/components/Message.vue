<template>
    <div id="msg-shadow-box">
    <div class="message" v-on:click="markAsRead(message.id)">
        <SenderIcon :sender="message.sender"/>
        <div class="recap">
            <p id="senderName">{{message.sender.name}}</p>
            <p>{{message.content}}</p>
        </div>
        <div class="state">
            <div id="state-icon" v-if="message.read">
                <i class="fas fa-check-double"></i>
            </div>
            {{getHour}}
        </div>
    </div>
    </div>
</template>

<script>
    import SenderIcon from "./SenderIcon";

    export default {
        name: "Message",
        props: {
            message: Object,
        },
        data(){
          return {
              date: new Date(this.message.date)
          }
        },
        computed: {
            getHour(){
                return this.date.getHours()+":"+this.date.getMinutes();
            }
        },
        components : {
            SenderIcon
        },
        methods : {
            markAsRead() {
                this.$emit("read", true)
            }
        }
    }
</script>

<style scoped>
    #senderName {
        font-weight: bold;
    }
    .message {
        margin-right: 1em;
        margin-left: 1em;
        padding-top: 0.5em;

        border-bottom: solid rgba(0,0,0,0.1);

        display: flex;
        align-content: center;
        align-items: center;
    }
    .state {
        display: flex;
    }
    .recap{
        margin-left: 20px;
        margin-right: 20px;
    }
    #msg-shadow-box {
        margin-left: -100px;
        margin-right: -100px;

        padding-right: 100px;
        padding-left: 100px;


        box-shadow: inset rgba(0,0,0,0.10) 0 0 67px;
    }
</style>
