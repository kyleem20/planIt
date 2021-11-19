<template>
  <div class="note row" v-for="n in notes" :key="n.id">
    <div class="col-12">
      {{ n.body }}
    <button class="btn btn-danger" @click="removeNote(n.id)" >X</button>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { notesService } from '../services/NotesService'

export default {
  props: {
    taskId: { type: String, required: true },
  },
  setup(props) {
      const route = useRoute()
    //   debugger
      const projectId = route.params.id
    return {
      tasks: computed(() => AppState.tasks),
      notes: computed(() => AppState.notes.filter(n => n.taskId === props.taskId)),
    async removeNote(noteId) {
        try {
          if (projectId) {
            await notesService.remove(noteId, projectId);
          }
        } catch (error) {
          logger.log(error)
          Pop.toast("Delete note is not working", "error");
        }
        return notesService.getAll()
      }
    }

  }
}
</script>


<style lang="scss" scoped>
</style>