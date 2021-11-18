<template>
  <div class="row px-3">
    <div class="col-12 m-2 p-3" v-if="project.id === activeProject">
      <h1 class="pnText">{{ project.name }}</h1>
      <p>{{ project.description }}</p>
      <span class="m-4"> </span>
    </div>
    <Sprints />
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import { projectsService } from '../services/ProjectsService';
import { useRoute, useRouter } from 'vue-router';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { onMounted } from '@vue/runtime-core';
import { sprintsService } from '../services/SprintsService';

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async () => {
      try {
        if (route.params.id) {
          await projectsService.getProjectById(route.params.id)
          await sprintsService.getAll(route.params.id)
        }
      } catch (error) {
        logger.error(error)
        Pop.toast("Issue with active project .vue", 'error')
      }
    })
    return {
      project: computed(() => AppState.activeProject),
      // project: computed(() => AppState.projects),
    //   activeProject: computed(() => {
    //     let projects = AppState.activeProject
    //     if (projects.value) {
    //       router.push({ path: '/projects/' + id + '/sprints/'})
    //     }
    // })

    }
  }
}

// export default {
//   setup() {
//     return {
//       spell: computed(() => AppState.activeSpell),
//       async prepareToggle() {
//         try {
//           await mySpellService.prepareToggle()
//           Pop.toast("Prepared", 'success')
//         } catch (error) {
//           logger.error(error)
//           Pop.toast('Something went wrong', 'error')
//         }
//       },
//       async addSpell() {
//         try {
//           await mySpellService.addSpell()
//           Pop.toast("Added", 'success')
//         } catch (error) {
//           logger.error(error)
//           Pop.toast('Something went wrong', 'error')
//         }
//       },
//       async removeSpell() {
//         try {
//           await mySpellService.removeSpell()
//           Pop.toast("Removed", 'success')
//         } catch (error) {
//           logger.error(error)
//           Pop.toast('Something went wrong', 'error')
//         }
//       }
//     }
//   }
// }
</script>


<style lang="scss" scoped>
.subHeadText {
  font: #844586;
  line-height: 1;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
}
</style>