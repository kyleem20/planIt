import { api } from "./AxiosService";
import {AppState} from "../AppState"


class SprintService {
  async create(data){
    const res = await api.sprint(api/sprint, data)
    AppState.sprint = res.data.sprint
  }
}

export const sprintService = new SprintService()