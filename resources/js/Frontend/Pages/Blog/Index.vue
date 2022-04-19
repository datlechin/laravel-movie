<script>
import Paginate from '../../Shared/Paginate'
import PostItem from '../../Shared/PostItem'
import Breadcrumb from '../../Shared/Breadcrumb'

export default {
  components: { Paginate, PostItem, Breadcrumb },
  props: {
    posts: Object,
  },
  data() {
    return {
      crums: [{ name: 'Trang chủ', url: '/' }, { name: 'Tin tức' }],
    }
  },
}
</script>


<template>
  <Breadcrumb :crums="crums" />
  <div class="catalog catalog--page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row row--grid">
            <PostItem
              v-for="(post, index) in posts.data"
              :post="post"
              :key="index"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Paginate :links="posts.links" />
        </div>
      </div>
    </div>
  </div>
</template>