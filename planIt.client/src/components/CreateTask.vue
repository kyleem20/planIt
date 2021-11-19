<template>
  <form @submit.prevent="createTask(sprintId)">
    <div class="justify-content-around d-flex">
      <div>
        <label for="name" class="form-label"> Task Name</label>
        <input
          v-model="state.editable.name"
          type="text"
          class="form-control"
          name="name"
          id="name"
          placeholder="Name"
          min="10"
          max="100"
          required
        />
      </div>
      <div>
        <label for="weight" class="form-label"> Task Weight</label>
        <input
          v-model="state.editable.weight"
          type="number"
          class="form-control"
          name="weight"
          id="weight"
          placeholder="Weight"
          min="1"
          max="10"
          required
        />
      </div>
      <!-- TODO v-model="task.name && weight " -->
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary text-light"
        data-bs-dismiss="modal"
      >
        Close
      </button>
      <button type="submit" class="btn btn-success">Submit</button>
    </div>
  </form>
</template>


<script>
import { computed, reactive } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { tasksService } from '../services/TasksService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
  props: { sprintId: { type: String, required: true } },

  setup(props) {
    const route = useRoute()
    const state = reactive({
      editable: {}
    })

    return {
      state,
      sprints: computed(() => AppState.sprints),
      async createTask(sprintId) {
        try {
          if (route.params.id) {
            state.editable.sprintId = sprintId
            await tasksService.create(route.params.id, state.editable);
            state.editable = {}
          }
        } catch (error) {
          logger.log(error)
          Pop.toast("Create is not working", "error");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>