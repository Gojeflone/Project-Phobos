<template>
  <div id="hero-image" class="col-12">
    <div class="row"> 
      <div class="hero-wrapper col-12 pl-0 pr-0">
        <img class="img-fluid" src="../assets/oak_wood_plank.jpg" />
        <h1 class="hero-text position-absolute mt-0 mb-0">{{ title }}</h1> 
      </div> 
      
    </div>   
  </div>
</template>

<script>
export default {
    name: 'HeroImageTextOverlay',
    props: ['title'],
    data: function() {
      return {
        bio: 'Biography'
      };
    }
    
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap');

.hero-text {
    font-family: 'Oswald', sans-serif;
    font-size: 10rem;
    color: white;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    

    @media (max-width: 992px) {
      font-size: 5rem;
    }
}

.hero-wrapper {
    max-height: 300px;
    overflow: hidden;
}
</style>