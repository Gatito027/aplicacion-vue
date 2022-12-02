import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            memories:[
                {id: 'm1', image: 'https://www.visitdubai.com/-/media/images/leisure/campaigns/the-world-next-door/twnd-global-2.jpg?&cw=256&ch=256', title: 'El viaje a la playa de Cancun', description: 'sol, arena, mar, vacaciones de verano!' },
                {id: 'm2', image: 'https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pot-of-food_1f372.png', title: 'La comida con mis papas', description: 'reunion familiar con todos'},
                {id: 'm3', image: 'https://iconarchive.com/download/i109499/cjdowner/cryptocurrency-flat/Canada-eCoin-CDN.ico', title: 'El viaje a Canada', description: 'viaje de trabajo y de conocer la ciudad'},
                {id: 'm4', image: 'https://pbs.twimg.com/profile_images/676485995710271488/HqRi50YZ_400x400.jpg', title: 'La visita al Rancho de Mis Abuelos', description: 'visita de mis personas favoritas'},
            ],
        };
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state){
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId)
            };
        }
    }
});

export default store;