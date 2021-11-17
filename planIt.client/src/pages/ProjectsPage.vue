<template>
    <div class="component">
        <Projects/>
    </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router'
import { AppState } from '../AppState';
import Projects from '../components/Projects.vue';
import { projectsService } from '../services/ProjectsService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';

export default {
  components: { ProjectsPage },
    name: "Project",
    setup(){
        const route = useRoute();
        onMounted(async ()=> {
            try {
                await projectsService.getAll(route.params.id);
                await projectsService.getProjectsById(route.params.id)
            } catch (error) {
                logger.error(error)
                Pop.toast("issue with projects route", "error")
            }
        })
        return {
         project: computed(()=> AppState.projects)
        }
    }}
</script>


<style lang="scss" scoped>

</style>