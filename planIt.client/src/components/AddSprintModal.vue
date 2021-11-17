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
      <!-- TODO v-model="sprint.name" -->
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
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
import { sprintsService } from "../services/SprintsService"

export default {
  setup() {
    const router = useRouter();
    const sprint = ref();

    return {
      sprint,
      async handleSubmit() {
        try {
          await sprintsService.create(sprint.value)
          Modal.getOrCreateInstance(
            document.getElementById("sprint-modal")
          ).show();
          router.push({
            name: "PlanIt"
          })
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, "Error in the Sprint Modal")
        }
      }
    }
  }
}


</script>