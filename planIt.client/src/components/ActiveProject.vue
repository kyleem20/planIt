<template>
  <div class="row justify-content-center">
    <div class="col-10 m-2 p-3">
      <h1 class="pnText" align="center">{{ project.name }}</h1>
      <p align="center">{{ project.description }}</p>
      <button
        class="btn createSprintBtn border-primary addSprintBtn m-2"
        data-bs-toggle="modal"
        :href="'#createSprint-' + project.id"
        data-bs-target="#addSprint-modal"
      >
        Add Sprint
      </button>
       <div :id="'#createSprint-' + project.id">
        <Modal id="addSprint-modal">
          <template #modal-title> Add Sprint </template>
          <template #modal-body>
           <CreateSprint :projectId="project.id"/>
          </template>
        </Modal>
       </div>
      <button class="btn-danger m-2 rounded" @click="removeProject(project.id)">
        Delete Project
      </button>
      <div class="row">
        <div class="col-12">
          <Sprints />
        </div>
      </div>
    </div>
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
      async removeProject(projectId) {
        try {
          if (projectId) {
            await projectsService.remove(projectId);
            router.push({ path: '/'})
            AppState.activeProject = projectId
            state.editable = {}
          }
        } catch (error) {
          logger.log(error)
          Pop.toast("Delete task is not working", "error");
        }
        return projectsService.getAll()
      },
    }
  }
}
      // project: computed(() => AppState.projects),
    //   activeProject: computed(() => {
    //     let projects = AppState.activeProject
    //     if (projects.value) {
    //       router.push({ path: '/projects/' + id + '/sprints/'})
    //     }
    // })d
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
.createSprintBtn {
  line-height: 1;
  font-size: 1.25rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#013571, #aec6ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>