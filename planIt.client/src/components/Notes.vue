<template>
  <div class="note row" v-for="n in notes" :key="n.id">
    <div class="col-12">
      <img class="profilePic" :src="account.picture" /> {{ account.name }}
      <p>
        {{ n.body }}
        <button class="btn" @click="removeNote(n.id)">
          <i class="text-danger mdi mdi-delete"></i>
        </button>
      </p>
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
      account: computed(() => AppState.account),
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
.profilePic {
  height: 35px;
  border-radius: 50%;
}
</style>