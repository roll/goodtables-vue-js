<script>
export default {
  props: ['table'],
}
</script>

<template>
<div>
  <table>
    <thead>
      <tr>
        <th>Row</th>
        <th>Col</th>
        <th>Code</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="error of table.errors">
        <td>{{ error['row-number'] || 'H' }}</td>
        <td>{{ error['column-number'] || '-' }}</td>
        <td>{{ error.code }}</td>
        <td>{{ error.message }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
