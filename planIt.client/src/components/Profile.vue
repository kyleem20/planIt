<template>
  <div class="row">
    <div class="col-11">
      <div class="profile form component">
        <form @submit.prevent="edit(account)">
          <label for="">Profile Picture</label>
          <input
            type="url"
            placeholder="Profile Image Url..."
            name="picture"
            id="picture"
            class="form-control mb-2"
            required
            v-model="account.picture"
          />
          <label for="">Name</label>
          <input
            type="text"
            placeholder="Name Here..."
            name="name"
            id="name"
            class="form-control mb-2"
            required
            v-model="account.name"
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
import { onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { profileService } from "../services/ProfileService";
import { useRoute } from "vue-router";
import { accountService } from '../services/AccountService';
import { Modal } from 'bootstrap';


export default {
  props: { account: { type: Object, required: true } },
  setup() {
    // const route = useRoute();
    // onMounted(async () => {
    //   try {
    //     await profileService.getProfile(route.params.id);
    //   } catch (error) {
    //     logger.error(error);
    //     Pop.toast(error.message);
    //   }
    // });

    return {
      async edit(account) {
        try {
          await accountService.edit(account);
          Modal.getOrCreateInstance(document.getElementById("ProfileForm")).hide();
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