<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Titulo</ion-label>
                <ion-input type="text" required v-model="enteredTitle"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Imagen Url</ion-label>
                <ion-input type="url" required v-model="enteredImageUrl"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Descripción</ion-label>
                <ion-textarea rows="5" type="text" required v-model="enteredDescription"></ion-textarea>
            </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block" fill="outline">
            Guardar
        </ion-button>
    </form>
</template>
<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/vue";
export default {
    emits: ['save-memory'],
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton,
    },
    data(){
        return {
            enteredTitle: '',
            enteredImageUrl: '',
            enteredDescription: ''
        };
    },
    methods: {
        submitForm(){
            const memoryData={
                title: this.enteredTitle,
                imageUrl: this.enteredImageUrl,
                description: this.enteredDescription
            };
            this.$emit('save-memory', memoryData);
        }
    }
}
</script>