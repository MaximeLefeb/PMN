<template>
  <b-col sm="12" md="12" lg="3">
    <div class="destination" :id="dst.id">
      <h3 class="py-2 px-3">{{ dst.text }}</h3>

      <b-row class="px-3 card-bottom">
        <b-col cols="6">
          <small>{{ dst.hotel }}</small><br/>
          <small>{{ dst.duration }}</small>
        </b-col>

        <b-col cols="6" class="d-inline p-relative text-right">
          <span class="price">
            {{ dst.price }} €
          </span>
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['dst']
}
</script>
