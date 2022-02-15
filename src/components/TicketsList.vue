<template>
   <section>
      <h3>
         Overzicht tickets
         <button
            class="btn btn-sm btn-primary"
            @click.prevent="openAddTicketDialogue"
         >
            Toevoegen
         </button>
      </h3>
      <table class="table" v-if="tickets">
         <thead>
            <tr>
            <th>Volledige naam</th>
            <th>Onderwerp</th>
            <th>Status</th>
            <th>Acties</th>
            </tr>
         </thead>
         <tbody>
            <tr
            v-for="(row, rowIndex) in sortedTickets"
            :key="'row_' + rowIndex"
            :id="'row_' + rowIndex"
            >
            <td>{{ row.consumer_name }}</td>
            <td>
               {{ row.topic }}
            </td>
            <td>{{ row.status }}</td>
            <td>
               <button
                  v-show="!row.status || row.status == 'open'"
                  class="btn text-nowrap btn-sm btn-info"
                  @click.prevent="updateTicketDialogue(row)"
               >
                  Status update
               </button>
               <button
                  v-show="row.status == 'close'"
                  class="btn text-nowrap btn-sm btn-info"
                  @click.prevent="viewTicketInfoDialogue(row)"
               >
                  See
               </button>
            </td>
            </tr>
         </tbody>
      </table>
      <ticket-form v-if="openedTicketDialogue" :action="ticketAction" :initialValues="selectedTicket" :isOpened="openedTicketDialogue" @close="openedTicketDialogue = false" />
      <ticket-info-dialogue v-if="viewTicketInfo" :action="ticketAction"  @close="viewTicketInfo = false" :ticket="selectedTicket" />
   </section>
</template>

<script>
import { mapGetters, } from 'vuex';
import TicketForm from './TicketForm.vue';
import TicketInfoDialogue from './TicketInfoDialogue.vue';
export default {
  components: { TicketForm, TicketInfoDialogue },
   props: [
      'tickets'
   ],
   data: () => ({
      ticketAction: 'create',
      selectedTicket: null,
      newTicket: {
         status: 'open'
      },
      openedTicketDialogue: false,
      viewTicketInfo: false,
      filter: {
         sortBy: ''
      }
   }),
   methods: {
      openAddTicketDialogue() {
         this.openedTicketDialogue = true
         this.newTicket = {}
         this.ticketAction = 'create'
         this.selectedTicket = { status: 'open' }
      },
      updateTicketDialogue(rowToEdit) {
         this.viewTicketInfo = true
         this.ticketAction = 'update'
         this.selectedTicket = rowToEdit
      },
      viewTicketInfoDialogue(row) {
         this.viewTicketInfo = true
         this.ticketAction = 'read'
         this.selectedTicket = row
      },
   },
   computed: {
      ...mapGetters([
         'sortedTickets'
      ]),
      getFilteredTickets() {
         return this.tickets.filter(row => {
            return row.status == this.filter.sortBy
         })
      },
   },
};
</script>

<style>
</style>
