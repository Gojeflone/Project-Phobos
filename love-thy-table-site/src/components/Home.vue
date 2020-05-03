<template>
    <div class="row">
        <hero-image />
        <div class="welcome-content col-12 col-lg-8 offset-lg-2 text-center text-lg-left p-5">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <h1>Welcome</h1>
                    <p>We want to thank you for taking the time to check us out! </p>
                    <p>A lot has lead up to the creation of this movement, but the underlying reason is quite clear: 
                        <em>God calls for us to love <b>all</b> of His children with no exceptions. </em>
                    </p>
                    <p>
                    That means the poor, homeless, addicted, people of color, women, immigrants, 
                    refugees, the LGBTQIA+ community, the Youth, people with disabilities, people 
                    of other or no faiths - every and all people.
                    </p>
                    <p>
                    We are to love, support, encourage, uplift and love them all. No exceptions. 
                    Because that is exactly what Jesus does!
                    </p>
                    <p>
                    Join us in this mission to Love!
                    </p>
                </div>
                <div class="col-12 col-lg-6">
                    <h1>The TABLE</h1>
                    <p>The TABLE stands for:</p>
                    <ul>
                        <li>Teaching</li>
                        <li>Affirming</li>
                        <li>Building</li>
                        <li>Leading</li>
                        <li>Empowering</li>
                    </ul>
                </div>
            </div>
        </div>
            
    </div>
</template>

<script>
import HeroImage from './HeroImage.vue'

export default {
    name: 'Home',
    components: {
        HeroImage,
    }
    
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;600&display=swap');

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

.welcome-content {
    position: absolute;
    background-color: white;
    top: 31%;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.175);
    @include parallax(.2);

    h1 {
        color: #546E7A;;
    }

    ul {
        @media (max-width: 992px) {
            list-style: inside;
            padding-left: 0;
        }
    }

    @media (max-width: 1200px) {
        top: 10%;
    }

    @media (max-width: 992px) {
        position: relative;
        top: 0;
        @include parallax(0);
    }
}

</style>