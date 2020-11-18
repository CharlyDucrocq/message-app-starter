import axios from 'axios';
import {messagesUrl} from "./store";
import {messagesMock} from "../mocks/messages.mock";

export const messagesModule = {
    namespace: false,

    state(){
        return {
            messages: messagesMock
        }
    },

    mutations: {
        setMessages: ((state, payload) => {
            state.messages = payload.messages;
        })
    },

    getters: {
        numberOfUnreadMessages: state => {
            let i=0;
            state.messages.forEach(msg=>{if(!msg.read){i++}});
            return i;
        },
        sortMessagesByDate: state => {
            let clone = state.messages.slice();
            clone.sort((a,b)=>new Date(b.date) - new Date(a.date));
            return clone;
        }
    },

    actions: {
        async setMessages(context) {
            axios.get(messagesUrl)
                .then(response =>{
                    console.log('messages-response: ', response);
                    context.commit('setMessages', {messages:response.data});
                })
                .catch((e) => {
                    console.log(e.toString());
                    context.commit('pushError', {error:e});
                })

        }
    }
}
