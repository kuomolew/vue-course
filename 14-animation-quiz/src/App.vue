<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <app-header></app-header>
      <div class="col-8 mt-3">
        <!-- <transition> -->
          <app-card @answered='answerReceived($event)'></app-card>
          <app-correct-answer></app-correct-answer>
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Card from './components/Card';
import CorrectAnswer from './components/CorrectAnswer';

export default {
  components: {
    appHeader: Header,
    appCard: Card,
    appCorrectAnswer: CorrectAnswer,
  },
  data() {
    return {
      isCorrectAnswer: false,
    }
  },
  methods: {
    answerReceived(event) {
      this.isCorrectAnswer = true;
      console.log(this.isCorrectAnswer);
    }
  }
}
</script>
  
<style>

</style>
