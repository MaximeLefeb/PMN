<template>
  <div class="container-fluid">
    <Navbar/>

    <b-container>
      <b-row>
        <b-col sm="12" md="12" lg="6">
          <div id="find-your-holiday" class="p-3">
            <h3>Find your holiday</h3>

            <b-form inline>
              <label class="sr-only" for="inline-form-input-name">Name</label>
              <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Jane Doe"></b-form-input>

              <label class="sr-only" for="inline-form-input-name">Name</label>
              <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Jane Doe"></b-form-input>

                <label class="mr-sm-2" for="inline-form-custom-select-pref">Preference</label>
                <b-form-select id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0" :options="[{ text: 'Choose...', value: null }, 'One', 'Two', 'Three']" :value="null"></b-form-select>

              <b-button variant="primary">Save</b-button>
            </b-form>
          </div>
        </b-col>

        <b-col sm="12" md="12" lg="6">
          <img src="#" alt="Amsterdam">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    drawer: false,
    group: null
  }),
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>
