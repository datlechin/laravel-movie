<script>
import ReviewsList from '../../Shared/ReviewsList'
import MoviesRecommeded from '../../Shared/MoviesRecommeded'
import UserLayout from '../../Shared/UserLayout'
import { Head } from '@inertiajs/inertia-vue3'

export default {
  components: {
    ReviewsList,
    MoviesRecommeded,
    UserLayout,
    Head,
  },
}
</script>

<template>
  <UserLayout>
    <Head title="Thông tin cá nhân" />
    <div class="tab-pane fade show active">
      <div class="row row--grid">
        <div class="col-12 col-sm-6 col-xl-3">
          <div class="stats">
            <span
              >Số dư
              <a href="#modal-topup" class="open-modal">Nạp tiền</a></span
            >
            <p><b>$90.99</b></p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M6,11a1,1,0,1,0,1,1A1,1,0,0,0,6,11Zm12,0a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm2-6H4A3,3,0,0,0,1,8v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8A1,1,0,0,1,4,7H20a1,1,0,0,1,1,1ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,13Z"
              />
            </svg>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-xl-3">
          <div class="stats">
            <span>Premium plan</span>
            <p>$34.99<sub>/month</sub></p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M9,10a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V11A1,1,0,0,0,9,10Zm12,1a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H3A1,1,0,0,0,2,6v4a1,1,0,0,0,1,1,1,1,0,0,1,0,2,1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1,1,1,0,0,1,0-2ZM20,9.18a3,3,0,0,0,0,5.64V17H10a1,1,0,0,0-2,0H4V14.82A3,3,0,0,0,4,9.18V7H8a1,1,0,0,0,2,0H20Z"
              />
            </svg>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-xl-3">
          <div class="stats">
            <span>Your comments</span>
            <p><a href="#">2 573</a></p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z"
              ></path>
            </svg>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-xl-3">
          <div class="stats">
            <span>Your reviews</span>
            <p><a href="#">1 021</a></p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"
              />
            </svg>
          </div>
        </div>
        <MoviesRecommeded />
        <ReviewsList />
      </div>
    </div>
  </UserLayout>
</template>