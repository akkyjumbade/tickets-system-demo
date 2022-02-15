<template>
  <div>
    <div class="container">
       <h1>Helpdesk v1.0</h1>
    </div>
   <ticket-system />
  </div>
</template>

<script>
import TicketSystem from "../components/TicketSystem.vue";
export default {
  components: { TicketSystem },
  name: "IndexPage",
};
</script>
<style >
#__layout {
   margin-top: 1.5rem;
}
.container {
  /* max-width: 100%; */
}

section {
  border: 1px solid #ccc;
  background-color: #efefef;
  border-radius: 4px;
}

h1 select.form-control {
  max-width: 150px;
  display: inline-block;
}

.help-block {
  color: red;
}
</style>
