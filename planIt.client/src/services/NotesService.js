const { AppState } = require("../AppState");
const { logger } = require("../utils/Logger");
const { api } = require("./AxiosService");


class NotesService {
  async create(data)
{
  const res = await api.note('api/notes', data)
  AppState.notes = res.data.notes 
}

async edit(notes){
  const res = await api.put('api/notes', + notes.id, notes)
  logger.log(res.data)
  const updatedNote = new Notes(res.data)
  AppState.activeNote = updatedNote
  const index = AppState.notes.findIndex(n => n.id === updatedNote.id)
  if (index === -1){
  AppState.notes.push(updatedNote)
  return
  }
  AppState.project.splice(index, 1, updatedNote)
}}

export const notesService = new NotesService()