<template>
  <div
    class="row m-0 justify-content-center"
    dropzone="changeTask"
    @draagover.prevent
    @drop.prevent="dropTask()"
  >
    <div
      class="col-12 card border-info elevation-3 m-2"
      v-for="s in sprints"
      :key="s.id"
      :sprint="s"
    >
      <h5 class="sprintsText">{{ s.name }}</h5>
      <p>{{ s.startDate }}</p>

      <div
        class="
          card-header
          bg-transparent
          d-flex
          justify-content-between
          align-content-middle
        "
        align="middle"
      >
        <button
          class="sprintInfoText btn col-3"
          data-bs-toggle="collapse"
          :href="'#sprintdrawer-' + s.id"
          role="button"
          aria-expanded="false"
          aria-controls="sprintDrawer"
        >
          <!-- TODO total weight -->
          <p>
            {{ s.length }} total wieght
            <img src="https://i.imgur.com/P7nHMkP.png" class="weight" />
          </p>
        </button>
        <button
          class="btn createTaskBtn border-primary addSprintBtn mb-4 col-3"
          data-bs-toggle="modal"
          :href="'#createTask-' + s.id"
          data-bs-target="#addTask-modal"
        >
          Add Task
        </button>
        <div :id="'#createTask-' + s.id">
          <Modal id="addTask-modal">
            <template #modal-title> Add Task </template>
            <template #modal-body>
              <CreateTask :sprintId="s.id" />
            </template>
          </Modal>
        </div>
        <button class="deleteSprint" @click="removeSprint(s.id)">
          DELETE SPRINT &nbsp;&nbsp;
          <img class="trashCan" src="https://i.imgur.com/SHjFXfJ.png" />
        </button>
      </div>
      <div class="collapse mb-3" :id="'sprintdrawer-' + s.id">
        <div class="row">
          <div
            class="col-12 card-body d-flex justify-content-between collapse"
            align="right"
            data-bs-toggle="collapse"
          >
            <div class="row">
              <Tasks :sprintId="s.id" />
              <!-- NOTE :task="t" was insid above previously -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, reactive } from '@vue/reactivity'
import { sprintsService } from '../services/SprintsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { tasksService } from '../services/TasksService'
import { projectsService } from '../services/ProjectsService'
import { onMounted } from '@vue/runtime-core'

export default {
  props: { projectId: { type: String, required: true } },
  setup(props) {
    const route = useRoute()
    const projectId = route.params.id
    const state = reactive({
      editable: {}
    })

    onMounted(async () => {
      try {
        if (route.params.id) {
          // await projectsService.getProjectById(route.params.id)
          await tasksService.getAll(route.params.id)
        }
      } catch (error) {
        logger.error(error)
        Pop.toast("Issue with active project .vue", 'error')
      }
    })
    return {
      state,
      sprints: computed(() => AppState.sprints),
      project: computed(() => AppState.activeProject),
      taskWeight: computed(() => AppState.tasks.weight),
      tasks: computed(() => AppState.tasks.filter(t => t.sprintId === props.sprintId)),

      async removeSprint(sprintId) {
        try {
          if (projectId) {
            await sprintsService.remove(sprintId, projectId);
            state.editable = {}
          }
        } catch (error) {
          logger.log(error)
          Pop.toast("Delete task is not working", "error");
        }
        return sprintsService.getAll(projectId)
      },

      async getTasksClick() {
        try {
          if (route.params.id) {
            // await projectsService.getProjectById(route.params.id)
            await tasksService.getAll(route.params.id)
          }
        } catch (error) {
          logger.error(error)
          Pop.toast("Issue with active project .vue", 'error')
        }
      },

      //NOTE draggable
      async dropTask() {
        await tasksService.moveTask(props.tasks.id)
      }
    }

    //TODO add function for adding total weight. Will be loop with a +=
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