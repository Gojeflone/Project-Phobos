<template>
    <div class="footer row">
        <div class="col-12 col-lg-8 offset-lg-2">
            <div class="row h-100 align-items-center">
                <div class="nav-links col-4 pt-2">
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
                <div class="col-4">
                    <div class="row">
                        <div class="col-12 col-lg-6 m-auto">
                            <router-link to="/">
                            <img src="../assets/the_table.png"  class="img-fluid" />
                            </router-link>
                        </div>
                    </div>
                    
                </div>
                <social-links />
                
            </div>
        </div>
    </div>
</template>

<script>
import SocialLinks from './SocialLinks.vue'

export default {
    name: 'Footer',
    components: {
        SocialLinks,
    }
}
</script>

<style lang="scss" scoped>
.footer {
    margin-top: 100px;
    background-color: #546E7A;
    min-height: 200px;
}

.nav-links {
    background-color: rgba(0,0,0,0.15);
    a {
        color: white;
    }
}

a {
    color: inherit;

    &:hover {
        opacity: 0.8;
    }
}

</style>