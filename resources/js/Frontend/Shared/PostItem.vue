<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: { Link },
  props: {
    post: Object,
  },
}
</script>

<template>
  <div class="col-12 col-sm-6 col-lg-4">
    <div class="post">
      <Link :href="`/blog/${post.slug}`" class="post__img">
        <img :src="post.image" :alt="post.title" />
      </Link>
      <div class="post__content">
        <Link href="#" class="post__category">{{ post.category.name }}</Link>
        <h3 class="post__title">
          <Link :href="`/blog/${post.slug}`">
            {{ post.title }}
          </Link>
        </h3>
        <div class="post__meta">
          <span class="post__meta--item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"
              />
            </svg>
            {{ new Date(post.created_at).toLocaleDateString('vi-VN') }}
          </span>
          <span class="post__meta--item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"
              ></path>
            </svg>
            18
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/sass/variables';

.post {
  position: relative;
  margin-top: 20px;
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  background-color: #222227;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: calc(100% - 20px);

  .post__img {
    display: block;
    width: 100%;
    position: relative;
    background-color: #000;

    img {
      width: 100%;
      max-height: 270px;
      position: relative;
      z-index: 1;
    }
  }

  .post__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 20px;
    background-color: #222227;
    border-radius: 0 0 12px 12px;
    height: 100%;
    position: relative;
  }

  .post__category {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 28px;
    min-width: 70px;
    width: auto;
    color: #fff;
    font-size: 13px;
    background-color: $primary-color;
    border-radius: 8px;
    padding: 0 15px;
    margin-bottom: 20px;
    position: absolute;
    bottom: 100%;
    left: 20px;
    z-index: 2;

    &:hover {
      color: #fff;
      background-color: $primary-color;
    }
  }

  .post__title {
    display: block;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: #fff;
    margin-bottom: 20px;
    overflow: hidden;
    width: 100%;

    a {
      color: #fff;
      display: block;
      &:hover {
        color: $primary-color;
      }
    }
  }

  .post__meta {
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20px;

    svg {
      fill: #fff;
      width: 16px;
      height: auto;
      margin-right: 5px;
    }

    .post__meta--item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-size: 13px;
      color: #c0c0c0;
    }
  }
}
</style>