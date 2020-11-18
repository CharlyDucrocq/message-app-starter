
export const errorsModule = {
    namespace: false,
    state(){
        return {
            errors: []
        }
    },
    mutations: {
        pushError: (state, payload) => {
            state.errors.push(payload.error);
        }
    },
    getters: {
        errorsList: (state) => {
            return state.errors;
        }
    },
    actions: {

    }
};
