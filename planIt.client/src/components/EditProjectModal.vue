<template>
  <form @submit.prevent="handleSubmit">
    <div class="justify-content-around">
      <div>
        <label for="name" class="form-label"> Name</label>
        <input
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
        <label for="description" class="form-label"> Description</label>
        <textarea
          type="text"
          class="form-control"
          name="description"
          id="description"
          placeholder="description"
          min="10"
          max="250"
          required
        />
      </div>
      <!-- TODO v-model="project.name" && inject project info-->
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
import { ref } from "@vue/reactivity"
import { useRouter } from "vue-router"
import { AppState } from "../AppState"
import { Modal } from "bootstrap"
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { projectsService } from "../services/ProjectsService"
export default {
  setup(props) {
    const router = useRouter()
    const editable = ref({})
    // watchEffect(() => {
    //   editable.value = { ...props.project }
    // })
    return {
      editable,
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await projectsService.edit(editable.value)
          } else {
            await projectsService.create(editable.value)
          }
          Modal.getOrCreateInstance(document.getElementById('project-modal')).hide()
          router.push({ name: 'Project', params: { id: AppState.activeProject.id } })
        } catch (error) {
          logger.error(error)
          Pop.toast('Failed to Create', 'error')
        }
      }
    }
  }
}
</script>