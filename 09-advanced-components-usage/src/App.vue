<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <p>{{ selectedComponent }}</p>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
                
               <!-- <app-quote>
                   <h2 slot="title">{{ quoteTitle }}</h2>
                   <h3 slot="subtitle">Another subtitle</h3>
                   <p>A wonderful Quote</p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        },
        data() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote'
            }
        }
    }
</script>

<style>
    h2 {
        color: green;
    }
</style>
