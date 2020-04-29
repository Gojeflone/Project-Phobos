<template>
  <div id="hero-image" class="col-12">
    <div class="row"> 
      <div class="hero-wrapper ">
        <img class="img-fluid" src="../assets/oak_wood_plank.jpg" />
        <h1 class="hero-text position-absolute mt-0 mb-0">Biography</h1> 
      </div> 
      
    </div>   
  </div>
</template>

<script>
export default {
    name: 'HeroImageTextOverlay',
    
}
</script>

<style lang="scss" scoped>
.hero-text {
    font-size: 10rem;
    color: white;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hero-wrapper {
    max-height: 300px;
    overflow: hidden;
}
</style>