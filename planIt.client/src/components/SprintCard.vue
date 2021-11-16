<template>
  <div class="row m-0 justify-content-center">
    <div class="col-9 card border-info elevation-3">
      <div
        class="
          card-header
          bg-transparent
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <h5 class="sprintInfoText">SPRINT # AND NAME</h5>
        <p>
          [WEIGHT]
          <img src="https://i.imgur.com/uxtQLDX.png" class="weight" />
        </p>
        <button class="btn createTaskBtn border-primary addSprintBtn mb-4">
          Add Task
        </button>
      </div>
    </div>
    <div class="card-body"></div>
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
.sprintInfoText {
  font-weight: 500;
  font-family: "Lucida Sans", "Lucida Sans Regular", Verdana;
}
.weight {
  height: 25px;
}
.createTaskBtn {
  line-height: 1;
  font-size: 1.25rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#013571, #aec6ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>