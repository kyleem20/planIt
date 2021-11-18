<template>
  <div class="note row" v-for="n in notes" :key="n.id">
    <div class="col-12">
      {{ n.body }}
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  props: {
    taskId: { type: String, required: true }
  },
  setup(props) {
    return {
      tasks: computed(() => AppState.tasks),
      notes: computed(() => AppState.notes.filter(n => n.taskId === props.taskId))
    }
  }
}
</script>


<style lang="scss" scoped>
</style>