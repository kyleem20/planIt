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
      <button
        class="btn"
        data-bs-toggle="offcanvas"
        href="#notesOffCanvas"
        rolw="button"
        aria-controls="notesOffCanvas"
      >
        0 <img class="commentImg" src="https://i.imgur.com/rlHQekg.png" />
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="notesOffCanvas"
        aria-labelledby="notesOffCanvasLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="notesOffCanvasLabel">
            SPRINT NAME > TASK NAME
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr class="m-0" />
        <div class="row offcanvas-body d-flex">
          <div class="col-12">
            <p class="projectsText"><b>Status</b></p>
            <div class="row">
              <div class="col-12 d-flex justify-content-around">
                <p
                  class="rounded-pill pendingPill text-light text-center"
                  align="middle"
                >
                  Pending
                </p>
                <p
                  class="rounded-pill progressPill text-light text-center"
                  align="middle"
                >
                  In Progress
                </p>
                <p class="rounded-pill completedPill">Done</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-center notesText">Notes</div>
            </div>
            <hr />
            <AddNote />
          </div>
        </div>
      </div>

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
.pendingPill {
  height: 2rem;
  width: 6rem;
  font-family: "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#aec6ee, #013571);
}
.progressPill {
  height: 2rem;
  width: 6rem;
  font-family: "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
}
.incompletedPill {
  height: 1.5rem;
  width: 5rem;
  font-family: "Arial Narrow Bold", sans-serif;
  border: 2px #949494;
}
.notesText {
  line-height: 1;
  font-size: 1.25rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#013571, #aec6ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>