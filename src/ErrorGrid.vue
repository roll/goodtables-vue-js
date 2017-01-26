<script>
export default {
  props: ['table'],
}
</script>

<template>
<div class="root">
  <table>
    <thead>
      <tr>
        <td>Code</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="error of table.errors">
        <td>{{ error.code }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
