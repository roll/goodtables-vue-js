<script>
import Error from './Error.vue'

export default {
  props: {
    table: Object,
    tableCount: Number,
    tableNumber: Number,
  },
  components: {
    Error,
  },
}
</script>

<template>
<div>

  <h4 class="table-heading">
    <span>
      <a class="table-name">{{ table.source }}</a>
      <a class="table-count">File {{ tableNumber }} of {{ tableCount }}</a>
    </span>
  </h4>

  <Error name="name" type="type" :count="1">

</div>
</template>
