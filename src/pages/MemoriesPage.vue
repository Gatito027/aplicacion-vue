<template>

        <base-layout page-title="Mis Memorias">
        <memories-list :memories="memories"></memories-list>
        </base-layout>
</template>
<script>
//import { IonList, IonItem, IonImg, IonLabel, IonThumbnail } from '@ionic/vue';
import BaseLayout from '@/components/base/BaseLayout.vue';
import MemoriesList from '../components/memories/MemoriesList.vue';
export default {
    components: { 
        MemoriesList,
        /*IonList, 
        IonItem,*/
        BaseLayout,
        /*IonImg,
        IonLabel,
        IonThumbnail,*/
    },
    computed: {
        memories(){
            return this.$store.getters.memories;
        }
    }
}
</script>
<style>

</style>