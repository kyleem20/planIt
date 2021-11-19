<template>
  <div class="row" align="left" draggable="true" @dragstart="prepToMove">
    <div class="col-12 d-flex" v-for="t in tasks" :key="t.id">
      <div class="form-check">
        <!-- <div v-if="t.id"> -->
        <input
          type="checkbox"
          class="form-check-input"
          name="taskComplete"
          id="taskComplete"
          value="checkedValue"
          @click="isComplete(t.id)"
          v-model="t.isComplete"
        />
        <label class="form-check-label ms-3" for="taskComplete"> </label>
        <h6>
          <b> {{ t.name }} </b>
        </h6>
        <!-- </div> -->
        <!-- <p> Created - DATE | Completed - DATE</p> -->
        <button
          class="btn"
          data-bs-toggle="offcanvas"
          :href="'#notesOffCanvas-' + t.id"
          rolw="button"
          aria-controls="notesOffCanvas"
        >
          0 <img class="commentImg" src="https://i.imgur.com/rlHQekg.png" />
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          :id="'notesOffCanvas-' + t.id"
          aria-labelledby="notesOffCanvasLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="notesOffCanvasLabel">
              SPRINT NAME > {{ t.name }}
            </h5>
            <!--  TODO {{sprint.name}} > {{task.name}} -->
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
                  <!-- <p
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
                  </p> -->
                  <!-- TODO v-if here -->
                  <!-- <p class="rounded-pill completedPill">Done</p> -->
                </div>
              </div>
              <div class="row">
                <div class="col-12 text-center notesText">Notes</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-12 mt-2"><b>Add A Note</b></div>
              </div>
              <form @submit.prevent="createNote(t.id)">
                <textarea
                  v-model="state.editable.body"
                  type="text"
                  class="form-control"
                  name="note"
                  id="body"
                  placeholder="Note"
                  min="10"
                  max="250"
                  required
                />
                <div class="text-end mt-2">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
              <!-- <AddNote /> -->
              <div>
                <Notes :taskId="t.id" />
              </div>
            </div>
          </div>
        </div>

        {{ t.weight }}
        <img src="https://i.imgur.com/P7nHMkP.png" class="weight" />
      </div>
      <button class="btn deleteTask" align="right" @click="removeTask(t.id)">
        Delete Task &nbsp;&nbsp;
        <img class="trashCan" src="https://i.imgur.com/SHjFXfJ.png" />
      </button>
    </div>
  </div>
</template>


<script>
import { computed, reactive } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { notesService } from '../services/NotesService'
import { Modal } from 'bootstrap'
import { tasksService } from '../services/TasksService'
export default {


  props: {
    sprintId: { type: String, required: true },
  },
  setup(props) {
    const state = reactive({
      editable: {},
    })
    const route = useRoute()
    const projectId = route.params.id
    onMounted(async () => {
      try {
        if (route.params.id) {
          await notesService.getAll(route.params.id)
        }
      } catch (error) {
        logger.error(error)
        Pop.toast("Issue with active project .vue", 'error')
      }
    })

    return {
      state,
      sprints: computed(() => AppState.sprints),
      tasks: computed(() => AppState.tasks.filter(t => t.sprintId === props.sprintId)),
      async removeTask(taskId) {
        try {
          if (projectId) {
            await tasksService.remove(taskId, projectId);
          }
        } catch (error) {
          logger.log(error)
          Pop.toast("Delete task is not working", "error");
        }
        return tasksService.getAll(projectId)
      },

      async createNote(taskId) {
        try {
          if (route.params.id) {
            //   debugger
            state.editable.taskId = taskId
            await notesService.create(route.params.id, state.editable);
            state.editable = {}
          }
        } catch (error) {
          logger.log(error)
          Pop.toast("Create is not working", "error");
        }
      },

      async isComplete(taskId) {
        try {
          if (projectId)
            // debugger
            await tasksService.isComplete(taskId, projectId)
          Pop.toast("Complete", 'success')
        } catch (error) {
          logger.log(error)
          Pop.toast("Edit was not marked", 'error');
          // tasksService.toggleCheckbox(checkbox, id)
        }
      },

      async prepToChange() {
        try {
          tasksService.prepToChange(props.sprintId)
        } catch (error) {
          logger.error(error)
        }
      }
    }
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
.trashCan {
  height: 25px;
}
.deleteTask {
  width: 150px;
  border: none;
  line-height: 1;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>