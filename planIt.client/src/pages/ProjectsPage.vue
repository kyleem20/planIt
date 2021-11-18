<template>
  <div class="row m-0">
    <Navbar />
    <div class="col-12">
      <div class="row sprintInfoRow">
        <div class="col-1 sideTabBtns pt-4 ps-0">
          <!-- NOTE This is the Profile, their projects offcanvas: needs edit profile inside -->
          <!-- Must always display to allow navigation between projects -->
          <button
            class="btn ps-0"
            data-bs-toggle="offcanvas"
            href="#projectOffCanvas"
            rolw="button"
            aria-controls="projectOffCanvas"
          >
            <img src="https://i.imgur.com/395nkyu.png" />
          </button>
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
            <div class="col-10" align="left">
              <div class="offcanvas-body">
                <p class="projectsText">
                  <Projects />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- NOTE This is where all projects will be displayed -->
    <div class="row">
      <!-- <div class="col-12"> -->
      <!-- NOTE Can be changed to add new sprint -->
      <!--<div class="card p-3 bg-white rounded elevation-3 mt-5">
          <div class="card-body">
            <div class="row justify-content-between">
              <div class="col-12 mx-3" align="right">
                 <button
                    class="btn createProjectBtn border-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#addProject-modal"
                  >
                    Create Project
                  </button>
                  <Modal id="addProject-modal">
                    <template #modal-title> Add Project </template>
                    <template #modal-body>
                      <AddProjectModal />
                    </template>
                  </Modal>
                </div> -->
      <div class="col-10" align="left">
        <ActiveProject />
        <!-- </div>
              </div>
            </div>
          </div> -->
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>


<script>
import { computed, onMounted, watchEffect } from '@vue/runtime-core'
import { projectsService } from '../services/ProjectsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'


export default {

  setup() {

    // async () => { await projectsService.getProjectsById(route.params.id) };


    return {
      projects: computed(() => AppState.activeProject),
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
.addSprintPlanet {
  height: 2rem;
}
</style>