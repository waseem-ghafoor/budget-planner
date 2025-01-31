<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <p class="h5 float-left">
          Categories <b-link id="tooltip-target-category" style="text-decoration: none;">&#128161;</b-link>
          <b-tooltip target="tooltip-target-category" triggers="hover">
            Manage your categories. Map your assets, benefits here.
          </b-tooltip>
        </p>
        <br><hr>

        <div class="shadow-lg " style="padding: 5px;">
          <table class="table-sm table-striped table-responsive">
            <thead>
              <th>Super Category</th>
              <th>Category</th>
              <th>Goal</th>
              <th>Benefit</th>
              <th>Asset</th>
            </thead>

            <tbody v-for="(subCategories, category) in categories" :key="category">
              <tr v-if="subCategories.length == 0">
                <td rowspan="3">
                  {{ category }}
                </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
                <td> - </td>
              </tr>
              <tr v-for="(subCategory, idx) in subCategories" :key="subCategory.id">
                <td :rowspan="subCategories.length + 2" v-if="idx == 0">
                  {{ category }}
                </td>
                <td @click="toggleEditingCategory(subCategory, 'title')">
                  <div v-if="!showInput(subCategory, 'title')">
                    {{ subCategory.title }}
                  </div>
                  <div v-if="showInput(subCategory, 'title')">
                    <input class="form-control input-sm" v-focus type="text" v-model="subCategory.title" @blur="updateCategory(subCategory)" @keyup.enter="$event.target.blur()" @keyup.esc="cancelEdit(subCategory, 'title')">
                  </div>
                </td>
                <td> - </td>
                <td @click="toggleEditingCategory(subCategory, 'benefit')">
                  <div v-if="!showInput(subCategory, 'benefit')">
                    {{ subCategory.benefit ? subCategory.benefit.title : '-' }}
                  </div>
                  <div v-if="showInput(subCategory, 'benefit')">
                  <select class="form-control input-sm" v-focus v-model="subCategory.benefit_id" @blur="updateCategory(subCategory)" @keyup.enter="$event.target.blur()" @keyup.esc="cancelEdit(subCategory, 'benefit')">
                    <option value=""> - none - </option>
                    <option v-for="benefit in benefits" :key="benefit._id.$oid" :value="benefit._id.$oid">{{ benefit.title }}</option>
                  </select>
                  </div>
                </td>
                <td @click="toggleEditingCategory(subCategory, 'asset')">
                  <div v-if="!showInput(subCategory, 'asset')">
                    {{ subCategory.asset ? subCategory.asset.title : '-' }}
                  </div>
                  <div v-if="showInput(subCategory, 'asset')">
                  <select class="form-control input-sm" v-focus v-model="subCategory.asset_id" @blur="updateCategory(subCategory)" @keyup.enter="$event.target.blur()" @keyup.esc="cancelEdit(subCategory, 'asset')">
                    <option value=""> - none - </option>
                    <option v-for="asset in assets" :key="asset._id.$oid" :value="asset._id.$oid">{{ asset.title }}</option>
                  </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="truncate left-sticky ">
                  <form class="add-category-form">
                    <input class="form-control input-sm add-category-input" type="text" placeholder="Add category" @focus="showAddCategoryButton(category)" @blur="hideAddCategoryButton(category)" @keyup.enter.prevent="showAddCategoryButton(category)" @keyup.esc="cancelAddingSubCategory(category)" v-model="newCategory[category]" />
                    <button class="add-category-button btn btn-primary" @click="addCategory(category)" v-if="newCategoryShowButton[category]">+</button>
                  </form>
                </td>
                <td></td>
                <td></td>
                <td></td>
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
  name: 'Category',
  data: function() {
    return {
      categories: [],
      benefits: [],
      assets: [],
      previousValue: null,
      newCategory: {
        "Income": '',
        "Expense": '',
        "EMI": '',
        "EquityInvestment": '',
        "DebtInvestment": ''
      },
      newCategoryShowButton: {
        "Income": false,
        "Expense": false,
        "EMI": false,
        "EquityInvestment": false,
        "DebtInvestment": false
      },
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
    showAddCategoryButton: function(category) {
      this.newCategoryShowButton[category] = true;
    },
    hideAddCategoryButton: function(category) {
      setTimeout(() => { this.newCategoryShowButton[category] = false; }, 500);
    },
    addCategory: function(category) {
      if(this.newCategory[category].toString().trim() == '') { return; }

      this.$http.post('users/' + localStorage.getItem('user') + '/categories', {
          "category": {
            "title": this.newCategory[category],
            "type": category
          }
        })
        .then(response => {
          this.categories[category].push(response.data);
          this.newCategory[category] = '';
        })
        .catch(error => {
          this.$parent.$parent.toast(error);
        });
    },
    cancelEdit: function(category, field) {
      category[field] = this.previousValue;
      category.editing = null;
    },
    loadCategories: function() {
      this.$http.get('users/' + localStorage.getItem('user') + '/categories')
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          this.$parent.$parent.toast(error);
        });
    },
    loadBenefits: function() {
      this.$http.get('users/' + localStorage.getItem('user') + '/benefits')
        .then(response => {
          this.benefits = response.data;
        })
        .catch(function (error) {
          console.error(error.response);
        });
    },
    loadAssets: function() {
      this.$http.get('users/' + localStorage.getItem('user') + '/assets')
        .then(response => {
          this.assets = response.data;
        })
        .catch(error => {
          this.$parent.$parent.toast(error);
        });
    },
    toggleEditingCategory: function(category, field) {
      this.previousValue = category[field];
      this.$set(category, 'editing', field)
    },
    showInput: function(category, field) {
      return (category.editing == field);
    },
    updateCategory: function(category) {
      this.$http.put('users/' + localStorage.getItem('user') + '/categories/' + category.id, { category: category })
        .then(response => {
          category.benefit_id = null;
          if(response.data.benefit_id != null) {
            category.benefit_id = response.data.benefit_id.$oid;
          }
          category.benefit = response.data.benefit;

          category.asset_id = null;
          if(response.data.asset_id != null) {
            category.asset_id = response.data.asset_id.$oid;
          }
          category.asset = response.data.asset;

          category.editing = null;
        })
        .catch(error => {
          // TODO: Refactor this with a feature.
          this.loadCategories();
          this.$parent.$parent.toast(error);
        });
    },
    saveNewCategory: function() {
      this.$http.post('users/' + localStorage.getItem('user') + '/categories', {
          category: this.newCategory
        })
        .then(response => {
          this.categories.push(response.data);
          this.newCategory = {
            "Income": '',
            "Expense": '',
            "EMI": '',
            "EquityInvestment": '',
            "DebtInvestment": ''
          }
        })
        .catch(error => {
          this.$parent.$parent.toast(error);
        });
    }
  },
  mounted: function () {
    this.loadCategories();
    this.loadBenefits();
    this.loadAssets();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
th {
  min-width: 120px;
}
input, button, select {
  max-height: 24px;
  width: 100%;
}
button {
  padding: 0px;
}

.add-category-form {
  /* This bit sets up the horizontal layout */
  display:flex;
  flex-direction:row;
}

.add-category-input {
  /* Tell the input to use all the available space */
  flex-grow:2;
  /* And hide the input's outline, so the form looks like the outline */
  border:none;
}

.add-category-input:focus {
  /* removing the input focus blue box. Put this on the form if you like. */
  outline: none;
}

.add-category-button {
  /* Just a little styling to make it pretty */
  color:white;
  padding: 0px 2px;
  max-height: 24px;
  width: 10%;
}
</style>
