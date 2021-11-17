import { api } from "./AxiosService";
import {AppState} from "../AppState"
import { logger } from "../utils/Logger";

class SprintsService {
  async getAll(id){
    const res = await api.get('api/projects/'+ id)
    AppState.sprints = res.data
  } 
  async create(id){
    const res = await api.post('api/projects/'+ id +"/sprints", id)
    AppState.sprints.unshift(res.data)
  }
  async getSprintProjectId(id){
    const res = await api.get("api/projects/"+id+"/sprints")
    logger.log(res.data)
    AppState.sprints = res.data
  }
  async remove(id){
    const res = await api.delete('api/projects/'+ id +"/sprints")
    logger.log(res.data)
    AppState.sprints.filter(p => p.id !== id)
    AppState.sprints = AppState.sprints
  }

}

export const sprintsService = new SprintsService()