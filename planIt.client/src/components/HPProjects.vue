<template>
  <div class="row px-3">
    <div class="col-10">
      <div class="card m-2 p-2" v-for="p in projects" :key="p.id" >
      <h1 class="pnText">{{ p.name }}</h1>
      <p>{{ p.description }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { projectsService } from '../services/ProjectsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {

  setup() {
    const router = useRouter()
    return {
      projects: computed(()=> AppState.projects),
      // account: computed(()=> AppState.account),
      async create() {
        try {
          await projectsService.create()
        } catch (error) {
          logger.log(error)
          Pop.toast("Issue creating project", "error")
        }
      },
      async remove(id) {
        try {
          await projectsService.remove(id)
        } catch (error) {
          logger.log(error)
          Pop.toast("issue deleting project", "error")
        }
      },
      // TODO link profile in profile service

    }
  }
}
</script>


<style lang="scss" scoped>
.subHeadText {
  font: #844586;
  line-height: 1;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
}
</style>