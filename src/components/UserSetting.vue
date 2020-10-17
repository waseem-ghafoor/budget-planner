<template>
  <div class='col-md-8 mb-5'>
    <p class="h5 float-left">
      Update User Setting
    </p>
    <br><hr>
    <div class=" shadow-lg mb-5" style="padding: 5px;">
      <table class="table-sm table-striped">
        <tr>
          <th>Email</th>
          <td><input class="form-control input-sm" type="email" v-model="user_email" required></td>
        </tr>
        <tr>
          <th>New Password</th>
          <td><input class="form-control input-sm" type="password" v-model="user_new_password"></td>
        </tr>
        <tr>
          <th>Confirm New Password</th>
          <td><input class="form-control input-sm" type="password" v-model="user_confirm_password"></td>
        </tr>
        <tr>
          <th>Existing Password</th>
          <td><input class="form-control input-sm" type="password" v-model="user_existing_password" required></td>
        </tr>
        <tr>
          <td></td>
          <td>Note: you need to put existing password to update setting</td>
        </tr>
        <tr>
          <td></td>
          <td><button class="btn btn-primary form-control" @click="saveUserDetail">Save</button></td>
        </tr>
      </table>
    </div>
  </div>

</template>
<script>
export default {
  name: 'UserSetting',
  data: function(){
    return {
      user_email: '',
      user_new_password: '',
      user_confirm_password: '',
      user_existing_password: '',
    }
  },
  mounted: function () {
    this.loadUserDetails();
  },
  methods: {
    loadUserDetails: function() {
      this.$http.get('users/' + localStorage.getItem('user') + '/user_details')
        .then(response => {
          if(response.data != null) {
            this.user_email = response.data.email
          }
        })
        .catch(error => {
          
          this.$parent.toast(error);
        });
    },
    saveUserDetail: function(){
      if (this.user_existing_password == ''){
        alert('To update settings, you need to enter current password.')
      }
      else{
        this.$http.put('users/' + localStorage.getItem('user') + '/user_details', 
        { 
          user_email: this.user_email,
          user_new_password: this.user_new_password,
          user_confirm_password: this.user_confirm_password,
          user_existing_password: this.user_existing_password

        })
        .then(response => {
          this.$parent.toast("Settings have been updated successfully");
          location.reload();
        })
        .catch(error => {
          this.$parent.toast(error);
        });
      }
      
    }
  }
}
</script>
