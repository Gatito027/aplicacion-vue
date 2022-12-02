<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title: 'loading...'" page-default-back-link="/memories">
        <h2 v-if="!loadedMemory">No se encontro información a detalle del id</h2>
        <h2 v-else>Se cargo la pagina correctamente</h2>
    </base-layout>
</template>
<script>
export default {
    data(){
        return{
            memoryId:this.$route.params.id,
        }
    },
    computed:{
        loadedMemory(){
            return this.$store.getters.memory(this.memoryId);
        }
    },
    watch: {
        '$route'(currentRoute){
            this.memoryId = currentRoute.params.id;
        }
    }
}
</script>
<style>

</style>