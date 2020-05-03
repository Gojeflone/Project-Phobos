<template>
    <div class="col-12 col-lg-8 ml-auto mt-2 mb-2 mr-auto overflow-hidden"> 
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




</style>