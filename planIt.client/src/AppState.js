import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  sprints: [],
  projects: [],
  activeProject: {},
<<<<<<< HEAD
  tasks: [],
  notes: []
=======
  task: {},
  notes: {}
>>>>>>> 17394e54b0419d807bd6441b24b25f931f3b4f97
})
