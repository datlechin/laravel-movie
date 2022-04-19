<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: { Link },
  props: {
    crums: Array,
  },
  methods: {
    isLastCrumb(index) {
      return index === this.crums.length - 1
    },
    lastCrumbName() {
      return this.crums[this.crums.length - 1].name
    },
  },
}
</script>

<template>
  <section class="section section--head">
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-6">
          <h1 class="section__title section__title--head">
            {{ lastCrumbName() }}
          </h1>
        </div>

        <div class="col-12 col-xl-6">
          <ul class="breadcrumb">
            <li
              class="breadcrumb__item"
              v-for="(crum, index) in crums"
              :class="{ 'breadcrumb__item--active': isLastCrumb(index) }"
              :key="index"
            >
              <Link
                :href="crum.url"
                v-text="crum.name"
                v-if="!isLastCrumb(index)"
              />
              <span v-text="crum.name" v-if="isLastCrumb(index)" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/sass/variables';

.breadcrumb {
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0;
  height: calc(100% - 10px);

  @media (min-width: 1200px) {
    display: flex;
  }

  .breadcrumb__item {
    font-size: 14px;
    line-height: 22px;
    color: #e0e0e0;
    transition: 0.5s;
    position: relative;
    margin-right: 34px;

    &:before {
      content: '';
      position: absolute;
      left: 100%;
      top: 0;
      height: 22px;
      width: 34px;
      background: url('../frontend/img/breadcrumb.svg') no-repeat center/12px
        auto;
    }

    &:hover {
      color: #e0e0e0;
    }

    &:last-child {
      margin-right: 0;
    }

    &:last-child:before {
      display: none;
    }
  }
  .breadcrumb__item--active {
    cursor: default;
    margin-right: 0;
    &:before {
      display: none;
    }
    &:hover {
      color: #e0e0e0;
    }
  }
  a {
    color: #fff;
    &:hover {
      color: $primary-color;
    }
  }
}
</style>