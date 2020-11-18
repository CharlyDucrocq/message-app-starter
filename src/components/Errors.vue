<template>
    <div class="error-list">
        <div v-if="size">ERROR</div>
        <Error class="error" v-for="error in errors" :key="error.id" :error="error"/>
    </div>
</template>

<script>
    import Error from "./Error";

    export default {
        name: "Errors",
        components: {
            Error
        },
        computed: {
            errors(){
                return this.$store.getters.errorsList;
            },
            size(){
                return this.errors.length;
            }
        }
    }
</script>

<style scoped>
    .error-list{
        background-color: red;
        color: white;
        width: 100%;
    }
    .error-list .error {
        display: none;
    }
    .error-list:hover .error{
        display: block;
    }
</style>
