<template>
    <div class="card">
        <div class="card-header">
            <h3 class="text-center">What's {{ a }} {{ sign }} {{ b }}?</h3>
        </div>
        <div class="card-body d-flex justify-content-around">
            <button class="btn btn-primary"
                    v-for="answer in answers"
                    :key="answer"
                    @click="checkAnswer"
            >{{ answer }}</button>
            
        </div>
    </div>
</template>

<script>

export default {
    
    data() {
        return {
            a: 0,
            b: 0,
            sign: '+',
            plus: true,
            answer: 0,
            answers: [],
            wrongAnswersQuontity: 3,
        }
    },
    methods: {
        setInitial() {
            this.a = Math.round(Math.random() * 50);
            this.b = Math.round(Math.random() * 50);
            let operation = Math.random();
            // console.log (operation);
            if (operation < 0.5) {
            this.sign = '-';
            this.plus = false;
            }
        },
        countAnswer() {
            this.plus ? this.answer = this.a + this.b : this.answer = this.a - this.b;
            // console.log(this.a);
            // console.log(this.b);
            // console.log(this.plus);
            // console.log(this.answer);
        },
        countWrongAnswer(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        setAnswers() {
            this.answers.push(this.answer);
            while (this.wrongAnswersQuontity > 0) {
                let wrongAnswer = this.countWrongAnswer(this.answer - 10, this.answer + 10);
                if ( wrongAnswer != this.answer && !this.answers.includes(wrongAnswer) ) {
                    this.answers.push(wrongAnswer);
                    this.wrongAnswersQuontity--;
                }
                
            }
            // console.log(this.answers);
        },
        shuffleAnswers(array) {
            array.sort(() => Math.random() - 0.5);
        },
        checkAnswer() {
            +event.target.innerText == this.answer ? this.$emit('answered', true) : alert('Wrong Answer');
        },
    },
    beforeMount() {
        this.setInitial();
        this.countAnswer();
        this.setAnswers();
        this.shuffleAnswers(this.answers);
    }
}
</script>
  
<style>

</style>
