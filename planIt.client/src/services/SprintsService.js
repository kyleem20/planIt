import { api } from "./AxiosService";
import {AppState} from "../AppState"
import { logger } from "../utils/Logger";

let activeProjectId = AppState.activeProject
class SprintsService {
  async getAll(id){
    const res = await api.get(`api/projects/${id}/sprints`)
    AppState.sprints = res.data
  } 
  async create(id){
    const res = await api.post(`api/projects/${projectId}/sprints/`, id)
    AppState.sprints.unshift(res.data)
  }
  async getSprintId(id){
    const res = await api.get(`api/projects/${projectId}/sprints/`)
    logger.log(res.data)
    AppState.sprints = res.data
  }
  async remove(id){
    const res = await api.delete(`api/projects/${projectId}/sprints/`)
    logger.log(res.data)
    AppState.sprints.filter(s => s.id !== id)
    AppState.sprints = AppState.sprints
  }

}

export const sprintsService = new SprintsService()