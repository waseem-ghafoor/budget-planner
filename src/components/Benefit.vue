<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <p class="h5 float-left">
          Benefits <b-link id="tooltip-target-benefit" style="text-decoration: none;">&#128161;</b-link>
          <b-tooltip target="tooltip-target-benefit" triggers="hover">
            Benefits like 80C, LTA, etc.
          </b-tooltip>
        </p>
        <br><hr>

        <div class="shadow-lg " style="padding: 5px;">
          <table class="table-sm table-striped table-responsive">

            <thead>
              <th>Title</th>
              <th>Value</th>
              <th>Year's Total</th>
            </thead>

            <tbody>
              <tr v-for="benefit in benefits" :key="benefit._id.$oid">
                <td @click="toggleEditingBenefit(benefit, 'title')">
                  <div v-if="!showInput(benefit, 'title')">
                    {{ benefit.title }}
                  </div>
                  <div v-if="showInput(benefit, 'title')">
                    <input class="form-control input-sm" v-focus type="text" v-model="benefit.title" @blur="updateBenefit(benefit)" @keyup.enter="$event.target.blur()" @keyup.esc="cancelEdit(benefit, 'title')">
                  </div>
                </td>
                <td @click="toggleEditingBenefit(benefit, 'value')">
                  <div v-if="!showInput(benefit, 'value')">
                    $ {{ benefit.value }}
                  </div>
                  <div v-if="showInput(benefit, 'value')">
                    <input class="form-control input-sm" v-focus type="text" v-model="benefit.value" @blur="updateBenefit(benefit)" @keyup.enter="$event.target.blur()" @keyup.esc="cancelEdit(benefit, 'value')">
                  </div>
                </td>
                <td>$ {{ benefit.yearly_total }}</td>
              </tr>
              <tr>
                <td><input class="form-control input-sm" type="text" v-model="newBenefit.title"></td>
                <td><input class="form-control input-sm" type="text" v-model="newBenefit.value"></td>
                <td colspan="1" style="min-width: 70px"><button class="btn btn-primary" @click="saveNewBenefit">Save</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Benefit',
  props: {
    selectedYear: Number
  },
  data: function() {
    return {
      benefits: [],
      previousValue: null,
      newBenefit: {
        title: null,
        value: null,
        yearly_total: null
      }
    }
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    cancelEdit: function(benefit, field) {
      benefit[field] = this.previousValue;
      benefit.editing = null;
    },
    loadBenefits: function() {
      if(this.selectedYear == null) { return; }

      this.$http.get('users/' + localStorage.getItem('user') + '/benefits', {
          params: { "financial_year": this.selectedYear }
        })
        .then(response => {
          this.benefits = response.data;
        })
        .catch(error => {
          this.$parent.$parent.toast(error);
        });
    },
    toggleEditingBenefit: function(benefit, field) {
      this.previousValue = benefit[field];
      this.$set(benefit, 'editing', field)
    },
    showInput: function(benefit, field) {
      return (benefit.editing == field);
    },
    updateBenefit: function(benefit) {
      this.$http.put('users/' + localStorage.getItem('user') + '/benefits/' + benefit._id.$oid, { benefit: benefit })
        .then(response => {
          benefit.editing = null;
        })
        .catch(error => {
          // TODO: Refactor this with a feature.
          this.loadBenefits();
          this.$parent.$parent.toast(error);
        });
    },
    saveNewBenefit: function() {
      this.$http.post('users/' + localStorage.getItem('user') + '/benefits', { benefit: this.newBenefit })
        .then(response => {
          var data = response.data;
          data.yearly_total = 0;

          this.benefits.push(data);
          this.newBenefit.title = null;
          this.newBenefit.value = null;
          this.newBenefit.yearly_total = null;
        })
        .catch(error => {
          this.$parent.$parent.toast(error);
        });
    }
  },
  mounted: function () {
    this.loadBenefits();
  },
  watch: {
    selectedYear: function() {
      this.loadBenefits();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, button {
  max-height: 24px;
  width: 100%;
}
button {
  padding: 0px;
}
</style>
