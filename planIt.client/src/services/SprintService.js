const { api } = require("./AxiosService");


class SprintService {
  async create(data){
    const res = await api.sprint(api/sprint, data)
    AppState.sprint = res.data.sprint
  }
}

export const sprintService = new SprintService()