<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="animated shake">Animations</h1>
        <hr>
        <select class="form-control" v-model="selectAnimation">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br><br>
        <button @click="show = !show" class="btn btn-primary mb-4">Show Alert</button>
        <transition :name="selectAnimation">
          <div v-if="show" class="alert alert-info">Some Alert</div>
        </transition>
        <transition name="slide" type="animation">
          <div v-if="show" class="alert alert-info">Some Alert</div>
        </transition>
        <transition 
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake">
                    
          <div v-if="show" class="alert alert-info">Some Alert</div>
        </transition>
        <transition :name="selectAnimation" mode="out-in">
          <div v-if="show" key="alert" class="alert alert-info">Some Alert</div>
          <div v-else key="warning" class="alert alert-warning">Some Warning</div>
        </transition>
        <hr>
        <button class="btn btn-primary mb-3" @click="load = !load">Load / Remove Element</button>
        <transition
                  @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter"
                  @enter-cancelled="enterCancelled"
                  
                  @before-leave="beforeLeave"
                  @leave="leave"
                  @after-leave="afterLeave"
                  @leave-cancelled="leaveCancelled"
                  :css="false"
                  appear>
          <div style="width: 300px; height: 100px; background-color: lightgreen"
                v-if="load"></div>
        </transition>
        <hr>
        <button class="btn btn-primary mb-3"
        @click="selectedComponent == 'appDangerAlert' ? selectedComponent = 'appSuccessAlert' : selectedComponent = 'appDangerAlert'">
        Switch Components</button>
          <transition name="fade" mode="out-in">
            <component :is="selectedComponent"></component>
          </transition>
          <hr>
          <button class="btn btn-primary mb-3" @click="addItem">Add item</button>
          <ul class="list-group">
            <transition-group name="slide" type="animation">
              <li class="list-group-item" 
                  v-for="(number, index) in numbers" :key="number"
                  @click="removeItem(index)"
                  style="cursor: pointer">{{ number }}</li>
            </transition-group>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from './components/DangerAlert';
import SuccessAlert from './components/SuccessAlert';
export default {
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert,
  },
  data() {
    return {
      show: false,
      load: false,
      selectAnimation: 'fade',
      elementWidth: 100,
      selectedComponent: 'appDangerAlert',
      numbers: [1,2,3,4,5],
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('before enter');
      this.elementWidth = 100;
      el.style.width = this.elementWidth +'px';
    },
    enter(el, done) {
      console.log('enter');
      //done()     // нужен обязательно, чтобы vue понял что анимация окончена. Потому что возможен вариант асинхронного кода, например
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round *10) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('after enter');
    },
    enterCancelled(el) {
      console.log('enter cancelled');
    },
    beforeLeave(el) {
      console.log('before leave');
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round *10) + 'px';
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('after leave');
    },
    leaveCancelled(el) {
      console.log('leave cancelled');
    },
    addItem() {
      let pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    }
  }
}
</script>

<style>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {

  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }
  .slide-leave {

  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute!important;
  }
  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
  body {
    margin-bottom: 50px!important;
  }
</style>
