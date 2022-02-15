<template>
  <form action="" @submit.prevent="submitTicket">
    <div v-if="isOpened" class="modal d-block" >
      <div role="document" class="shadow-lg modal-dialog">
        <div class="modal-content">
          <div class="modal-header"><h5 class="modal-title">Ticket</h5></div>
          <div class="modal-body">
             <!-- <input type="text" v-model="values.status"> -->
            <div class="form-group mb-3">
              <label>Volledige naam:</label>
              <input
                type="text"
                name="volledige_naam"
                required="required"
                class="form-control"
                v-model="values.consumer_name"
              />
            </div>
            <div class="form-group mb-3">
              <label>Onderwerp:</label>
              <select name="onderwerp" class="form-control" v-model="values.topic">
                <option value="Hoe kan ik inloggen?">
                  Hoe kan ik inloggen?
                </option>
                <option value="Waarom werkt de site niet in Internet Explorer?">
                  Waarom werkt de site niet in Internet Explorer?
                </option>
                <option value="Ik ben mijn wachtwoord vergeten!">
                  Ik ben mijn wachtwoord vergeten!
                </option>
                <option value="Overig">Overig</option>
              </select>
            </div>
            <div class="form-group mb-3">
              <label>Contact bij status wijziging:</label>
              <select class="form-control" v-model="values.channel">
                <option>E-mail</option>
                <option>SMS</option>
                <option>Telefonisch</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="closeDialoge" type="button" class="btn btn-secondary">Sluiten</button>
            <button type="submit" class="btn btn-primary">Opslaan</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
   props: {
      isOpened: {
         type: Boolean,
         default: false,
      },
      initialValues: {
         // type: [Object],
         default: () => ({ status: 'open' }),
      },
      action: {
         default: 'create'
      }
   },
   data: () => ({
      values: {
         status: 'open',
      },
   }),
   methods: {
      ...mapMutations([
         'addTicket',
         'updateTicket',
      ]),
      submitTicket() {
         // const values = ev
         if (!this.values.status) {
            this.values.status == 'open'
         }
         if (this.action == 'update') {
            this.updateTicket(this.values)
         } else {
            this.addTicket(this.values)
         }

         this.closeDialoge()
      },
      closeDialoge() {
         this.$emit('close')
      }
   },
   created() {
      this.values = {
         status: 'open',
      }
   },
   mounted() {
      console.log(this.initialValues)
      if( this.initialValues ) {
         this.values = this.initialValues
      } else {
         this.values = {
            status: 'open'
         }
      }
   },
};
</script>

<style>
</style>
