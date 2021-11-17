import { AppState } from "../AppState";
import { api } from "./AxiosService";


class TaskService {
  async create(data){
    const res = await api.task('api/task', data)
    AppState.task = res.data.task 
  }
}

export const taskService = new TaskService()