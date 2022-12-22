<template>
  <div class="container-fluid">
    <Navbar/>

    <b-container>
      <b-row>
        <b-col sm="12" md="12" lg="6">
          <div id="find-your-holiday" class="p-3">
            <h3>Find your holiday</h3>

            <b-form inline>
              <b-row>
                <b-col sm="12" md="12" lg="6">
                  <label class="sr-only" for="from">From : </label>
                  <b-form-input id="from" class="mb-2 mr-sm-2 mb-sm-0 no-rounded" placeholder="Paris"></b-form-input>
                </b-col>

                <b-col sm="12" md="12" lg="6">
                  <label class="sr-only" for="inline-form-input-name">To : </label>
                  <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0 no-rounded" placeholder="Malte"></b-form-input>
                </b-col>
              </b-row>

              <b-row>
                <b-col sm="12" md="12" lg="6">
                  <div>
                    <label for="date">Choose a date</label>
                    <b-form-datepicker id="date" v-model="value" class="mb-2 no-rounded"></b-form-datepicker>
                  </div>
                </b-col>

                <b-col sm="12" md="12" lg="6">
                  <label for="duration">Duration : </label>
                  <b-form-select class="form-select no-rounded" id="duration" v-model="selected" :options="options"></b-form-select>
                </b-col>
              </b-row>

              <div class="text-right pt-3">
                <b-button id="find" class="btn-search px-5 py-2" variant="primary">Find !</b-button>
              </div>
            </b-form>
          </div>
        </b-col>

        <b-col sm="12" md="12" lg="6" id="amsterdam">
          <h3 class="px-3 py-2 ">Deal of the day</h3>

          <b-row class="px-3">
            <b-col cols="6">
              <h1>Amsterdam</h1>
              <small>Hotel Calypso</small><br/>
              <small>1 Week</small>
            </b-col>

            <b-col cols="6" class="d-inline p-relative text-right">
              <span class="price">
                150€
              </span>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row>
        <h1 id="top" class="text-center my-2"> Top destinations </h1>

        <Destination v-for="dst in destinations" :dst="dst" :key="dst"></Destination>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Destination from '../components/Destination.vue'

export default {
  components: {
    Navbar,
    Footer,
    Destination
  },
  data: () => ({
    drawer: false,
    group: null,
    selected: null,
    options: [
      { text: 'Please select an option' },
      { text: '1 Day' },
      { text: '2 -5 Day' },
      { text: '1 Week' },
      { text: 'More than 1 week' }
    ],
    destinations: [
      {
        price: '150',
        text: 'Sydney',
        image: '',
        hotel: 'Hotel Calypso',
        duration: '1 Week'
      },
      {
        price: '750',
        text: 'Rio',
        image: '',
        hotel: 'Hotel Calypso',
        duration: '1 Week'
      },
      {
        price: '1299',
        text: 'Cusco',
        image: '',
        hotel: 'Hotel Calypso',
        duration: '3 Day'
      },
      {
        price: '150',
        text: 'New Dehli',
        image: '',
        hotel: 'Hotel Calypso',
        duration: '1 Day'
      },
      {
        price: '879',
        text: 'Hong Kong',
        image: '',
        hotel: 'Hotel Calypso',
        duration: '5 Days'
      },
      {
        price: '650',
        text: 'Katmandou',
        image: '',
        hotel: 'Hotel Calypso',
        duration: '1 week'
      },
      {
        price: '1699',
        text: 'Tokyo',
        image: '',
        hotel: 'Hotel Calypso',
        duration: '2 week'
      },
      {
        price: '299',
        text: 'Lisbonne',
        image: '',
        hotel: 'Hotel Calypso',
        duration: '3 week'
      }
    ]
  }),
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>
