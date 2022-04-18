<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: { Link },
  data() {
    return {
      menu: [
        {
          title: 'Thông tin cá nhân',
          url: '/user/profile',
        },
        {
          title: 'Danh sách yêu thích',
          url: '/user/favorites',
        },
        {
          title: 'Cài đặt',
          url: '/user/settings',
        },
      ],
    }
  },
  computed: {
    app() {
      return this.$page.props.app
    },
    user() {
      return this.$page.props.auth.user
    },
  },
}
</script>


<template>
  <div class="profile">
    <div class="profile__user">
      <div class="profile__avatar">
        <img :src="`${app.url}/frontend/img/avatar.svg`" :alt="user.name" />
      </div>
      <div class="profile__meta">
        <h3>{{ user.name }}</h3>
        <span>FlixTV ID: {{ user.id }}</span>
      </div>
    </div>
    <ul class="nav nav-tabs profile__tabs">
      <li class="nav-item" v-for="(item, index) in menu" :key="index">
        <Link
          :href="item.url"
          class="nav-link"
          :class="{ active: $page.url === item.url }"
          v-text="item.title"
        />
      </li>
    </ul>
    <Link href="/logout" class="profile__logout">
      <span>Đăng xuất</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"
        ></path>
      </svg>
    </Link>
  </div>
</template>