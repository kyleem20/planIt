import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
import { logger } from '../utils/Logger'

class TasksService {
  constructor() {
    logger.log('task service is here')
  }

  async getAll(query = {}) {
    return await dbContext.Tasks.find(query).populate('creator', 'name')
  }

  async getById(id) {
    const task = await dbContext.Tasks.findById(id).populate('creator', 'name')
    if (!task) {
      throw new BadRequest('Invalid Id')
    }
    return task
  }

  async create(body) {
    const newTask = await dbContext.Tasks.create(body)
    return newTask
    // return newTask.populate('creator', 'name')
  }

  async remove(taskId, userId) {
    const task = await this.getById(taskId)
    if (task.creatorId.toString() !== userId) {
      throw new Forbidden('You are not aloud to delete this task')
    }
    await dbContext.Tasks.findByIdAndDelete(taskId)
  }

  async edit(body) {
    const task = await this.getById(body.id)
    if (task.creatorId.toString() !== body.creatorId) {
      throw new Forbidden('You are not aloud to edit this task')
    }
    const updateTask = dbContext.Tasks.findOneAndUpdate({ _id: body.id }, body, { new: true })
    return await updateTask
  }
}

export const tasksService = new TasksService()
