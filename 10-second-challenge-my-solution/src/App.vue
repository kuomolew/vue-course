<template>
  <div id="app">
    <app-show-counter :counter="counter"
                      :maxQuotesToAdd="maxQuotesToAdd"
                      :currentPersent="currentPersent"
    ></app-show-counter>
    
    

    <app-add-quote :counter="counter" 
                  :addNewQuote="addQuote" 
                  :maxQuotesToAdd="maxQuotesToAdd"
                  @quoteWasAdded="addQuote($event)"
    ></app-add-quote>
    
    
    <app-print-quote :quotes="quotes"
                    @quoteWasRemoved="removeQuote($event)"
    ></app-print-quote>
      
  </div>
</template>

<script>
import showCounter from './components/ShowCounter.vue';
import addQuote from './components/AddQuote.vue';
import printQuotes from './components/PrintQuotes.vue';

export default {
  components: {
    appShowCounter: showCounter,
    appAddQuote: addQuote,
    appPrintQuote: printQuotes
  },
  data() {
    return {
      counter: 1,
      maxQuotesToAdd: 10,
      currentPersent: '10%',
      quotes: ['Very first quote'],
    }
  }, 
  methods: {
    addQuote(newQuote) {
      this.quotes.push(newQuote);
      this.counter = this.quotes.length;
      this.updateCurrentPersent();
      console.log(this.quotes);
      console.log(this.counter);
    },
    removeQuote(i) {
      this.quotes.splice(i, 1);
      this.counter = this.quotes.length;
      this.updateCurrentPersent();
      console.log(this.quotes);
      console.log(this.counter);
    }, 
    updateCurrentPersent() {
      this.currentPersent = this.counter / this.maxQuotesToAdd * 100 +'%';
      console.log(this.currentPersent);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  
}
</style>
