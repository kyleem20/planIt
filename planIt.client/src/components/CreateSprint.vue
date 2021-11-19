<template>
  <form @submit.prevent="createSprint(projectId)">
    <div class="justify-content-around">
      <div>
        <label for="name" class="form-label"> Sprint Name</label>
        <input
          v-model="state.editable.name"
          type="text"
          class="form-control m-1"
          name="name"
          id="name"
          placeholder="Name"
          min="10"
          max="100"
          required
        />
        <input
          v-model="state.editable.startDate"
          type="text"
          class="form-control m-1"
          name="startDate"
          id="startDate"
          placeholder="Start Date"
          min="10"
          max="100"
          
        />
        <input
          v-model="state.editable.endDate"
          type="text"
          class="form-control m-1"
          name="endDate"
          id="endDate"
          placeholder="End Date"
          min="10"
          max="100"
          
        />
      </div>
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
import { AppState } from '../AppState'
import { sprintsService } from '../services/SprintsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
props: { projectId: { type: String, required: true } },

  setup(props) {
    const route = useRoute ()
    const state = reactive({
      editable: {}
    })

    return {
      state,
      projects: computed(() => AppState.projects),
      async createSprint(projectId) {
        try {
          if (route.params.id) {
            state.editable.projectId = projectId
            await sprintsService.create(route.params.id, state.editable);
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