<template>
  <Navbar />
  <div class="row m-0 sprintInfoRow justify-content-between">
    <div class="col-1 sideTabBtns pt-4">
      <button class="btn">
        <img src="https://i.imgur.com/395nkyu.png" />
      </button>
      <button class="btn">
        <img src="https://i.imgur.com/wN5zZ7n.png" />
      </button>
    </div>
    <div class="col-6 pt-4">
      <h1 class="pnText">PROJECT NAME</h1>
      <p>Project subtitle / brief description</p>
      <span class="m-4">
        <h5 class="sprintsText">Sprints</h5>
        <p>
          Group your tasks into sprints for over-arching collections for better
          organization.
        </p>
      </span>
    </div>
    <div class="col-4 mx-3 d-flex align-items-end justify-content-center">
      <button
        class="btn btn-primary createSprintBtn border-primary addSprintBtn mb-4"
      >
        <img src="https://i.imgur.com/nWwcfAc.png" class="addSprintPlanet" />
        Add Sprint
      </button>
    </div>
    <SprintCard />
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style lang="scss" scoped>
.sprintsText {
  line-height: 1;
  font-size: 1.5rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sideTabBtns {
  transform: translateX(-25px);
}
.pnText {
  font-weight: 500;
  font-family: "Lucida Sans", "Lucida Sans Regular", Verdana;
}
.addSprintBtn {
  // transform: translateY(150px);
}
.createSprintBtn {
  width: 12rem;
  height: 3rem;
  line-height: 1;
  font-size: 1.25rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sprintInfoRow {
  // transform: translateY(-50px);
}
.addSprintPlanet {
  height: 2rem;
}
</style>
