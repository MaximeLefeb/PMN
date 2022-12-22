<template>
  <b-container fluid class="p-0">
    <Navbar/>

    <b-container>
      <b-row>
        <b-col cols="12" class="mt-3" id="support_banner">
          <h1>
            Contact
          </h1>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="12" md="12" lg="6">
          <b-form inline>
            <b-row>
              <b-col sm="12" md="12" lg="6">
                <label class="sr-only" for="firstname">Firstname : </label>
                <b-form-input id="firstname" class="mb-2 mr-sm-2 mb-sm-0 no-rounded orange-border" placeholder="Maxime"></b-form-input>
              </b-col>

              <b-col sm="12" md="12" lg="6">
                <label class="sr-only" for="lastname">Lastname : </label>
                <b-form-input id="lastname" class="mb-2 mr-sm-2 mb-sm-0 no-rounded orange-border" placeholder="Lefebvre"></b-form-input>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm="12" md="12" lg="6">
                <div>
                  <label for="email">Email : </label>
                  <b-form-input id="email" type="email" class="mb-2 mr-sm-2 mb-sm-0 no-rounded orange-border" placeholder="toto@gmail.com"></b-form-input>
                </div>
              </b-col>

              <b-col sm="12" md="12" lg="6">
                <label for="duration">Nearest agency : </label>
                <b-form-select class="form-select no-rounded orange-border" id="duration" :options="options"></b-form-select>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="12">
                <label for="message">Message : </label>
                <b-form-textarea id="message" placeholder="Enter something..." rows="10" max-rows="6" class="no-rounded orange-border"></b-form-textarea>
              </b-col>
            </b-row>

            <div class="text-right pt-3">
              <b-button id="find" class="btn-search px-5 py-2" variant="primary">Send</b-button>
            </div>
          </b-form>
        </b-col>

        <b-col sm="12" md="12" lg="6" id="contact-info">
          <h2>Address</h2>
          <p>15 rue de la paix</p>
          <p>75010, Paris</p>
          <p>+1 0805-540-801</p>
          <a href="#" class="mb-3">Other adresses</a>

          <br><br>

          <h2>Information</h2>
          <p>
            Vivamus vitae tortor ullamcorper, feugiat velit ut, posuere lectus. Vivamus tincidunt nibh dictum, pretium ex eget,
            finibus mauris. Quisque vitae tempus lectus, ac placerat risus. Aliquam a enim eu turpis lobortis rutrum vel et erat.
            Maecenas nec quam auctor, porta risus at, consectetur orci. Quisque imperdiet posuere elit, nec pulvinar augue pharetra
            et. Pellentesque faucibus enim felis, id gravida augue eleifend ac. Vestibulum malesuada lorem eu odio posuere, sagittis
            vehicula quam congue.
          </p>
        </b-col>
      </b-row>
    </b-container>

    <Footer/>
  </b-container>
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
    options: [
      { text: 'Paris' },
      { text: 'Tokyo' },
      { text: 'New York' },
      { text: 'Berlin' },
      { text: 'Rome' }
    ]
  })
}
</script>
