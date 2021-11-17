<template>
  <div class="row">
    <div class="col-12 mt-2"><b>Add A Note</b></div>
  </div>
  <div class="row mt-2 d-flex">
    <div class="col-9">
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
        <div class="col-2">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="row-10"></div>
  </div>
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