<template>
  <form @submit.prevent="handleSubmit">
    <div class="justify-content-around d-flex">
      <div>
        <label for="name" class="form-label"> Task Name</label>
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
        <label for="weight" class="form-label"> Task Weight</label>
        <input
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
import { useRouter } from "vue-router"
import { Modal } from "bootstrap";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { taskService } from "../services/TaskService"
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const router = useRouter();
    const task = ref();

    return {
      task,
      async handleSubmit() {
        try {
          await taskService.create(task.value)
          Modal.getOrCreateInstance(
            document.getElementById("addTask-modal")
          ).show();
          router.push({
            name: "PlanIt"
          })
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, "Error in the Task Model")
        }
      }
    }
  }
}
</script>