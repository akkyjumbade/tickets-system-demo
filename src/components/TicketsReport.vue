<template>
   <section>
      <!-- {{ tickets }} -->
      <!-- {{filteredTickets}} -->
         <h3>
            Statistieken tickets
            <select class="form-control" v-model="sortBy">
               <option>allemaal</option>
               <option value="open">open</option>
               <option value="close">gesloten</option>
            </select>
         </h3>
         <table class="table" v-if="filteredTickets && filteredTickets">
            <thead>
               <tr>
                  <th>Onderwerp</th>
                  <th>Aantal</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="(row, rowIndex) in filteredTickets" :key="'row_filtered_'+rowIndex">
                  <td>{{ row.topic }}</td>
                  <td>{{ getUniqueCountOfTickets(filteredTickets, row.topic) }}</td>
               </tr>
            </tbody>
         </table>
      </section>
</template>

<script>
import _ from 'lodash'
import { mapState } from 'vuex'

export default {
   data: () => ({
      sortBy: 'open',
   }),
   methods: {
      getUniqueCountOfTickets(filtered, topic) {
         console.log(_.groupBy(filtered, 'topic'))
         return _.groupBy(filtered, 'topic')[topic].length
      }
   },
   computed: {
      ...mapState({
         tickets: (state) => state.tickets.allTickets,
      }),
      filteredTickets: function () {
         if (!this.tickets) {
            return []
         }
         let sortBy = this.sortBy
         return this.tickets.filter(row => {
            return row.status == sortBy
         })
      }
   }
}
</script>

<style>

</style>
