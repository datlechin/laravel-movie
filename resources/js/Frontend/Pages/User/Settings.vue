<script>
import EditProfile from '../../Shared/EditProfile'
import ChangePassword from '../../Shared/ChangePassword'
import UserLayout from '../../Shared/UserLayout'
import { Head } from '@inertiajs/inertia-vue3'

export default {
  components: {
    EditProfile,
    ChangePassword,
    UserLayout,
    Head,
  },
}
</script>

<template>
  <UserLayout>
    <Head title="Cài đặt" />
    <div class="tab-pane fade show active">
      <div class="row">
        <div class="col-12">
          <div class="sign__wrap">
            <div class="row">
              <div class="col-12 col-lg-6">
                <EditProfile />
              </div>

              <div class="col-12 col-lg-6">
                <ChangePassword />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>