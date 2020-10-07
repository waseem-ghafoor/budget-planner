<template>
<div>
    <section class="hero-section">
      <div class="container">
        <div class="row figure-holder">
          <div class="col-12 col-md-6 pt-3 pt-md-4">
            <h2 class="site-headline font-weight-bold mt-lg-5 pt-lg-5">A full stop to financial worries.</h2>
            <div class="site-tagline mb-3">When you are looking for an expense manager, you actually need a budget planner. Managing without a plan will make life harder. BudgetRoot helps you to solve this problem seamlessly.</div>
            <div class="cta-btns">
              <div class="mb-4">
                <router-link :to="{ name: 'register' }" class="btn btn-primary font-weight-bold theme-btn">Register for FREE</router-link>
              </div>
              <ul class="app-stores list-unstyled list-inline mx-auto mx-md-0 d-inline-block">
              </ul>
            </div>
          </div>
        </div><!--//row-->
      </div>
    </section><!--//hero-section-->
    
    
    <section class="benefits-section py-5">
      
      <div class="container py-lg-5">
        <h3 class="mb-5 text-center font-weight-bold">Know what's safe to spend.</h3>
        <div class="row">
            <div class="item col-12 col-lg-4">
            <div class="item-inner text-center p-3 p-lg-5">
              <img class="mb-3" src="assets/images/icon-target.svg" width="100px" height="100px" alt="" />
              <h5> Keep track of your yearly budget in excel view</h5>
            </div><!--//item-inner-->
          </div><!--//item-->
          <div class="item col-12 col-lg-4">
            <div class="item-inner text-center p-3 p-lg-5">
              <img class="mb-3" src="assets/images/icon-rocket.svg" width="100px" height="100px" alt="" />
              <h5>Focus on what your expenses</h5>
            </div><!--//item-inner-->
          </div><!--//item-->
          <div class="item col-12 col-lg-4">
            <div class="item-inner text-center p-3 p-lg-5">
              <img class="mb-3" src="assets/images/icon-cogs.svg" width="100px" height="100px" alt="" />
              <h5>Understand about your assets and liabilities</h5>
            </div><!--//item-inner-->
          </div><!--//item-->
        </div><!--//row-->
        <div class="pt-3 text-center">
       <router-link :to="{ name: 'register' }" class="btn btn-primary font-weight-bold theme-btn">Register for FREE</router-link>
        </div>
      </div>
      
    </section><!--//benefits-section-->
    
    <section class="features-section py-5">
      <div class="container py-lg-5">
        <h3 class="mb-3 text-center font-weight-bold section-heading">Feature Highlights</h3>
        <div class="row pt-5 mb-5">
          
          <div class="col-12 col-md-6 col-xl-5 offset-xl-1 d-none d-md-block">
            <img class="product-figure product-figure-1 img-fluid" src="assets/images/product-figure-1.png" alt="" />
          </div>
          
            <div class="col-12 col-md-6 col-xl-5 pr-xl-3 pt-md-3">
            <div class="card rounded border-0 shadow-lg  mb-5">
              <div class="card-body p-4">
              <h5 class="card-title"><i class="far fa-chart-bar mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i>Full year, monthly and graph views</h5>
                          <p class="card-text">The ability to view your budget records by year starting with any month. Monthly view and donut graph. </p>
            </div>
            </div><!--//card-->
            
            <div class="card rounded border-0 shadow-lg mb-5">
              <div class="card-body p-4">
              <h5 class="card-title"><i class="fas fa-laptop-code mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i>Track income, Expense, EMI and more</h5>
                         <p class="card-text">All in one place, to track your track Income, Expense, EMI, Equity Investment, Debt Investments, Assets, Loans, and your Goals. </p>

            </div>
            </div><!--//card-->
            <div class="card rounded border-0 shadow-lg">
              <div class="card-body p-4">
              <h5 class="card-title"><i class="far fa-calendar-alt mr-2 mr-lg-3 text-primary fa-lg fa-fw"></i>Print your for your records</h5>
              <p class="card-text">The ability to print your records to keep live records and present them to anyone. </p>
            </div>
            </div><!--//card-->
          </div>
          
          
        </div>
      </div><!--//container-->
    </section><!--//features-section-->
 <div class="page-header text-center py-5">
        <div class="container">
            <h2 class="page-title pt-2 mb-3 font-weight-bold">Easily manage income, expenses, and more.</h2>
            <div class="mb-lg-5 page-intro single-col-max-width mx-auto">Sign up for BudgetRoot today for free, no credit card required.</div>
            
        </div><!--//container-->
    </div><!--//page-header-->

<div class="section pricing-section pb-5">
        <div class="container">
            <div class="row pricing-table">
                <div class="pricing-item col-12 col-lg-4 mb-5">
                    <div class="pricing-item-inner shadow-lg p-4 rounded h-100">
                        <div class="pricing-item-header text-center">
                            <h3 class="mb-0 pricing-plan-name text-primary font-weight-bold">FREE</h3>
                            <div class="mb-3"></div>
                            <h4 class="price display-4 font-weight-light"><span class="price-currency">$</span><span class="price-number">0</span></h4>
                            <div><a class="btn btn-primary theme-btn-primary" href="http://budgetroot.com/#/register">Try BudgetRoot for Free</a></div>
                        </div><!--//pricing-item-header-->
                        <hr>
                        <div class="pricing-item-body">
                            <ul class="list-unstyled">
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Maintain 3 Accounts</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Overall 15 Categories</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>1 year of history</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Plan up to 2 years</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Set up to 3 goals</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Track 3 of your assets/liabilities/debts/benefits</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Community Support</li>
                            </ul>
                        </div><!--//pricing-item-body-->
                    </div><!--//pricing-item-inner-->
                </div><!--//pricing-item-->
                
                <div class="pricing-item pricing-item-highlighted col-12 col-lg-4 mb-5">
                    <div class="pricing-item-inner shadow-lg p-4 rounded-bottom position-relative h-100">
                        <div class="pricing-highlight rounded-top position-absolute text-center p-2">
                            POPULAR
                        </div>
                        <div class="pricing-item-header text-center">
                            <h3 class="mb-0 pricing-plan-name text-primary font-weight-bold">Plus</h3>
                            <div class="mb-3"></div>
                            <h4 class="price display-4 font-weight-light"><span class="price-currency">$</span><span class="price-number">5.99/M</span></h4>
                            <div><a v-on:click="checkAuth" class="btn btn-primary theme-btn-primary" href="https://www.sandbox.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2M797703ST7377149L53AW3Y">Subscribe</a></div>
                        </div><!--//pricing-item-header-->
                        <hr>
                        <div class="pricing-item-body">
                            <ul class="list-unstyled">
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>No Ads</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Maintain 3 Personal Accounts</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Maintain 2 Business Accounts</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Overall 25 Categories</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Plan up to 7 years</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Set up to 7 goals</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Track 7 of your assets/liabilities/debts/benefits</li>
							  <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Community Support</li>


                            </ul>
                        </div><!--//pricing-item-body-->
                        
                    </div><!--//pricing-item-inner-->
                </div><!--//pricing-item-->
                
                <div class="pricing-item col-12 col-lg-4 mb-lg-5">
                    <div class="pricing-item-inner shadow-lg p-4 rounded h-100">
                        <div class="pricing-item-header text-center">
                            <h3 class="mb-0 pricing-plan-name text-primary font-weight-bold">Prime</h3>
                            <div class="mb-3"></div>
                            <h4 class="price display-4 font-weight-light"><span class="price-currency">$</span><span class="price-number">9.99/M</span></h4>
                            <div><a class="btn btn-primary theme-btn-primary" href="#">Subscribe</a></div>
                        </div><!--//pricing-item-header-->
                        <hr>
                        <div class="pricing-item-body">
                            <ul class="list-unstyled">
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>No Ads</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Unlimited Personal/Business Accounts</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Overall 250 Categories</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Unlimited history</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Overall 25 Categories</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Plan up to your 100th birthday</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Set 100 goals</li>
                                <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Track 100 assets/liabilities/debts/benefits</li>
							  <li class="mb-2"><i class="fas fa-check-circle mr-2 "></i>Personalized Support</li>
                                
                            </ul>
                        </div><!--//pricing-item-body-->
                    </div><!--//pricing-item-inner-->
                </div><!--//pricing-item-->
                
            </div><!--//pricing-tabel-->
        </div>
    </div>

    
    
    <section id="quote" class="testimonial-section py-5">
      <div class="container py-lg-5">
        <h3 class="mb-1 mb-md-5 text-center">Loved by thousands of users</h3>
        
        <div id="flipster-carousel" class="flipster-carousel pt-md-3">
          <div class="flip-items pb-5">
            <div class="flip-item text-center text-md-left">
              <div class="item-inner shadow-lg rounded">
                <h5 class="mb-2">Amazing Program</h5>
                <div class="ratings text-primary mb-3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                <div class="mb-3">After using Budgetroot for about 2 months now I have save over $1000. Everything I needed was possible through their free version and app!
                </div>
                <div class="source media flex-column flex-md-row">
                  <img class="source-profile rounded-circle mr-md-3 mx-auto mx-md-0" src="assets/images/users/user-1.jpg" alt="" />
                  <div class="source-info media-body pt-3">
                    <div>Steven</div>
                    <div>Hampton Roads, VA</div>
                  </div>
                </div>
              </div><!--//item-inner-->
            </div><!--//flip-item-->
            
            <div class="flip-item">
              <div class="item-inner shadow-lg rounded">
                <h5 class="mb-2">Marvellous!</h5>
                <div class="ratings text-primary mb-3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i></div>
                <div class="mb-3">It took me a few minutes to set up my account and I was ready to start saving! Couldnt be any happier with this program. 
                </div>
                <div class="source media ">
                  <img class="source-profile rounded-circle mr-3" src="assets/images/users/user-2.jpg" alt="" />
                  <div class="source-info media-body pt-3">
                    <div>Helen Owens</div>
                    <div>New York, US</div>
                  </div>
                </div>
              </div><!--//item-inner-->
            </div><!--//flip-item-->
            
            <div class="flip-item">
              <div class="item-inner shadow-lg rounded">
                <h5 class="mb-2">Just Perfect!</h5>
                <div class="ratings text-primary mb-3"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                <div class="mb-3">I am finally debt free with my school loans thanks to BudgetRoot! I can now enjoy life without stressing over my school loans. 
                </div>
                <div class="source media">
                  <img class="source-profile rounded-circle mr-3" src="assets/images/users/user-5.jpg" alt="" />
                  <div class="source-info media-body pt-3">
                    <div>Deborah Reed</div>
                    <div>Paris, France</div>
                  </div>
                </div>
              </div><!--//item-inner-->
            </div><!--//flip-item-->

          </div><!--//items-wrapper-->    
          
        </div>
      </div><!--//container-->
      
    </section><!--//testimonial-section-->
           
  </div>
</div>

</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
      newPersonalAdvisory: {
        first_name: null,
        last_name: null,
        email: null,
        phone_number: null
      },
      submit_request_message: false
    }
  },
  methods: {
    checkAuth: function (event) {
      if (localStorage.getItem('jwt') == null) {
        this.$router.push('login');
        event.preventDefault();
      }
    },
    saveNewPersonalAdvisory: function() {
      this.$http.post('/personal_advisor_requests', {
          personal_advisor_request: this.newPersonalAdvisory
        })
        .then(response => {
          this.submit_request_message = true;
        })
        .catch(error => {
          this.$parent.toast("Some error occurred. Reach out to us: team.finsey@gmail.com");
        });
    },
    clickBuyNow: function() {
      this.$http.post('/buy_now')
        .then(response => {
          this.$parent.toast("Success! Now you are an prime user");
        })
        .catch(error => {
          this.$parent.toast("Error occurred accessing payment portal. Reach out to us: team.finsey@gmail.com");
        });
    }
  }
}
</script>
