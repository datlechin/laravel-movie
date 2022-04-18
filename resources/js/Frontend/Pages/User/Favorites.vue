<script>
import UserLayout from '../../Shared/UserLayout'
import FavoriteItem from '../../Shared/FavoriteItem'
import Paginate from '../../Shared/Paginate'
import { Head } from '@inertiajs/inertia-vue3'

export default {
  components: {
    UserLayout,
    FavoriteItem,
    Paginate,
    Head,
  },
}
</script>


<template>
  <UserLayout>
    <Head title="Danh sách yêu thích" />
    <div class="tab-pane fade show active">
      <div class="row row--grid">
        <FavoriteItem />
      </div>
      <div class="row">
        <div class="col-12">
          <Paginate :links="[]" />
        </div>
      </div>
    </div>
  </UserLayout>
</template>