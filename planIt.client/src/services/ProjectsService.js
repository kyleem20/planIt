import { AppState } from "../AppState";
import { router } from "../router";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class ProjectsService {
  
  async getAll(){
    const res = await api.get('api/projects/')
    AppState.projects = res.data

  } 
  async create(data){
    const res = await api.post('api/projects/', data)
    AppState.projects.unshift(res.data)
    router.push({ path: '/projects/' + res.data.id })

  }
  async getProjectById(id){
    const res = await api.get("api/projects/"+id)
    logger.log(res.data)
    AppState.activeProject = res.data
  }
  async remove(id){
    const res = await api.delete('api/projects/'+ id)
    logger.log(res.data)
    AppState.projects.filter(p => p.id !== id)
    AppState.projects = AppState.projects
  }

}

export const projectsService = new ProjectsService()