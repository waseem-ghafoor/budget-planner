<template>
  <div>
<div class="page-header text-center py-5">
	    <div class="container">
		    <h2 class="page-title pt-2 mb-3 font-weight-bold">Contact Us</h2>
		    <div class="page-intro single-col-max-width mx-auto mb-5">Want to get in touch? You can either email us at <a href="mailto:info@budgetroot.com">info@BudgetRoot.com</a> or use the contact form below. </div>
		    <h5 class="mb-3">Follow Us</h5>
		    <ul class="social-list list-inline mb-3">
			      <li class="list-inline-item"><a href="https://www.twitter.com/BudgetRoot"><i class="fab fa-twitter fa-fw"></i></a></li>
              <li class="list-inline-item"><a href="https://www.instagram.com/BudgetRoot"><i class="fab fa-instagram fa-fw"></i></a></li>
			  	 <li class="list-inline-item"><a href="https://www.linkedin.com/company/budgetroot/"><i class="fab fa-linkedin fa-fw"></i></a></li>
                    <li class="list-inline-item"><a href="https://facebook.com/BudgetRoot"><i class="fab fa-facebook-f fa-fw"></i></a></li>
				<li class="list-inline-item"><a href="https://vimeo.com/budgetroot/"><i class="fab fa-vimeo fa-fw"></i></a></li>
            </ul><!--//social-list-->

	    </div><!--//container-->
    </div><!--//page-header-->
   
    <section class="contact-form-section pb-5">
	    <div class="container pb-5">
		       <div class="form-wrapper shadow-lg single-col-max-width mx-auto p-5">
			        <form id="contact-form" class="contact-form" method="post" action="">
				        <h3 class="text-center mb-4">Contact Form</h3>
				        <div class="form-row">                                                           
			                <div class="form-group col-md-6">
			                    <label class="sr-only" for="cname">Name</label>
			                    <input type="text" class="form-control" id="cname" name="name" placeholder="Name" minlength="2" required="" aria-required="true">
			                </div>                    
			                <div class="form-group col-md-6">
			                    <label class="sr-only" for="cemail">Email</label>
			                    <input type="email" class="form-control" id="cemail" name="email" placeholder="Email" required="" aria-required="true">
			                </div>
			                <div class="form-group col-12">
			                    <label class="sr-only" for="cmessage">Your message</label>
			                    <textarea class="form-control" id="cmessage" name="message" placeholder="Enter your message" rows="10" required="" aria-required="true"></textarea>
			                </div>
			                 <div class="form-group col-12">
			                    <button type="submit" class="btn btn-block btn-primary py-2">Send It</button>
			                </div>                           
			            </div><!--//form-row-->
			        </form>
		       </div>
	    </div><!--//container-->
    </section><!--//contact-form-section-->
    
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right-align{
  text-align: left;
}
</style>
