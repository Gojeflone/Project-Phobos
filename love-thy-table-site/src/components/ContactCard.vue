<template>
    <div class="contact-card col-12 col-lg-8 ml-auto mt-3 mb-3 mr-auto overflow-hidden"> 
        <div class="row align-items-center">
            <div class="col-12 col-lg-4">
                <img :src="require('@/assets/' + imageSource + '')" class="img-fluid" />
            </div>
            <div class="col-col-12 col-lg-8">
                <div class="row flex-column">
                    <h1>{{ name }}</h1>
                    <p>{{ role }}</p>
                    <p>Email: <a :href="'mailto:' +  email " target="_blank" >{{ email }}</a></p>
                    <p>Socials: {{ social }}</p> 
                </div>
            </div>
        </div>
        
        

    </div>
    
</template>

<script>
export default {
    name: "ContactCard",
    props: ['imageSource','name','role','email','social'],
    
}
</script>

<style lang="scss" scoped>
a {
    color: inherit;
    text-decoration: underline;

    &:hover {
        opacity: 0.8;
    }
}

hr {
    border-top-color: black;
}

h1 {
    color: #546E7A;
}




// Magic parallax mixins

$parallax-perspective : 1 !default;
$parallax-element     : "body" !default;
$parallax-ios         : true !default;

@mixin parallax-init(
  $perspective  : $parallax-perspective,
  $element      : $parallax-element,
  $parallax-ios : $parallax-ios
  ) {
  @if $element == "body" {
    html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  }
  #{$element} {
    overflow: auto;
    perspective: $perspective * 1px;
    transform-style: preserve-3d;
    // Allows for smooth scrolling but disables parallax effects.
    @if $parallax-ios == false {
      -webkit-overflow-scrolling: touch;
    }
    // Preserve 3D
    &, * {
      transform-style: preserve-3d;
    }
  }
}

@mixin parallax(
  $distance    : 0,
  $perspective : $parallax-perspective
  ) {
  transform:
    translateZ($distance * $perspective * 1px)
    scale(abs($distance - 1))
  ;
  z-index: $distance * 1000;
}

// End of magic parallax mixins

@include parallax-init;

.contact-card {
    background-color: #fff;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.175);
    @include parallax(.2)

}


</style>