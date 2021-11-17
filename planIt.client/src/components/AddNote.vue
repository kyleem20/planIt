<template>
  <div class="row">
    <div class="col-12 mt-2"><b>Add A Note</b></div>
  </div>
  <form>
    <textarea
      type="text"
      class="form-control"
      name="note"
      id="note"
      placeholder="Note"
      min="10"
      max="250"
      required
    />
    <div class="text-end">
      <button class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>