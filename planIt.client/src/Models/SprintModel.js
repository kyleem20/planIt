export class SprintModel{
  constructor(newSprintData = {}){
    this.name = newSprintData.name 
    this.startDate = newSprintData.startDate 
    this.creatorId = newSprintData.creatorId
    this.projectId = newSprintData.projectId
  }
}