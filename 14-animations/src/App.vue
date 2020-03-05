<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Animations</h1>
        <hr>
        <button @click="show = !show" class="btn btn-primary mb-4">Show Alert</button>
        <transition name="fade">
          <div v-if="show" class="alert alert-info">Some Alert</div>
        </transition>
        <transition name="slide">
          <div v-if="show" class="alert alert-info">Some Alert</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      show: false,
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
    
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }
  .slide-leave {

  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
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

</style>
