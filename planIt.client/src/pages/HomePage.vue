<template>
  <div class="row m-0">
    <Navbar />
    <div class="col-12">
      <div class="row sprintInfoRow justify-content-between">
        <div class="col-1 sideTabBtns pt-4 ps-0"></div>
      </div>
      <!-- NOTE This is where all projects will be displayed -->
      <div class="row">
        <div class="col-12">
          <div class="row justify-content-between">
            <div class="col-2 mx-3" align="right">
              <button
                class="btn createProjectBtn border-primary"
                data-bs-toggle="modal"
                data-bs-target="#CreateProject"
              >
                Create Project
              </button>
              <Modal id="CreateProject">
                <template #modal-title> Add Project </template>
                <template #modal-body> <CreateProject /> </template>
              </Modal>
            </div>
            <div class="car-body col-10" align="left">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { projectsService } from '../services/ProjectsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';


export default {
  name: 'Home',

  setup() {
    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      projects: computed(() => AppState.projects),
    }
  }
}
</script>

<style scoped lang="scss">
.subHeadText {
  font: #844586;
  line-height: 1;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
}
.projectsText {
  line-height: 1;
  font-size: 1.5rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.createProjectBtn {
  line-height: 1;
  font-size: 1.25rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
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
