<template>
    <div class="col-4">
        <div class="row justify-content-center align-items-center">
            <div class="p-2">
                <a href="https://www.facebook.com/lovethytable" target="_blank">
                    <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
                </a>
            </div>
            <div class="p-2">
                <a href="https://www.instagram.com/lovethytable/" target="_blank">
                    <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
                </a>
            </div>
            <div class="p-2">
                <a href="https://twitter.com/lovethytable" target="_blank">
                    <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
                </a>
            </div>
            <div class="p-2">
                <a href="https://teespring.com/stores/lovethytable-2?aid=marketplace" target="_blank">
                    <font-awesome-icon :icon="['fas', 'tshirt']" size="2x" />
                </a>
            </div>
        </div> 
    </div>    
</template>

<script>
export default {
    name: 'SocialLinks'
}
</script>

<style lang="scss" scoped>
a {
    color: inherit;

    &:hover {
        opacity: 0.8;
    }
}
</style>