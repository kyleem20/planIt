import { TaskSchema } from './Task'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const NoteSchema = new Schema(
  {
    note: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    taskId: { type: Schema.Types.ObjectId, ref: 'Task', required: true }
  }, { timestamps: true, toJSON: { virtuals: true } }
)

NoteSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})

TaskSchema.virtual('task', {
  localField: 'taskId',
  foreignField: '_id',
  justOne: true,
  ref: 'Task'
}
)
