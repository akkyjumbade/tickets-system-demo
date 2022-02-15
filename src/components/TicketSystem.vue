<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <tickets-list :tickets="sortedTickets" @submit="updateList"  />
      </div>
      <div class="col-lg-6">
         <tickets-report :tickets="tickets" />
      </div>
    </div>
  </div>
</template>

<script>
import TicketsList from "./TicketsList.vue";
import TicketsReport from './TicketsReport.vue';
import { mapGetters, mapState } from 'vuex'

export default {
  components: { TicketsList, TicketsReport },
  data: () => ({
    initialValues: {},
  }),
  computed: {
    ...mapState({
      tickets: (state) => state.tickets.allTickets,
    }),
    ...mapGetters([
      'sortedTickets',
      // 'sortedTickets',
    ])
  },
  methods: {
     updateList(values) {
        this.tickets = values
     }
  },
};
</script>

<style>
</style>
