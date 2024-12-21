<script setup>
   // import VBtn from 'vuetify/lib/components/VBtn'

    // import { inject } from 'vue';
    // const $events = inject('$events');

// interface FormData {
//   firstName: string;
//   lastName: string;
// }

// export default defineComponent({
//   name: 'CustomForm',
//   props: defineProps({
//     formData: {
//       type: Object as () => FormData,
//       required: true
//     }
//   }),
//   setup(props) {
//     // Define reactive state for form data
//     const formData = reactive(props.formData);

//     // Define a function to handle form submissions
//     const handleSubmit = () => {
//       // Perform form submission logic here
//     };

//     // Return the component's properties and methods
//     return {
//       formData,
//       handleSubmit
//     };
//   }
//});
 
const event = {
    id: '',                                   //KEY 
    state: '',                                //blue, green, yellow, red   
    show: '',                                 //boolean
    type: '',                                 //Kanukurs, Paddelreise, Eskimotieren, Packraft Kurs, Rettungskurs
    level: '',                                //Level 1 bis Level 5
    boat: '',                                 //Kajak, Kanadier, Packraft, alle
    name: '',
    from: '',                                 //Datum
    to: '',                                   //Datum
    place: '',
    land: '',
    river: '',
    guide: '',
    priceCourse: '',
    priceMaterial: '',
    minNumberOfParticipants: '',
    maxNumberOfParticipants: '',
    discription: '',
    meetingPoint: '',
    paddleJourney: '',                        // Korsika, Piemont, Georgien, Albanien, Soca, Griechenland, Engadin, Durance, WildnisreiseNorthAmerica, Inn
    linkToPaddleJourneyDetailPage: '',        // /wildwasser-reisen/paddeln-auf-korsika.html ...
    numberOfBreakDays: '',
    descriptionBreakDays: '',                 //
    finalDayToRegister: ''                    // Datum
};

const handleSubmit = () => {
    console.log(event.id + ' ' + event.name + ' ' + event.boat);

};


</script>



<template>

     <v-btn color="primary">Hello, world!</v-btn>

    <h2> Formular um ein neues event zu generieren</h2>
   
        <form @submit.prevent="handleSubmit">
            <label>
            Id:
            <input type="text" v-model="event.id" />
            </label>
            <label>
            Anzeigen:
            <input type="text" v-model="event.show" />
            </label>
            <label>
            Status:
            <input type="text" v-model="event.state" />
            </label>
            <label>
            Typ:
            <input type="text" v-model="event.type" />
            </label>
            <label>
            Level:
            <input type="text" v-model="event.level" />
            </label>
            <label>
            Boot:
            <input type="text" v-model="event.boat" />
            </label>
            <label>
            Name:
            <input type="text" v-model="event.name" />
            </label>
            <label>
            Von:
            <input type="text" v-model="event.from" />
            </label>
            <label>
            Bis:
            <input type="text" v-model="event.to" />
            </label>

            <label>
            Ort:
            <input type="text" v-model="event.place" />
            </label>
            <label>
            Land:
            <input type="text" v-model="event.land" />
            </label>
            <label>
            Fluss:
            <input type="text" v-model="event.river" />
            </label>
            <label>
            Guide:
            <input type="text" v-model="event.guide" />
            </label>

            <label>
            Preis:
            <input type="text" v-model="event.priceCourse" />
            </label>
            <label>
            Preis Material:
            <input type="text" v-model="event.priceMaterial" />
            </label>
            <label>
            mit Teilnehmer:
            <input type="text" v-model="event.minNumberOfParticipants" />
            </label>
            <label>
            max Teilnehmer:
            <input type="text" v-model="event.maxNumberOfParticipants" />
            </label>

            <label>
            Beschreinung:
            <input type="text" v-model="event.discription" />
            </label>
            <label>
            Treffpunkt:
            <input type="text" v-model="event.meetingPoint" />
            </label>

            <label>
            Reise Ort:
            <input type="text" v-model="event.paddleJourney" />
            </label>
            <label>
            Link zur Detailseite der Reise:
            <input type="text" v-model="event.linkToPaddleJourneyDetailPage" />
            </label>
            <label>
            Anzahl Pausentage:
            <input type="text" v-model="event.numberOfBreakDays" />
            </label>
            <label>
            Text zu den Pausentagen:
            <input type="text" v-model="event.descriptionBreakDays" />
            </label>
            <label>
            Anmeldeschluss:
            <input type="text" v-model="event.finalDayToRegister" />
            </label>
           
           
            <button type="submit">Submit</button>
        </form>

        <span>idd: {{ event.id }}</span>
   
</template>



<style lang="scss" scoped>
   @import '@/scss/base/specifications';

  

</style>