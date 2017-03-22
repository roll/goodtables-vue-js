<script>
export default {
  props: {
    name: String,
    type: String,
    count: Number,
    rows: Array,
  },
  mounted: () => {
    $('[rel="popover"]').popover({
      html: true
    })
  },
}
</script>

<template>
<div class="result panel panel-danger">

  <div class="panel-heading">
    <span class="text-uppercase label label-danger">error</span>
    <span class="count label">{{ count }}</span>
    <h5 class="panel-title">{{ name }}<span v-if="count > 1">s</span></h5>
    <span class="help"
          rel="popover"
          data-toggle="popover"
          data-placement="left"
          :title="`<span class='label label-info'>${type}</span> ${name}`"
          :data-content="`${name}. <a>Read more</a>`">
      <span class="icon-info"><i>What is this?</i></span>
    </span>
  </div>

  <div class="panel-body">
    <table class="table table-bordered table-condensed">
      <tbody>
        <tr class="result-header-row">
          <td class="result-row-index">1</td>
          <td>id</td>
          <td>name</td>
          <td class="danger"></td>
          <td>name</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
</template>
