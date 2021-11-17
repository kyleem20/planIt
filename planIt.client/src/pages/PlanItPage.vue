<template>
  <Navbar />
  <div class="row m-0 sprintInfoRow justify-content-between">
    <div class="col-1 sideTabBtns pt-4 ps-0">
      <button
        class="btn ps-0"
        data-bs-toggle="offcanvas"
        href="#projectOffCanvas"
        rolw="button"
        aria-controls="projectOffCanvas"
      >
        <img src="https://i.imgur.com/395nkyu.png" />
      </button>
      <button
        class="btn ps-0"
        data-bs-toggle="modal"
        data-bs-target="#projectEdit-modal"
      >
        <img src="https://i.imgur.com/az1CuDs.png" />
      </button>
      <Modal id="projectEdit-modal">
        <template #modal-title> Edit Project </template>
        <template #modal-body>
          <EditProjectModal />
        </template>
      </Modal>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="projectOffCanvas"
        aria-labelledby="projectOffCanvasLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="projectOffCanvasLabel"></h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="col-10" align="left">
            <p class="projectsText">Projects</p>
            <p>A list of all the projects for [USER NAME]</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-10 pt-4">
      <HPProjects />
    </div>
    <!-- TODO Insert Sprints on HPProjects -->
    <!-- <div class="col-4 mx-3 d-flex align-items-end justify-content-center">
      <button
        class="btn btn-primary createSprintBtn border-primary addSprintBtn mb-4"
        data-bs-toggle="modal"
        data-bs-target="#sprint-modal"
      >
        <img src="https://i.imgur.com/nWwcfAc.png" class="addSprintPlanet" />
        Add Sprint
      </button>
      <Modal id="sprint-modal">
        <template #modal-title> Add Sprint </template>
        <template #modal-body>
          <AddSprintModal />
        </template>
      </Modal>
    </div>
    <SprintCard class="mb-3" /> -->
  </div>
</template>

<script>
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState";

export default {
  name: 'PlanItPage',
  setup() {

    onMounted(async () => {
      try {

      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, "Error on the PlanIt Page")
      }
    });
    return {
      sprint: computed(() => AppState.sprint),
    }
  }
}
</script>

<style lang="scss" scoped>
.sprintsText {
  line-height: 1;
  font-size: 1.5rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.pnText {
  font-weight: 500;
  font-family: "Lucida Sans", "Lucida Sans Regular", Verdana;
}
.addSprintBtn {
  // transform: translateY(150px);
}
.projectsText {
  line-height: 1;
  font-size: 1.5rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.createSprintBtn {
  width: 12rem;
  height: 3rem;
  line-height: 1;
  font-size: 1.25rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sprintInfoRow {
  // transform: translateY(-50px);
}
.addSprintPlanet {
  height: 2rem;
}
</style>
