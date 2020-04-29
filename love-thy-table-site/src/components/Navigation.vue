<template>
    <div id="navigation" class="container-fluid">
        <div class="row justify-content-between">
            <div>
                <a class="table-header" href="/">
                    <h1>The TABLE</h1>
                </a>
            </div>
            <div class="col navigation-links">
                
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Navigation',
    
}
</script>

<style scoped>

#navigation {
    background-color: #546E7A;
    height: 60px;

}

.table-header {
    color: #ffffff;
}

.table-header:hover {
    text-decoration: none;
    color: #212529;
}


</style>