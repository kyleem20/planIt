import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ProjectSchema = new Schema(
  {
    body: { type: String, required: true },
    title: { type: String },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }

  }, { timestamps: true, toJSON: { virtuals: true } }
)

ProjectSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
