import { SprintSchema } from './Sprint'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const TaskSchema = new Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    weight: { type: Number },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    sprintId: { type: Schema.Types.ObjectId, ref: 'Sprint', required: true }

  }, { timestamps: true, toJSON: { virtuals: true } }
)

TaskSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})

SprintSchema.virtual('sprint', {
  localField: 'sprintId',
  foreignField: '_id',
  justOne: true,
  ref: 'Sprint'
}
)
