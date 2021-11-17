<template>
  <form @submit.prevent="handleSubmit">
    <div class="justify-content-around d-flex">
      <div>
        <label for="name" class="form-label"> Project Name</label>
        <input
          type="text"
          class="form-control mb-3"
          name="name"
          id="name"
          placeholder="Name"
          min="10"
          max="100"
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
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { projectService } from "../services/ProjectService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {
    const router = useRouter();
    const task = ref();

    return {
      async handleSubmit() {
        try {
          await projectService.create(project.value)
          Modal.getOrCreateInstance(
            document.getElementById("addProject-modal")
          ).show();
          router.push({
            name: "PlanIt"
          })
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, "Error in the Add Project Modal")
        }
      }
    }
  }
}
</script>