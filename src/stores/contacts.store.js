import axios from 'axios';
import {contactsUrl} from "./store";

export const contactsModule = {
    namespace: false,

    state(){
        return {
            contacts: []
        }
    },

    mutations: {
        setContacts: ((state, payload) => {
            state.contacts = payload.contacts;
        })
    },

    getters: {
        contactsSortedByName: state => {
            let clone = state.contacts.slice();
            console.log("before", clone)
            clone.sort((a,b)=>a.name.localeCompare(b.name));
            console.log("after", clone)
            return clone;
        }
    },

    actions: {
        async setContacts(context) {
            axios.get(contactsUrl)
                .then(response =>{
                    console.log('contacts-response: ', response);
                    context.commit('setContacts', {contacts:response.data});
                })
                .catch((e) => {
                    context.commit('pushError',{error:e});
                })

        }
    }
}
