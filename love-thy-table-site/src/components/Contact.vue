<template>
    <div class="row">
        <hero-image-text-overlay title="Contact"></hero-image-text-overlay>
        <div class="content-wrapper col-12 col-lg-8 ml-auto mr-auto mt-5">
            <p class="text-left">If you have any questions or feedback, please feel free to let us know!</p>
        </div> 
        <contact-card imageSource="ryan_cromer.jpg" name="Ryan Cromer" role="Ministry Leader" email="rycromer@udel.edu" social="@rycromer"></contact-card>
        <contact-card imageSource="anaya_harrison.jpg" name="Anaya Harrison" role="Worship Leader" email="ajadehar@udel.edu" social="@_anayajade"></contact-card>
        <contact-card imageSource="dennis_banfield.jpg" name="Dennis Banfield Jr." role="Wellness & Outreach Leader" email="syoung.vs@gmail.com" social="@sinned_yv"></contact-card>
        <contact-card imageSource="the_table.png" name="The TABLE" email="lovethytable@gmail.com" social="@lovethytable"></contact-card>
    </div>
</template>

<script>
import HeroImageTextOverlay from './HeroImageTextOverlay.vue'
import ContactCard from './ContactCard.vue'

export default {
    name: "Contact",
    components: {
        HeroImageTextOverlay,
        ContactCard
    }
}
</script>

<style lang="scss" scoped>
h1 {
    color: #546E7A;
}

p {
    font-size: 20px;
}

a {
    text-decoration: underline;
    color: inherit;

    &:hover {
        opacity: 0.8;
    }
}

.row {
    background-color: #f7f7f7;
    margin-bottom: 200px;
}



</style>