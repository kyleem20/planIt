import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'
import { BadRequest, Forbidden } from '../utils/Errors'

class ProjectsService {
  constructor() {
    logger.log('service is here')
  }

  async getAll(query = {}) {
    return await dbContext.Projects.find(query).populate('creator', 'name')
  }

  async getById(id) {
    const project = await dbContext.Projects.findById(id).populate('creator', 'name')
    if (!project) {
      throw new BadRequest('Invalid Id')
    }
    return project
  }

  async create(body) {
    const newProject = await dbContext.Projects.create(body)
    return newProject.populate('creator', 'name')
  }

  async remove(projectId, userId) {
    const project = await this.getById(projectId)
    if (project.creatorId.toString() !== userId) {
      throw new Forbidden('You are not aloud to delete this project')
    }
    await dbContext.Projects.findByIdAndDelete(projectId)
  }

  async edit(body) {
    const project = await this.getById(body.id)
    if (project.creatorId.toString() !== body.creatorId) {
      throw new Forbidden('You are not aloud to edit this project')
    }
    const updateProject = dbContext.Projects.findOneAndUpdate({ _id: body.id }, body, { new: true })
    return await updateProject
  }
}

export const projectsService = new ProjectsService()
