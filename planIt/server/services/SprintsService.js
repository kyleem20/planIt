import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'
import { BadRequest, Forbidden } from '../utils/Errors'

class SprintsService {
  constructor() {
    logger.log('sprint service is here')
  }

  async getAll(query = {}) {
    return await dbContext.Sprints.find(query).populate('creator', 'name')
  }

  async getById(id) {
    const sprint = await dbContext.Sprints.findById(id).populate('creator', 'name')
    if (!sprint) {
      throw new BadRequest('Invalid Id')
    }
    return sprint
  }

  async create(body) {
    const newSprint = await dbContext.Sprints.create(body)
    return newSprint.populate('creator', 'name')
  }

  async remove(sprintId, userId) {
    const sprint = await this.getById(sprintId)
    if (sprint.creatorId.toString() !== userId) {
      throw new Forbidden('You are not aloud to delete this sprint')
    }
    await dbContext.Sprints.findByIdAndDelete(sprintId)
  }

  async edit(body) {
    const sprint = await this.getById(body.id)
    if (sprint.creatorId.toString() !== body.creatorId) {
      throw new Forbidden('You are not aloud to edit this sprint')
    }
    const updateSprint = dbContext.Sprints.findOneAndUpdate({ _id: body.id }, body, { new: true })
    return await updateSprint
  }
}

export const sprintsService = new SprintsService()
