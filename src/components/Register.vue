<template>
<div class="signup-section auth-section">
        
        <div class="row m-0" style="background-color: #EFF2F5;">
          <div class="auth-col-main bg-white col-12 col-lg-8 order-2 text-center p-5 h-100 align-self-stretch">
             <p><img src="https://www.budgetroot.com/assets/images/logo.svg" width="350" height="50"></p>

            <div class="social-auth text-center mx-auto">                        
              <h2 class="auth-heading mb-2">Create your free account</h2>
              <div class="auth-intro mb-4">Try BudgetRoot for free. No credit card needed.</div>
              
            
              <div class="social-auth text-center mx-auto">                        
                      <ul class="social-buttons list-unstyled">
                          <li class="mb-3">
                            <GoogleSignIn></GoogleSignIn>
                          </li>
                      </ul>
                  </div>
                  
                  <div class="divider my-5">
                      <span class="or-text">OR</span>
                  </div>
                  
                  <div class="auth-form-container text-left mx-auto">
                      <form  @submit="handleSubmit" class="auth-form signup-form">         
                          <div class="form-group email">
                              <label class="sr-only" for="signup-email">Your Email</label>
                              <input v-model="email" id="signup-email" name="signup-email" type="email" class="form-control signup-email" placeholder="Your email" required="required">
                          </div><!--//form-group-->
                          <div class="form-group password">
                              <label class="sr-only" for="signup-password">Password</label>
                              <input v-model="password" id="signup-password" name="signup-password" type="password" class="form-control signup-password" placeholder="Create a password" required="required">
                          </div><!--//form-group-->
                          <div class="form-group password">
                              <label class="sr-only" for="signup-password">Password</label>
                              <input v-model="password_confirmation" id="signup-password-confirmation" name="signup-password" type="password" class="form-control signup-password" placeholder="Create a password" required="required">
                          </div><!--//form-group-->
                          <div class="legal-note mb-3 text-light text-center">By signing up, you agree to our <router-link :to="{ name: 'terms' }">terms of service</router-link> and <router-link :to="{ name: 'privacy-policy' }">privacy policy</router-link>.</div>
                          <div class="text-center">
                              <button type="submit" class="btn btn-primary theme-btn mx-auto">Register</button>
                          </div>
                      </form>
                  </div><!--//auth-form-container-->
                  
                  <div class="option-container my-4 pt-3">
                    <div class="lead-text">Already have an account? <router-link :to="{ name: 'login' }">Sign In</router-link> </div> 
                  </div><!--//option-container-->
            </div><!--//auth-wrapper-->
            
            
          </div><!--//col-auth-->
            
          <div class="auth-col-promo col-lg-4 d-none d-lg-block order-1 theme-bg-primary h-100 align-self-stretch">
            <div class="auth-col-promo-inner h-100 position-relative p-0">
              <div class="auth-quote-box mt-5 mb-3 px-3 py-4 rounded text-center shadow-lg bg-white mx-auto">
                    <h5 class="auth-quote-title">An absolute money saver!</h5>
                  <div>With BudgetRoot I have now paid off all of my student loans!</div>
              </div>
              <div class="auth-user-figure-holder mt-5">
                
              </div>
            </div>
          
          </div><!--//col-promo-->
          
        </div><!--//row-->
   
    </div><!--//signup-section-->
</template>

<script>
import GoogleSignIn from './login/GoogleSignIn.vue'

export default {
  name: 'Register',
  data() {
    return {
      email : "",
      password : "",
      password_confirmation : ""
    }
  },
  methods: {
    handleSubmit: function(e) {
      e.preventDefault();

      if (this.password.length > 0 && this.password === this.password_confirmation) {
        this.$http.post("/signup", {
          user: { email: this.email, password: this.password }
        })
        .then(response => {
          this.$router.push('/registeration-complete')
        })
        .catch(error => {
          this.$parent.toast(error);
        });
      } else {
        this.$parent.toast("Password and confirm password does not match");
        this.password = ""
        this.password_confirmation = ""
      }
    }
  },
  components: {
    GoogleSignIn
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
