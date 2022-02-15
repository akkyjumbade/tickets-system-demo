<template>
  <div class="modal d-block" style="" v-if="ticket">
    <div role="document" class="shadow-lg modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ticket</h5>
          <button
            type="button"
            data-dismiss="modal"
            aria-label="Close"
            class="close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label><strong>Volledige naam:</strong></label>
            <p>{{ ticket.consumer_name }}</p>
          </div>
          <div class="form-group">
            <label><strong>Onderwerp:</strong></label>
            <p>{{ ticket.topic }}</p>
          </div>
          <div class="form-group">
            <label><strong>Contact bij status wijziging:</strong></label>
            <p>{{ ticket.channel }}</p>
          </div>

          <div v-if="action == 'update'" class="form-group">
            <label>Status:</label>
            <select class="form-control" v-model="ticket.status" >
              <option value="open">open</option>
              <option value="close">gesloten</option>
            </select>
          </div>
          <div v-else class="form-group">
            <label><strong>Status:</strong></label>
            <p>{{ ticket.status }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button @click="onClose" type="button" class="btn btn-secondary">
            Sluiten
          </button>
          <button v-if="action == 'update'" @click="updateTicketStatus(ticket)" type="button" name="save" class="btn btn-primary">Opslaan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ["ticket", "action"],
  methods: {
    ...mapMutations([
      'updateTicket'
    ]),
    onClose() {
      this.$emit("close");
    },
    updateTicketStatus(values) {
        this.updateTicket(values)
       this.onClose()
    }
  },
};
</script>

<style>
</style>
