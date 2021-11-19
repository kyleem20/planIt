<template>
  <form @submit.prevent="createProject()">
    <div>
      <div>
        <label for="name" class="form-label d-flex">Project Name:</label>
        <input
          v-model="state.editable.name"
          class="form-control mb-3 justify-content-around d-flex"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          min="10"
          max="100"
          required
        />
        <input
          v-model="state.editable.description"
          class="form-control mb-3 justify-content-around d-flex"
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          min="10"
          max="100"
          required
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
import { reactive } from '@vue/reactivity';
import { projectsService } from '../services/ProjectsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      editable: {}
    })
    return {
      state,
      async createProject() {
        try {
            // state.editable.projectId = projectId
            await projectsService.create(route.params.id, state.editable);
            state.editable = {}
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