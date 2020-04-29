<template>
    <div class="row">
        <hero-image-text-overlay />
        <div class="col-12 col-lg-8 m-auto mt-2">
            <hr>
            <h1>Who We Are</h1>
            <hr>
        </div>
    </div>

</template>

<script>
import HeroImageTextOverlay from './HeroImageTextOverlay.vue';

export default {
    name: "Biography",
    components: {
        HeroImageTextOverlay
    }
}
</script>

<style lang="scss" scoped>
h1 {
    color: #546E7A;
}
</style>