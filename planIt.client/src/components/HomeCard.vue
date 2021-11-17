<template>
  <div class="row">
    <div>
      <div class="homeCard col-12">
        <div class="card p-3 bg-white rounded elevation-3 mt-5">
          <div class="card-body">
            <div class="row justify-content-between">
              
              <div class="col-2 mx-3" align="right">
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
              </div>
              <div class="col-10" align="left">
                <HPProjects />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"

export default {
  setup() {
    onMounted(async () => {
      try {

      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, "Error on the Home Page")
      }
    })
    return {
      project: computed(() => AppState.project),
    }
  }
}
</script>


<style lang="scss" scoped>
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
</style>