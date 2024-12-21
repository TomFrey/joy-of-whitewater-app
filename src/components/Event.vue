<script setup>
    import { defineProps, ref } from 'vue';
    import config from '@/appConfig.js'

   defineProps({
    jowEvent: Object
   });


   const emit = defineEmits(['eventDeleted', 'eventCopied']);   



   const showEvent = (isShow) => {
    if (isShow === 1) {
        return 'sichtbar'
    } 
    return 'ausgeblendet'
   };

   let textMoreButton = ref('mehr Details ...');
   let showEventDetail = ref('hide');
   const toggleEventDetail = () => {
        if(showEventDetail.value === 'hide'){
            showEventDetail.value = 'show';
            textMoreButton = 'weniger Details ...'; 
        }else{
            showEventDetail.value = 'hide';
            textMoreButton = 'mehr Details ...'; 
        }
   }

   const saveEvent = async(id, data) => {
        console.log('saveEvent -> '+ id);
        //Id entfernen, ist der key der auf der DB generiert wird.
        delete data.id;
        console.log('dataWithoutId -> ' + JSON.stringify(data));

       try {
            const response = await fetch('https://digitalriver.me/api/v1/events/'+id, {
                method: 'PATCH',
                headers: {
                    'Authorization': config.production.token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)   //'{"beschreibung": "Das ist unser..."}'  // -> i.O.
               // body: '{"beschreibung": "hardcoded..."}'  // -> i.O.
               // body: '{"wirdAngezeigt": 1}'                // -> i.O.
               //  body: '{"stateId": 2}'                   // -> i.O.
            });

            console.log('response -> ' + response.status);
              
        } catch (error) {
            console.log('Error saving joyOfWhitewater event: ' + error);
        } finally {
            //isLoading.value = false;
           
            console.log('data 2 -> ' + data);
            console.log('data 3 -> ' + JSON.stringify(data));
        }
   }


   const copyEvent = () => {
       console.log('copyEvent -> ');
   }


   const deleteEvent = async(id) => {
       console.log('deleteEvent -> ' + id);

       try {
            const response = await fetch('https://digitalriver.me/api/v1/events/'+id, {
                method: 'DELETE',
                headers: {
                    'Authorization': config.production.token    ,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            console.log('response -> ' + response.status);
            if (response.status === 200) {  
                emit('eventDeleted', id)
            }

              
        } catch (error) {
            console.log('Error deleting joyOfWhitewater event: ' + error);
        } finally {
            //isLoading.value = false;
        }
   }

</script>



<template>

    <div class="event-item-wrapper">

        <div class="event-item-and-action-wrapper">
            <div class="event-item">
                <div class="event-item-name">
                    <v-text-field v-model="jowEvent.name" label="Name" variant="outlined"></v-text-field>
                </div>
                <div class="event-item-boat">{{ jowEvent.sportArt }}</div>
                <div class="event-item-from">{{ jowEvent.vonDatum }}</div>
                <div class="event-item-to">{{ jowEvent.bisDatum }}</div>
                <div class="event-item-level">{{ jowEvent.kursStufe }}</div>
                <div class="event-item-type">{{ jowEvent.typ }}</div>
                <div class="event-item-place">{{ jowEvent.ort }}</div>
                <div class="event-item-show">{{ showEvent(jowEvent.wirdAngezeigt) }}</div>
            </div>
            <div class="event-item-action-wrapper">
                <div class="event-item-action">
                    <div class="event-action event-item-action--save" @click.stop="saveEvent(jowEvent.id, jowEvent)">
                        <span>save</span>
                        <img src="@/assets/images/icons/save.svg" alt="Event speichern">
                    </div>
                    <div class="event-action event-item-action--copy" @click.stop="copyEvent()">
                        <span>copy</span>
                        <img src="@/assets/images/icons/copy.svg" alt="Event kopieren">
                    </div>
                    <div class="event-action event-item-action--del" @click.stop="deleteEvent(jowEvent.id)">
                        <span>delete</span>
                        <img src="@/assets/images/icons/delete.svg" alt="Event löschen">
                    </div>
                </div>              
            </div>
        </div>

      

        <div class="event-item-details-wrapper" :class="showEventDetail">
            <div class="event-item-details">
                <div class="event-item-id">{{ jowEvent.id }}</div>
                <div class="event-item-state">{{ jowEvent.stateId }}</div>
                <div class="event-item-description">
                    <textarea v-model="jowEvent.beschreibung" id="" cols="30" rows="10"></textarea> 
                </div>
                <div class="event-item-meetingpoint">{{ jowEvent.treffpunkt }}</div>
                <div class="event-item-price-course">{{ jowEvent.preisKurs }}</div>
                <div class="event-item-price-material">{{ jowEvent.preisMaterial }}</div>
                <div class="event-item-land">{{ jowEvent.land }}</div>
                <div class="event-item-river">{{ jowEvent.fluss }}</div>
                <div class="event-item-guide">{{ jowEvent.guide }}</div>
                <div class="event-item-paddle-journey">{{ jowEvent.paddelreiseGruppe }}</div>
                <div class="event-item-number-of-break-days">{{ jowEvent.anzahlPausentage }}</div>
                <div class="event-item-final-date-to-register">{{ jowEvent.anmeldeSchluss }}</div>
            </div>
        </div>
        <button class="event-item-action-detail" @click="toggleEventDetail()">{{ textMoreButton }}</button>
        
    </div>
   
   
</template>



<style lang="scss" scoped>
   @import '@/scss/base/specifications';

    .event-item-wrapper{
        display: block;
       // text-decoration: none;
        color: $standardTextColor;
        margin-bottom: 3*$basicHeight;       
    }

    .event-item-and-action-wrapper{
        display: flex;
        flex-flow: row nowrap;
    }


    .event-item{
        flex: 0 1 90%;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "name  boat from  to"
            "level type place show";
            
        column-gap: $basicWidth;
        row-gap: $basicHeight;
        background-color: #CCD0D3;

        padding: $basicHeight $basicWidth;
        margin-bottom: 0.5*$basicHeight;
    }

    .event-item-name{
        font-weight: bold;
        grid-area: name;
    }
    .event-item-boat{
        grid-area: boat;
    }
    .event-item-from{
        grid-area: from;
    }
    .event-item-to{
        grid-area: to;
    }
    .event-item-level{
        grid-area: level;
    }
    .event-item-type{
        grid-area: type;
    }
    .event-item-place{
        grid-area: place;
    }
    .event-item-show{
        grid-area: show;
    }

    .event-item-action-wrapper{
        flex: 0 1 10%;
    }

    .event-item-action{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "save"
            "copy"
            "del";
            
        background-color:white; //$standardBackgroundColor;
        margin-bottom: 0.5*$basicHeight;
    }

    .event-action{
        padding: 0.5*$basicHeight $basicWidth;
        //text-decoration: none;
        border: 1px solid black;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        span{
            padding-right: $basicWidth;
        }

        img{
            width: 30%;
        }
    }

    .event-item-action--save{
        grid-area: save;
    }
    .event-item-action--copy{
        grid-area: copy;
    }
    .event-item-action--del{
        grid-area: del;
    }

    .event-item-action-detail{
        cursor: pointer;
        padding: 0.5*$basicHeight $basicWidth;
        margin-bottom: 3*$basicHeight;
        background-color:white; 
    }




    .event-item-details-wrapper{
        display: none;
    }

    .event-item-details-wrapper.show{
        display: block;
    }

    .event-item-details{
        display: grid;

        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "id   state   priceCourse   priceCourse"
            "desc meeting land          river"
            "desc meeting guide         breakDays"
            "desc meeting paddleJourney registerDate";
            
        column-gap: $basicWidth;
        row-gap: $basicHeight;
       
        padding: $basicHeight $basicWidth;

        background-color: #D6D9DC;
    }

    .event-item-id{
        grid-area: id;
    }
    .event-item-state{
        grid-area: state;
    }
    .event-item-description{
        grid-area: desc;
    }
    .event-item-meetingpoint{
        grid-area: meeting;
    }
    .event-item-price-course{
        grid-area: priceCourse;
    }
    .event-item-price-material{
        grid-area: priceMaterial;
    }
    .event-item-land{
        grid-area: land;
    }
    .event-item-river{
        grid-area: river;
    }
    .event-item-guide{
        grid-area: guide;
    }
    .event-item-paddle-journey{
        grid-area: paddleJourney;
    }
    .event-item-number-of-break-days{
        grid-area: breakDays;
    }
    .event-item-final-date-to-register{
        grid-area: registerDate;
    }

</style>