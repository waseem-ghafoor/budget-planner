<template>
  <div :class="{ 'col-md-8': completeSetup, 'col-md-12': !completeSetup }">
    <div class="page-header text-center py-5">
      <div class="container">
        <h2 class="page-title pt-2 mb-3 font-weight-bold">
          Easily manage income, expenses, and more.
        </h2>
        <div class="mb-lg-5 page-intro single-col-max-width mx-auto">
          Sign up for BudgetRoot today for free, no credit card required.
        </div>
      </div>
      <!--//container-->
    </div>
    <!--//page-header-->

    <div class="section pricing-section pb-5">
      <div class="container">
        <div class="row pricing-table">
          <div class="pricing-item col-12 col-lg-4 mb-5">
            <div class="pricing-item-inner shadow-lg p-4 rounded h-100">
              <div class="pricing-item-header text-center">
                <h3
                  class="mb-0 pricing-plan-name text-primary font-weight-bold"
                >
                  FREE
                </h3>
                <div class="mb-3"></div>
                <h4 class="price display-4 font-weight-light">
                  <span class="price-currency">$</span
                  ><span class="price-number">0.00</span>
                </h4>
                <div v-if="is_free_plan_subscribed">
                  <button
                    id="free"
                    v-on:click="plan_subscribe"
                    class="btn btn-primary theme-btn-primary"
                  >
                    Try BudgetRoot for Free
                  </button>
                </div>
              </div>
              <!--//pricing-item-header-->
              <hr />
              <div class="pricing-item-body">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Maintain 3 Accounts
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Overall 15
                    Categories
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>1 year of history
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Plan up to 2 years
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Set up to 3 goals
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Track 3 of your
                    assets/liabilities/debts/benefits
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Community Support
                  </li>
                </ul>
              </div>
              <!--//pricing-item-body-->
            </div>
            <!--//pricing-item-inner-->
          </div>
          <!--//pricing-item-->

          <div class="pricing-item pricing-item-highlighted col-12 col-lg-4 mb-5">
            <div class="pricing-item-inner shadow-lg p-4 rounded-bottom position-relative h-100">
              <div class="pricing-highlight rounded-top position-absolute text-center p-2">
                POPULAR
              </div>
              <div class="pricing-item-header text-center">
                <h3 class="mb-0 pricing-plan-name text-primary font-weight-bold">
                  {{this.plan_lists.plus_plan['name']}}
                </h3>
                <div class="mb-3"></div>
                <h4 class="price display-4 font-weight-light">
                  <span class="price-currency">$</span>
                  <span class="price-number">{{this.plan_lists.plus_plan['price']}}/M</span>
                </h4>
                <div v-if="is_plus_plan_subscribed">
                  <button
                    id="plus"
                    v-on:click="plan_subscribe"
                    class="btn btn-primary theme-btn-primary"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <!--//pricing-item-header-->
              <hr />
              <div class="pricing-item-body">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>No Ads
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Maintain 3 Personal
                    Accounts
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Maintain 2 Business
                    Accounts
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Overall 25
                    Categories
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Plan up to 7 years
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Set up to 7 goals
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Track 7 of your
                    assets/liabilities/debts/benefits
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Community Support
                  </li>
                </ul>
              </div>
              <!--//pricing-item-body-->
            </div>
            <!--//pricing-item-inner-->
          </div>
          <!--//pricing-item-->

          <div class="pricing-item col-12 col-lg-4 mb-lg-5">
            <div class="pricing-item-inner shadow-lg p-4 rounded h-100">
              <div class="pricing-item-header text-center">
                <h3
                  class="mb-0 pricing-plan-name text-primary font-weight-bold"
                >
                  {{this.plan_lists.prime_plan['name']}}
                </h3>
                <div class="mb-3"></div>
                <h4 class="price display-4 font-weight-light">
                  <span class="price-currency">$</span
                  ><span class="price-number">
                    {{this.plan_lists.prime_plan['price']}}/M
                    </span>
                </h4>
                <div v-if="is_prime_plan_subscribed">
                  <button
                    id="prime"
                    v-on:click="plan_subscribe"
                    class="btn btn-primary theme-btn-primary"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <!--//pricing-item-header-->
              <hr />
              <div class="pricing-item-body">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>No Ads
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Unlimited
                    Personal/Business Accounts
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Overall 250
                    Categories
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Unlimited history
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Overall 25
                    Categories
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Plan up to your
                    100th birthday
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Set 100 goals
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Track 100
                    assets/liabilities/debts/benefits
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check-circle mr-2"></i>Personalized Support
                  </li>
                </ul>
              </div>
              <!--//pricing-item-body-->
            </div>
            <!--//pricing-item-inner-->
          </div>
          <!--//pricing-item-->
        </div>
        <!--//pricing-tabel-->
      </div>
    </div>

    <div class="hide" ref="paypal"></div>
  </div>
</template>

<script>
export default {
  name: 'Plan',
  props: {
    completeSetup: { type: Boolean, default: false }
  },
  data: function() {
    return {
      selected_plan: null,
      loaded: false,
      paidFor: false,
      plan_lists: {
          plus_plan: [],
          prime_plan: []
        },
      subscription: {}
    }
  },
  computed: {
    is_plus_plan_subscribed: function(){
      return (this.subscription.plan != 'plus')
    },
    is_prime_plan_subscribed: function(){
      return (this.subscription.plan != 'prime')
    },
    is_free_plan_subscribed: function(){
      return (this.subscription.plan != 'free')
    }
  },
  mounted: function() {
    this.get_plan_list();
    this.get_subscription();
    console.log(process.env.VUE_APP_PAYPAL_CLIENT_ID);
  },
  methods: {
    get_plan_list: function(){
      this.$http.get('/plans')
      .then(response => {
        console.log(response.data);
        console.log("plan lists");
          [this.plan_lists.plus_plan, this.plan_lists.prime_plan] = response.data
        })
      .catch(error => {
        // TODO: Refactor this with a feature.
        console.log(error);
      });
    },
    get_subscription: function(){
      this.$http.get('users/' + localStorage.getItem('user') + '/subscription')
      .then(response => {
        this.subscription = response.data
        console.log("subscription load check")
        console.log(this.subscription);
      })
      .catch(error => {
        // TODO: Refactor this with a feature.
        console.log(error);
      });
    },
    plan_subscribe: function(e){
      this.selected_plan = e.target.id;
      console.log("check plan subscription 1");
      console.log(this.selected_plan);
      console.log(this.subscription.paypal_subscription_id);
      if (this.selected_plan !== 'free' && (this.subscription.paypal_subscription_id === undefined || this.subscription.paypal_subscription_id === null)){
        console.log("check plan subscription 3");
        this.display_paypal_button();
      }
      else{
        //this.subscription.subscription_id = '123-subsc';
        console.log("check plan subscription 2");
        console.log(e.target.id)
        console.log(this.selected_plan);
        this.subscription.plan = this.selected_plan;
        this.update_subscription();
        console.log("check plan subscription");
      }
      console.log(this.subscription.paypal_subscription_id);
      e.preventDefault();
    },
    display_paypal_button: function(){
      const script = document.createElement("script");
      script.src =
      process.env.VUE_APP_PAYPAL_BASE_URL+"/sdk/js?client-id="+process.env.VUE_APP_PAYPAL_CLIENT_ID+"&vault=true";
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },
    setLoaded: function() {
        this.loaded = true;
        window.paypal
        .Buttons({
          style: {
              shape: 'pill',
              color: 'gold',
              layout: 'vertical',
              label: 'subscribe'
          },
          createSubscription: (data, actions) => {
            return actions.subscription.create({
              'plan_id':  this.get_selected_plan_id()
            });
          },
          onApprove: (data, actions) => {
              console.log("======check=======");
              this.subscription.plan_name = this.selected_plan;
              this.subscription.paypal_subscription_id = data.subscriptionID
              this.update_subscription();
          },
          onError: err => {
              console.log("======check error=======");
              console.log(err);
          },
        }).render(this.$refs.paypal);
    },
    update_subscription: function(){
      this.$http.put('users/' + localStorage.getItem('user') + '/user_access', 
      { 
        paypal_subscription_id: this.subscription.paypal_subscription_id,
        plan_name: this.selected_plan
      })
        .then(response => {
           var data = response.data;
        })
        .catch(error => {
          this.$parent.$parent.toast(error);
        });
    },
    get_selected_plan_id: function() {
        if (this.selected_plan == 'plus'){
          console.log("plus plan");
          console.log(this.plan_lists.plus_plan['paypal_plan_id'])
          return this.plan_lists.plus_plan['paypal_plan_id'];
        }
        else if(this.selected_plan == 'prime'){
          return this.plan_lists.prime_plan['paypal_plan_id'];
        }
      }
  }
}
</script>