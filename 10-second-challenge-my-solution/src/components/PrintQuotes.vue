<template>
    <div class="container">
        <ul class="row d-flex mt-5 justify-content-around">
            <li class="col-3 border rounded pt-5 pb-5 mb-3"
                v-for="(quote, i) in quotes" 
                @click="removeQuote(i)"
                :key="i"
            >
                {{ quote }}
            </li>
        </ul>

    </div>
    
</template>

<script>


export default {
    props: ['quotes'],
    methods: {
        removeQuote(i) {
            this.$emit('quoteWasRemoved', i);
        }
    },
}
</script>

<style scoped>
    li {
        color: black;
        font-weight: 500;
        font-size: 24px;
        list-style: none;
        cursor: pointer;
    }
    li:hover {
        background-color: lightpink;
    }
</style>
