<template>
  <form @submit.prevent="createProject">
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
import { useRoute, useRouter } from 'vue-router';
import { Modal } from 'bootstrap';
import { watchEffect } from '@vue/runtime-core';
import { AppState } from '../AppState';
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      editable: {}
    })
    watchEffect(async () => {

    })
    return {
      state,
      async createProject() {
        try {

          // state.editable.projectId = projectId
          await projectsService.create(state.editable);
          Modal.getOrCreateInstance(document.getElementById("CreateProject")).hide();
          // state.editable = {}

        } catch (error) {
          logger.log(error)
          Pop.toast("Create is not working", "error");
        }
        // return projectsService.getProjectById(state.editable)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>