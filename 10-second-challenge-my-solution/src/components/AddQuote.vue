<template>

    <div class="container text-center">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <h2>Quote</h2>
            </div>
        </div>
        <form class="d-flex justify-content-center">
            <div class="form-group col-8">
                <textarea class="form-control" 
                        v-model="newQuote" 
                        placeholder="Add new quote here..."
                ></textarea>
                
            </div>
            
        </form>
        <button class="btn btn-primary "
                @click="addQuote"
        >Add Quote</button>
        
    </div>
    
    
</template>

<script>


export default {
    props: [
        'maxQuotesToAdd',
        'counter',
        
    ],
    data() {
        return {
            newQuoteCounter: 0,
            newQuote: ``
        }
    },
    methods: {
        addQuote() {
            this.newQuoteCounter = this.counter;
            if (this.newQuoteCounter < this.maxQuotesToAdd && this.newQuote) {
                this.$emit('quoteWasAdded', this.newQuote);
                this.newQuote = '';
            }
            
        }
    }
}
</script>

<style scoped>
    
</style>
