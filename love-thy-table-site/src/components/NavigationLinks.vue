<template>
    <div class="navigation-links d-flex align-items-center">
        <div class="home-link p-3">
            <p>
                <router-link to="/">Home</router-link>
            </p>
        </div>
        <div class="biography-link p-3">
            <p>
                <router-link to="/Bio">Biography</router-link>
            </p>
        </div>
        <div class="contact-link p-3">
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

</style>