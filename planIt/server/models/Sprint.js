import mongoose from 'mongoose'
import { ProjectSchema } from './Project'
const Schema = mongoose.Schema

export const SprintSchema = new Schema(
  {
    title: { type: String, required: true },
    totalWeight: { type: Number },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true }

  }, { timestamps: true, toJSON: { virtuals: true } }
)

ProjectSchema.virtual('project', {
  localField: 'projectId',
  foreignField: '_id',
  justOne: true,
  ref: 'Project'
}
)
SprintSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
}
)
