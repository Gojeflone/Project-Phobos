<template>
    <div class="navigation-links d-flex align-items-center">
        <div class="home-link link pl-1 pr-1 pl-lg-3 pr-lg-3">
                <router-link to="/">Home</router-link>
        </div>
        <div class="biography-link pl-1 pr-1 pl-lg-3 pr-lg-3">
                <router-link to="/Bio">Biography</router-link>
        </div>
        <div class="contact-link pl-1 pr-1 pl-lg-3 pr-lg-3">
                <router-link to="/Contact">Contact</router-link>
        </div>
    </div>
    

</template>

<script>
export default {
    name: 'NavigationLinks',
}
</script>

<style lang="scss" scoped>

a {
    //text-decoration: none;
    cursor: pointer;
    color: white;
    font-family: 'Oswald', sans-serif;
    font-weight: 300;

    @media (max-width: 992px) {
        font-size: 16px;
    }

    &:hover {
        text-decoration: none;
        color: darken(white, 50%);
        border-color: darken(white, 50%);
    }

    &:active {
        text-decoration: none;
    }


}

.router-link-active {
    text-decoration: none;
}

  



.router-link-exact-active {
    border-bottom: 5px solid white;
    //margin-bottom: -15px;
    }

</style>