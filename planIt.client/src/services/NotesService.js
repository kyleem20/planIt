import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class NotesService {

  async getAll(projectId) {
    const res = await api.get(`api/projects/${projectId}/notes`)
    AppState.notes = res.data
  }

  async create(projectId, noteId) {
    const res = await api.post(`api/projects/${projectId}/notes`, noteId)
    AppState.notes.unshift(res.data)
  }

  async getNoteId(projectId, noteId) {
    const res = await api.get(`api/projects/${projectId}/notes/${noteId}`)
    AppState.notes = res.data
  } 

  async remove(noteId, projectId){
    const res = await api.delete(`api/projects/${projectId}/notes/${noteId}`)
    AppState.notes.filter(n => n.noteId !== noteId)
    AppState.notes = AppState.notes
  }
  
  // async edit(notes){
  //   const res = await api.put('api/notes', + notes.id, notes)
  //   logger.log(res.data)
  //   const updatedNote = new Notes(res.data)
  //   AppState.activeNote = updatedNote
  //   const index = AppState.notes.findIndex(n => n.id === updatedNote.id)
  //   if (index === -1){
  //   AppState.notes.push(updatedNote)
  //   return
  //   }
  //   AppState.project.splice(index, 1, updatedNote)
  // }
}
export const notesService = new NotesService()