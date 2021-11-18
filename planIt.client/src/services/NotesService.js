const { AppState } = require("../AppState");
const { logger } = require("../utils/Logger");
const { api } = require("./AxiosService");


class NotesService {

  async getAll(id) {
    const res = await api.get('api/projects/' + id)
    AppState.notes = res.data
  }

  async create(id) {
    const res = await api.post('api/projects/' + id + '/notes', id)
    AppState.notes.unshift(res.data)
  }

  async getNoteId(id) {
    const res = await api.get('api/projects/' + id + '/notes')
    AppState.notes = res.data
  } 

  async remove(id){
    const res = await api.delete('api/projects/' + id + '/notes/', id)
    AppState.notes.filter(n => n.id !== id)
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