<template>
    <div>
        <h3>New Quote</h3>
        <button @click="increaseCounter">Push the Button</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            increaseCounter() {
                this.counter++;
            }
        },
        destroyed() {
            console.log("They've killed Kenny")
        },
        activated() {
            console.log("They've activated Kenny");
        },
        deactivated() {
            console.log("They've deactivated Kenny");
        }
    } 
</script>

<style scoped>
    
</style>