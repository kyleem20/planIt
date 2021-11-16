import { Auth0Provider } from '@bcwdev/auth0provider'
import { sprintsService } from '../services/SprintsService'
import BaseController from '../utils/BaseController'

export class SprintsController extends BaseController {
  constructor() {
    super('api/projects/:projectId/sprints')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      const query = req.query
      const sprints = await sprintsService.getAll(query)
      return res.send(sprints)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const sprint = await sprintsService.getById(req.params.id)
      return res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.projectId = req.params.projectId
      const sprint = await sprintsService.create(req.body)
      return res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const userId = req.userInfo.id
      const sprintId = req.params.id
      await sprintsService.remove(sprintId, userId)
      res.send('You have deleted this sprint')
    } catch (error) {
      next(error)
    }
  }
}
