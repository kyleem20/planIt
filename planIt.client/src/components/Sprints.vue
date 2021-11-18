<template>
  <div class="row m-0 justify-content-center">
    <div
      class="col-11 card border-info elevation-3 m-2"
      v-for="s in sprints"
      :key="s.id"
      :sprint="s"
    >
      <h5 class="sprintsText">{{ s.name }}</h5>
      <p>{{ s.startDate }}</p>

      <div class="card-header bg-transparent d-flex justify-content-between">
        <h5
          class="sprintInfoText btn selectable col-3"
          data-bs-toggle="collapse"
          href="#sprintDrawer"
          role="button"
          aria-expanded="false"
          aria-controls="sprintDrawer"
        >
          <p>
            Total Weight from Tasks
            <img src="https://i.imgur.com/P7nHMkP.png" class="weight" />
          </p>
        </h5>
        <div class="col-3">
          <p><b>0/0 Tasks Complete</b></p>
        </div>
        <button
          class="btn createTaskBtn border-primary addSprintBtn mb-4 col-3"
          data-bs-toggle="modal"
          data-bs-target="#addTask-modal"
        >
          Add Task
        </button>
        <Modal id="addTask-modal">
          <template #modal-title> Add Task </template>
          <template #modal-body>
            <!-- <AddTask /> -->
          </template>
        </Modal>
        <button class="deleteSprint">
          DELETE SPRINT &nbsp;&nbsp;
          <img class="trashCan" src="https://i.imgur.com/SHjFXfJ.png" />
        </button>
      </div>
      <div class="collapse mb-3" id="sprintDrawer">
        <div class="row">
          <div
            class="col-12 card-body d-flex justify-content-between collapse"
            align="right"
            data-bs-toggle="collapse"
          >
            TASKS LIVE HERE
            <!-- <Task /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { sprintsService } from '../services/SprintsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    //  onMounted(async () => {
    //     try {
    //       if (route.params.id) {
    //         await sprintsService.getAll(route.params.id)
    //       }
    //     } catch (error) {
    //       logger.error(error)
    //       Pop.toast("Issue with active project .vue", 'error')
    //     }
    //   })
    return {
      sprints: computed(() => AppState.sprints),
      activeProject: computed(() => AppState.activeProject),

    }
  }

}
</script>


<style lang="scss" scoped>
.trashCan {
  height: 25px;
}
.sprintInfoText {
  font-weight: 500;
  font-family: "Lucida Sans", "Lucida Sans Regular", Verdana;
}
.deleteSprint {
  border: none;
  line-height: 1;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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