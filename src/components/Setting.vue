<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <Account />
          <br>
          <Benefit :selectedYear="selectedYear" />
          <br>
          <TwoFactorAuth />
          <br>
          <Referral />
          <br>
          <Category />
        </div>
        <div style="min-width: 250px">
          <Adsense
            :data-ad-client="ad_client"
            :data-ad-slot="ad_slot"
            data-ad-format="vertical"
            :data-full-width-responsive="true"
          >
          </Adsense>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Account from './Account.vue'
import Benefit from './Benefit.vue'
import Category from './Category.vue'
import TwoFactorAuth from './TwoFactorAuth.vue'
import Referral from './Referral.vue'

export default {
  name: 'Setting',
  data: function() {
    return {
      ad_client: process.env.VUE_APP_ADSENSE_PUB,
      ad_slot: process.env.VUE_APP_ADSENSE_VERTICAL_SLOT
    }
  },
  props: {
    selectedYear: Number
  },
  components: {
    Account,
    Benefit,
    Category,
    TwoFactorAuth,
    Referral
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
