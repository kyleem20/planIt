import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class TasksService {
  async getAll(projectId) {
    const res = await api.get(`api/projects/${projectId}/tasks/`)
    AppState.tasks = res.data
  }
  async getTaskId(projectId, taskId) {
    const res = await api.get(`api/projects/${projectId}/tasks/${taskId}`)
    AppState.tasks = res.data
  }
  async create(projectId, taskId) {
    const res = await api.post(`api/projects/${projectId}/tasks`, taskId)
    AppState.tasks.unshift(res.data)
  }
  // async edit(id) {
  //   const res = await api.put('api/projects/' + id + '/tasks/', id)
  //   AppState.tasks = res.data
  //   const index = AppState.tasks.findIndex(c => c.id === AppState.tasks.id)
  //   if (index === -1) {
  //     AppState.tasks.push(AppState.tasks)
  //     return
  //   }
  //   AppState.tasks.splice(index, 1, AppState.tasks)
  // }
  async remove(taskId, projectId) {
    const res = await api.delete(`api/projects/${projectId}/tasks/${taskId}`)
    AppState.tasks.filter(t => t.taskId !== taskId)
    AppState.tasks = AppState.tasks
  }

  async taskIsComplete(taskId, projectId) {
    await api.put(`api/projects/${projectId}/tasks/${taskId}`, taskId)
    // AppState.tasks.isComplete = !AppState.tasks.isComplete
    const found = AppState.tasks.find(t => t.taskId !== taskId)
    logger.log('complete', found)
    debugger
    found.isComplete = !found.isComplete
    AppState.tasks = found.isComplete
  }
}

export const tasksService = new TasksService()