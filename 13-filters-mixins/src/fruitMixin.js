export const fruitMixin = {
    data() {
      return {
        fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
        filterText: '',
      }
    },
    
    computed: {
      filteredFruits() {
        return this.fruits.filter((item) => {
          return item.match(this.filterText);
        });
      }
    }
  }