<template>
  <Modal id="sprint-modal">
    <template #modal-title>
      <h4>Add Sprint</h4>
    </template>
    <template #modal-body>
      <form @submit.prevent="handleSubmit">
        <div class="justify-content-around">
          <div>
            <label for="body" class="form-label"> Name</label>
            <textarea
              type="text"
              class="form-control"
              name="body"
              id="body"
              placeholder="Name"
              min="10"
              max="100"
              required
              v-model="sprint.body"
            >
            </textarea>
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
  </Modal>
</template>

<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";

export default {
  setup() {
    const router = useRouter;
    const sprint = ref();

    return {
      sprint,
      async handleSubmit() {
        try {
          await sprintService.create(sprint.value)
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