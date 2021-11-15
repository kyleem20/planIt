<template>
  <div class="row">
    <center>
      <div class="homeCard col-10">
        <div class="card p-3 bg-white rounded elevation-3 mt-5">
          <div class="card-body">
            <div class="row justify-content-between">
              <div class="col-5" align="left">
                <p class="projectsText">Projects</p>
                <p>A list of all the projects for [USER NAME]</p>
              </div>
              <div class="col-5 mx-3" align="right">
                <button class="btn createProjectBtn border-primary">
                  Create Project
                </button>
              </div>
            </div>
          </div>
          <div class="row px-3">
            <div class="col-4">
              <p class="subHeadText text-info">NAME</p>
            </div>
            <div class="col-4">
              <p class="subHeadText text-info">MEMBERS</p>
            </div>
            <div class="col-4">
              <p class="subHeadText text-info">STARTED</p>
            </div>
            <hr />
          </div>
          <div class="row PX-3">
            <div class="col-4">
              <p class="subHeadText">PROJECT NAME</p>
            </div>
            <div class="col-4">
              <p class="subHeadText">PEOPLE IN THE PROJECT</p>
            </div>
            <div class="col-4">
              <p class="subHeadText">DATE</p>
            </div>
          </div>
        </div>
      </div>
    </center>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.subHeadText {
  font: #844586;
  line-height: 1;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
}
.projectsText {
  line-height: 1;
  font-size: 1.5rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.createProjectBtn {
  line-height: 1;
  font-size: 1.25rem;
  font-family: Impact, "Arial Narrow Bold", sans-serif;
  background: -webkit-linear-gradient(#f7b9ff, #844586);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>