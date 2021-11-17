import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class ProjectService {
  async edit(project){
    const res = await api.put('api/project', + project.id, project)
    logger.log(res.data)
    const updatedProject = new Project(res.data)
    AppState.activeProject = updatedProject
    const index = AppState.project.findIndex(p => p.id === updatedProject.id)
    if (index === -1) {
      AppState.project.push(updatedCar)
      return
    }
    AppState.project.splice(index, 1, updatedProject)
}
}

export const projectService = new ProjectService()