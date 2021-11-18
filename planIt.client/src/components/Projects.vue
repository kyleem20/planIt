<template>
  <div class="row px-3">
    <div class="col-12">
      <div
        class="card m-2 p-3 selectable"
        v-for="p in projects"
        :key="p.id"
        :project="p"
        @click="linkProject(p.id)"
      >
        <h1 class="pnText">{{ p.name }}</h1>
        <p>{{ p.description }}</p>
        <span class="m-4"> </span>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router'
import { projectsService } from '../services/ProjectsService';
import { AppState } from '../AppState';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
export default {
  // props: {project: {type: Object, required: true}},
  setup() {
    const router = useRouter();
    async () => { await projectsService.getAll() };
    return {
      projects: computed(() => AppState.projects),
      async linkProject(id) {
        try {
          if (id) {
            router.push({ path: '/projects/' + id })
            AppState.activeProject = id
          }
        } catch (error) {
          logger.log(error)
          Pop.toast("error")
        }
      },
 
    }

    //   setup() {
    // const route = useRoute()
    // onMounted(async () => {
    //   try {
    //     // await projectsService.getProjectsById(route.params.id)
    //   } catch (error) {
    //     logger.error(error)
    //     Pop.toast(error.message, "Error on the Project Page")
    //   }
    // });
    // return {
    //   // 
    // }

  }
}
</script>


<style lang="scss" scoped>
</style>