<template>
    <div id="navigation" class="row">
        <div class="col-12 d-flex justify-content-between h-100">
            <div class="d-flex align-items-center h-100">
                <a class="table-header" href="/">
                    <h2 class="pl-lg-3 mb-0">The TABLE</h2>
                </a>
            </div>
            <navigation-links />
        </div>

    </div>
</template>

<script>
import NavigationLinks from './NavigationLinks.vue'

export default {
    name: 'Navigation',
    components: {
        NavigationLinks,
    }
    
}
</script>

<style lang="scss" scoped>

#navigation {
    background-color: #546E7A;
    height: 50px;

}

.table-header {

    > h2 {
        color: #ffffff;

        @media (max-width: 992px) {
            font-size: 15px;
            line-height:15px
        }
    }
}

.table-header:hover {
    text-decoration: none;

    > h2 {
        color: darken(white, 50%);
    }
    
}


</style>