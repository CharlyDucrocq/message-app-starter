import { createStore } from 'vuex';
import { contactsModule } from "./contacts.store";
import { messagesModule } from "./messages.store";
import { errorsModule } from "./errors.store";

export const messagesUrl = "https://io-labs.fr/messenger/messages.json";
export const contactsUrl = "https://io-labs.fr/messenger/contacts.json";

export default createStore({
    namespace: false,

    modules: {
        errorsModule,
        contactsModule,
        messagesModule,
    }
})
