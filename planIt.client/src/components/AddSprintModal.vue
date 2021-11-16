<template>
  <Modal id="post-modal">
    <template #modal-title>
      <h4>Make A New Post</h4>
    </template>
    <template #modal-body>
      <form @submit.prevent="handleSubmit">
        <div class="justify-content-around">
          <div>
            <label for="body" class="form-label"> Body</label>
            <textarea
              type="text"
              class="form-control"
              name="body"
              id="body"
              placeholder="Body"
              min="10"
              max="5000"
              required
              v-model="post.body"
            >
            </textarea>
          </div>
          <div>
            <label for="image" class="form-label"> Image URL</label>
            <input
              type="text"
              class="form-control"
              name="image"
              id="image"
              placeholder="Image"
              required
              v-model="post.imgUrl"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary text-light"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" class="btn btn-success">Submit</button>
        </div>
      </form>
    </template>
  </Modal>
</template>