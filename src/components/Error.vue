<template>
    <div class="error">
        <div>{{error.toString()}}</div>
        <div class="details">{{error}}</div>
    </div>
</template>

<script>
    export default {
        name: "Error",
        props: {
            error : Object
        }
    }
</script>

<style scoped>
    .details{
        display: none;
    }
    .error:hover .details{
        display: block;
    }
</style>
