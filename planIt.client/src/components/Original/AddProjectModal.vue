<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <div>
        <label for="name" class="form-label d-flex">Project Name:</label>
        <input
          class="form-control mb-3 justify-content-around d-flex"
          type="text"
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
      <!-- <router-link :to="{ name: 'PlanIt' }"> -->
      <button type="submit" class="btn btn-success">Submit</button>
      <!-- </router-link> -->
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { projectsService } from "../services/ProjectsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {
    const router = useRouter();
    const task = ref();

    return {
      async handleSubmit() {
        try {
          await projectsService.create(project.value)
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