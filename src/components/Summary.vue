<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <Profile :completeSetup="true" />
          <br>
          <Loan />
          <br>
          <Goal />
          <br>
          <Asset :selectedYear="selectedYear" />
          <br>
          <Plan />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from './Profile.vue'
import Loan from './Loan.vue'
import Goal from './Goal.vue'
import Asset from './Asset.vue'
import Plan from './Plan.vue'

export default {
  name: 'Summary',
  props: {
    selectedYear: Number
  },
  components: {
    Profile,
    Goal,
    Loan,
    Asset,
    Plan
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
