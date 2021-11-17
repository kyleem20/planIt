import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class ProjectService {
  
  async getAll(){
    const res = await api.get('api/projects/')
    AppState.projects = res.data
  } 
  async create(data){
    const res = await api.project('api/projects/', data)
    AppState.projects.unshift(res.data)
  }
  async remove(id){
    const res = await api.delete('api/projects/'+ id)
    logger.log(res.data)
    AppState.projects.filter(p => p.id !== id)
    AppState.projects = AppState.project
  }

}

export const projectService = new ProjectService()