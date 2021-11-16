<template>
  <div class="row" align="left">
    <div class="form-check">
      <label class="form-check-label ms-3">
        <input
          type="checkbox"
          class="form-check-input"
          name=""
          id=""
          value="checkedValue"
          unchecked
        />
        <h6><b>TASK NAME</b></h6>
      </label>
      <p>Created - DATE | Completed - DATE</p>
      <button class="btn">
        0 <img class="commentImg" src="https://i.imgur.com/rlHQekg.png" />
      </button>
      0
      <img src="https://i.imgur.com/P7nHMkP.png" class="weight" />
    </div>
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
.weight {
  height: 25px;
}
.commentImg {
  height: 25px;
}
</style>