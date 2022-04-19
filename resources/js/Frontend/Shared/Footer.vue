<script>
import { Link, usePage } from '@inertiajs/inertia-vue3'
import SocialItem from './SocialItem'
import { computed } from 'vue'

export default {
  components: { Link, SocialItem },
  computed: {
    app() {
      return this.$page.props.app
    },
  },
}
</script>


<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div
          class="
            col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3
            order-4 order-md-1 order-lg-4 order-xl-1
          "
        >
          <div class="footer__flixtv">
            <img :src="`${app.url}/frontend/img/logo.svg`" :alt="app.name" />
          </div>
          <p class="footer__tagline">
            Movies & TV Shows, Online cinema,<br />
            Movie database HTML Template.
          </p>
          <div class="footer__social">
            <SocialItem />
          </div>
        </div>

        <div
          class="
            col-6 col-md-4 col-lg-3 col-xl-2
            order-1 order-md-2 order-lg-1 order-xl-2
            offset-md-2 offset-lg-0 offset-xl-1
          "
        >
          <h6 class="footer__title">FlixTV</h6>
          <div class="footer__nav">
            <Link href="about.html">About us</Link>
            <Link href="/user/profile">Thông tin cá nhân</Link>
            <Link href="pricing.html">Pricing plans</Link>
            <Link href="/contact">Liên hệ</Link>
          </div>
        </div>

        <div
          class="
            col-12 col-md-8 col-lg-6 col-xl-4
            order-3 order-lg-2 order-md-3 order-xl-3
          "
        >
          <div class="row">
            <div class="col-12">
              <h6 class="footer__title">Browse</h6>
            </div>

            <div class="col-6">
              <div class="footer__nav">
                <Link href="live.html">Live TV</Link>
                <Link href="live.html">Live News</Link>
                <Link href="live.html">Live Sports</Link>
                <Link href="live.html">Streaming Library</Link>
              </div>
            </div>

            <div class="col-6">
              <div class="footer__nav">
                <Link href="category.html">TV Shows</Link>
                <Link href="category.html">Movies</Link>
                <Link href="category.html">Kids</Link>
                <Link href="category.html">Collections</Link>
              </div>
            </div>
          </div>
        </div>

        <div
          class="
            col-6 col-md-4 col-lg-3 col-xl-2
            order-2 order-lg-3 order-md-4 order-xl-4
          "
        >
          <h6 class="footer__title">Help</h6>
          <div class="footer__nav">
            <Link href="privacy.html">Account & Billing</Link>
            <Link href="privacy.html">Plans & Pricing</Link>
            <Link href="privacy.html">Supported devices</Link>
            <Link href="privacy.html">Accessibility</Link>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="footer__content">
            <div class="footer__links">
              <Link href="privacy.html">Privacy policy</Link>
              <Link href="privacy.html">Terms and conditions</Link>
            </div>
            <small class="footer__copyright"
              >© FlixTV.template, 2021. Phát triển bởi
              <a href="https://ngoquocdat.com" target="_blank">Ngô Quốc Đạt</a
              >.</small
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>