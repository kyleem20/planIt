import { AppState } from "../AppState";
import { api } from "./AxiosService";


class TasksService {
  async getAll(id) {
    const res = await api.get('api/projects/' + id + '/tasks')
    AppState.tasks = res.data
  }
  async getTaskId(id) {
    const res = await api.get('api/projects/' + id + '/tasks/' + id)
    AppState.tasks = res.data
  }
  async create(id) {
    const res = await api.post('api/projects/' + id + '/tasks', id)
    AppState.tasks.unshift(res.data)
  }
  async edit(id) {
    const res = await api.put('api/projects/' + id + '/tasks/', id)
    AppState.tasks = res.data
    const index = AppState.tasks.findIndex(c => c.id === AppState.tasks.id)
    if (index === -1) {
      AppState.tasks.push(AppState.tasks)
      return
    }
    AppState.tasks.splice(index, 1, AppState.tasks)
  }
  async remove(id) {
    const res = await api.delete('api/projects/' + id + '/tasks/', id)
    AppState.tasks.filter(t => t.id !== id)
    AppState.tasks = AppState.tasks
  }
}

export const tasksService = new TasksService()