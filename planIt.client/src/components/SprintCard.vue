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
          <img src="https://i.imgur.com/P7nHMkP.png" class="weight" />
        </p>
        <button class="btn createTaskBtn border-primary addSprintBtn mb-4">
          Add Task
        </button>
        <p>0/0 Tasks Complete</p>
      </div>
      <div class="card-body d-flex justify-content-between">
        <div class="form-check">
          <label class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              name=""
              id=""
              value="checkedValue"
              checked
            />
            TASK
          </label>
        </div>
        <p>
          [WEIGHT]
          <img src="https://i.imgur.com/P7nHMkP.png" class="weight" />
        </p>
      </div>
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