<template>
  <b-col sm="12" md="12" lg="3" >
    <div class="px-3 destination">
      {{dst.price}}
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['dst']
}
</script>
