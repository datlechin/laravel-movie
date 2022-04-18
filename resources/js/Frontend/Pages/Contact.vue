<script>
import Breadcrumb from '../Shared/Breadcrumb'
import { useForm, Head } from '@inertiajs/inertia-vue3'
import SocialItem from '../Shared/SocialItem'

export default {
  components: {
    Breadcrumb,
    SocialItem,
    Head,
  },
  setup() {
    const form = useForm({
      name: null,
      email: null,
      subject: null,
      message: null,
    })

    return { form }
  },
  data() {
    return {
      crums: [
        {
          name: 'Trang chủ',
          url: '/',
        },
        {
          name: 'Liên hệ',
        },
      ],
    }
  },
  methods: {
    submit() {
      this.form.post('/contact', {
        preserveScroll: true,
        onSuccess: () => {
          this.form.reset()
          this.$toast.success(this.$page.props.flash.success)
        },
      })
    },
  },
}
</script>

<template>
  <Head title="Liên hệ" />
  <Breadcrumb :crums="crums" />
  <section class="section section--pb0">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7 col-xl-8">
          <form
            class="sign__form sign__form--contacts"
            @submit.prevent="submit"
          >
            <div class="row">
              <div class="col-12 col-xl-6">
                <div class="sign__group">
                  <input
                    type="text"
                    v-model="form.name"
                    class="sign__input"
                    placeholder="Họ tên"
                  />
                  <span class="sign__error" v-if="form.errors.name">{{
                    form.errors.name
                  }}</span>
                </div>
              </div>

              <div class="col-12 col-xl-6">
                <div class="sign__group">
                  <input
                    type="text"
                    v-model="form.email"
                    class="sign__input"
                    placeholder="Email"
                  />
                  <span class="sign__error" v-if="form.errors.name">{{
                    form.errors.name
                  }}</span>
                </div>
              </div>

              <div class="col-12">
                <div class="sign__group">
                  <input
                    type="text"
                    v-model="form.subject"
                    class="sign__input"
                    placeholder="Tiêu đề"
                  />
                  <span class="sign__error" v-if="form.errors.subject">{{
                    form.errors.subject
                  }}</span>
                </div>
              </div>

              <div class="col-12">
                <div class="sign__group">
                  <textarea
                    v-model="form.message"
                    class="sign__textarea"
                    placeholder="Nhập tin nhắn của bạn"
                  ></textarea>
                  <span class="sign__error" v-if="form.errors.message">{{
                    form.errors.message
                  }}</span>
                </div>
              </div>

              <div class="col-12 col-xl-3">
                <button type="submit" class="sign__btn">Gửi</button>
              </div>
            </div>
          </form>
        </div>

        <div class="col-12 col-lg-5 col-xl-4">
          <h2 class="section__title section__title--sidebar">Thông tin</h2>
          <p class="section__text">
            It is a long fact that a reader will be distracted by the readable
            content of a page when looking at its layout
          </p>
          <ul class="contacts__list">
            <li><a href="tel:+84372124043">+84 372 140 43</a></li>
            <li>
              <a href="mailto:datlechin@gmail.com">datlechin@gmail.com</a>
            </li>
          </ul>
          <div class="contacts__social">
            <SocialItem />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
