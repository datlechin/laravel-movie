<script>
import { Link, usePage } from '@inertiajs/inertia-vue3'
import Breadcrumb from './Breadcrumb'
import { computed } from 'vue'
import ProfileBar from './ProfileBar'

export default {
  components: {
    Link,
    Breadcrumb,
    ProfileBar,
  },
  data() {
    return {
      crums: [
        {
          name: 'Trang chủ',
          url: '/',
        },
        {
          name: 'Thông tin cá nhân',
        },
      ],
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
          <ProfileBar />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="tab-content">
        <slot />
      </div>
    </div>
  </div>
</template>