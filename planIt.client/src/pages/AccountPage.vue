<template>
  <div class="about text-center">
    <h1>Welcome {{ this.account.name }}</h1>
    <img class="rounded" :src="this.account.picture" alt="" />
    <p>{{ this.account.email }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
