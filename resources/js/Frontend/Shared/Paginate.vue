<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: { Link },
  props: {
    links: Object,
  },
  computed: {
    currentPage() {
      return this.getPageNumber(this.links.next) - 1
    },
    totalPages() {
      return this.getPageNumber(this.links.last)
    },
    itemsPerPage() {
      return 20
    },
  },
  methods: {
    getPageNumber(page) {
      return page ? Number(page.substr(page.lastIndexOf('=') + 1)) : null
    },
  }
}
</script>


<template>
  <div class="catalog__paginator-wrap">
    <span class="catalog__pages">{{ itemsPerPage }} from {{ totalPages }}</span>
    <ul class="catalog__paginator">
      <li>
        <Link :href="links.prev">
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 5.36475L13.1992 5.36475"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.771 10.1271L0.749878 5.36496L5.771 0.602051"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </li>
      <li class="active"><Link :href="links.self">{{ currentPage }}</Link></li>
      <li>
        <Link :href="links.next">
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1992 5.3645L0.75 5.3645"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.17822 0.602051L13.1993 5.36417L8.17822 10.1271"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </li>
    </ul>
  </div>
</template>