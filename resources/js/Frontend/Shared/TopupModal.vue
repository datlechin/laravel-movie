<script>
import { useForm } from '@inertiajs/inertia-vue3'

export default {
  setup() {
    const form = useForm({
      type: null,
      telco: 'VIETTEL',
      amount: 10000,
      serial: null,
      pin: null,
    })
    const submit = () => {
      form.post('/deposit', {
        onSuccess: () => form.reset(),
      })
    }

    return { form, submit }
  },
}
</script>

<template>
  <form
    id="modal-topup"
    class="zoom-anim-dialog mfp-hide modal modal--form"
    @submit.prevent="submit"
  >
    <button class="modal__close" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
        />
      </svg>
    </button>
    <h4 class="sign__title">Nạp tiền</h4>
    <div class="sign__group sign__group--row">
      <label class="sign__label">Số dư của bạn:</label>
      <span class="sign__value">$90.99</span>
    </div>
    <div class="sign__group sign__group--row">
      <label class="sign__label">Phương thức nạp:</label>
      <ul class="sign__radio">
        <li>
          <input id="card" type="radio" v-model="form.type" value="card" />
          <label for="card">Thẻ cào</label>
        </li>
        <li>
          <input id="momo" type="radio" v-model="form.type" value="ewallet" />
          <label for="momo">Ví điện tử</label>
        </li>
        <li>
          <input id="bank" type="radio" v-model="form.type" value="bank" />
          <label for="bank">Ngân hàng</label>
        </li>
      </ul>
    </div>
    <div v-if="form.type === 'card'">
      <div class="sign__group sign__group--row">
        <label class="sign__label" for="telco">Loại thẻ:</label>
        <select class="sign__select" id="telco" v-model="form.telco">
          <option value="VIETTEL">Viettel</option>
          <option value="MOBIFONE">Mobifone</option>
          <option value="VINAPHONE">Vinaphone</option>
        </select>
      </div>
      <div class="sign__group sign__group--row">
        <label class="sign__label" for="amount">Mệnh giá:</label>
        <select class="sign__select" id="amount" v-model="form.amount">
          <option value="10000">10.000</option>
          <option value="20000">20.000</option>
          <option value="50000">50.000</option>
          <option value="100000">100.000</option>
          <option value="200000">200.000</option>
          <option value="500000">500.000</option>
          <option value="1000000">1.000.000</option>
        </select>
      </div>
      <div class="sign__group sign__group--row">
        <label class="sign__label" for="serial">Số serial:</label>
        <input
          class="sign__input"
          id="serial"
          v-model="form.serial"
          type="text"
          placeholder="Nhập số serial"
        />
      </div>
      <div class="sign__group sign__group--row">
        <label class="sign__label" for="pin">Mã thẻ:</label>
        <input
          class="sign__input"
          id="pin"
          v-model="form.pin"
          type="text"
          placeholder="Nhập mã thẻ"
        />
      </div>
    </div>
    <button class="sign__btn" type="submit" :disabled="form.type !== 'card'">
      Nạp tiền
    </button>
  </form>
</template>