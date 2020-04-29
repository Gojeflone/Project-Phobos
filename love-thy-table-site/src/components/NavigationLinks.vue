<template>
    <div class="navigation-links d-flex align-items-center">
        <div class="home-link pl-3 pr-3">
            <p>
                <router-link to="/">Home</router-link>
            </p>
        </div>
        <div class="biography-link pl-3 pr-3">
            <p>
                <router-link to="/Bio">Biography</router-link>
            </p>
        </div>
        <div class="contact-link pr-3 pl-3">
            <p>
                <router-link to="/Contact">Contact</router-link>
            </p>
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
    font-family: Bitter;
    color: white;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;

    &:hover {
        text-decoration: none;
        color: darken(white, 50%);
        border-color: darken(white, 50%);
    }

    &:active {
        text-decoration: none;
    }


}

p {
    margin-bottom: 0;
}

.router-link-exact-active {
    border-bottom: 1px solid white;
    border-width: 15px;
    margin-bottom: -15px;
    }

</style>