<template>
  <div class="row m-0 justify-content-center">
    <div class="col-11 card border-info elevation-3" v-for="s in sprints" :key="s.id" :sprint="s">
              <h5 class="sprintsText">{{s.name}}</h5>
       
      
      <div
        class="
          card-header
          bg-transparent
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <h5
          class="sprintInfoText btn"
          data-bs-toggle="collapse"
          href="#sprintDrawer"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          SPRINT # AND NAME
        </h5>
        <p>
          [WEIGHT]
          <img src="https://i.imgur.com/P7nHMkP.png" class="weight" />
        </p>
        <button
          class="btn createTaskBtn border-primary addSprintBtn mb-4"
          data-bs-toggle="modal"
          data-bs-target="#addTask-modal"
        >
          Add Task
        </button>
        <Modal id="addTask-modal">
          <template #modal-title> Add Task </template>
          <template #modal-body>
            <AddTask />
          </template>
        </Modal>

        <p><b>0/0 Tasks Complete</b></p>
      </div>
      <div class="collapse mb-3" id="sprintDrawer">
        <div class="row">
          <div
            class="card-body d-flex justify-content-between collapse"
            data-bs-toggle="collapse"
          >
            <!-- <Task /> -->
            <div class="d-flex align-items-end justify-content-center">
              <button class="deleteSprint">
                DELETE SPRINT &nbsp;&nbsp;
                <img class="trashCan" src="https://i.imgur.com/SHjFXfJ.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { sprintsService } from '../services/SprintsService'
import { AppState } from '../AppState'


export default {
setup() {
    const router = useRouter()
    return {
      sprints: computed(()=> AppState.sprints),
      // account: computed(()=> AppState.account),
      async create() {
        try {
          await sprintsService.create()
        } catch (error) {
          logger.log(error)
          Pop.toast("Issue creating sprint", "error")
        }
      },
      async remove(id) {
        try {
          await sprintsService.remove(id)
        } catch (error) {
          logger.log(error)
          Pop.toast("issue deleting sprint", "error")
        }
      },
      // TODO link profile in profile service

    }
  }
}
</script>


<style lang="scss" scoped>
.trashCan {
  height: 25px;
}
.sprintInfoText {
  font-weight: 500;
  font-family: "Lucida Sans", "Lucida Sans Regular", Verdana;
}
.deleteSprint {
  border: none;
  line-height: 1;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.weight {
  height: 25px;
}
.createTaskBtn {
  line-height: 1;
  font-size: 1.25rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#013571, #aec6ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>