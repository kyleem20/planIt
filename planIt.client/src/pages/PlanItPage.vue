<template>
  <Navbar />
  <div class="row m-0">
    <div class="addSprintBtn col-11 mx-3" align="right">
      <button class="btn createSprintBtn border-primary">Add Sprint</button>
    </div>
  </div>
  <div class="row m-0 sprintInfoRow">
    <div class="col-1 pt-4">Side tabs</div>
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
    <div class="col-1"></div>
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
.pnText {
  font-weight: 600;
}
.addSprintBtn {
  transform: translateY(150px);
}
.createSprintBtn {
  width: 12rem;
  height: 3rem;
}
.sprintInfoRow {
  transform: translateY(-50px);
}
</style>
