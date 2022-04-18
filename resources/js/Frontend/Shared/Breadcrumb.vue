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