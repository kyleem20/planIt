<template>
  <div class="row">
    <div class="col-11">
      <div class="profile form component">
        <form @submit.prevent="edit()">
          <label for="">Name</label>
          <input
            type="text"
            placeholder="Name Here..."
            name="name"
            id="name"
            class="form-control mb-2"
            required
            v-model="state.editable.name"
          />
          <label for="">Profile Picture</label>
          <input
            type="url"
            placeholder="Profile Image Url..."
            name="picture"
            id="picture"
            class="form-control mb-2"
            required
            v-model="state.editable.picture"
          />

          <button type="submit" class="btn btn-secondary">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import { onMounted, reactive, watchEffect } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { profileService } from "../services/ProfileService";
import { useRoute } from "vue-router";
import { accountService } from '../services/AccountService';
import { Modal } from 'bootstrap';


export default {
  props: { account: { type: Object } },
  setup() {
    const state = reactive({
    editable: {}
  })
    const route = useRoute();
    watchEffect(async () => {
      try {
        // await profileService.getProfile(route.params.id);
        state.editable.name = AppState.account.name
        state.editable.picture = AppState.account.picture
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message);
      }
    });

    return {
      state,
      account: computed(() => AppState.account),
      async edit() {
        try {
          await accountService.edit(state.editable);
          // Modal.getOrCreateInstance(document.getElementById("Profile")).hide();
        } catch (error) {
          logger.error(error);
          Pop.toast("error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>