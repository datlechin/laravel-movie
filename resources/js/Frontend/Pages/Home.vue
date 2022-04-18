<script>
import Paginate from '../Shared/Paginate'
import VideoItem from '../Shared/VideoItem'
import { pickBy } from 'lodash'
import { Head } from '@inertiajs/inertia-vue3'

export default {
  components: {
    Paginate,
    VideoItem,
    Head,
  },
  props: {
    movies: Object,
    genres: Object,
    filters: Object,
  },
  data() {
    return {
      form: {
        genre: this.filters.genre || '',
        region: this.filters.region || '',
        year: this.filters.year || '',
        grade: this.filters.grade || 'popularity',
      },
    }
  },
  watch: {
    form: {
      handler() {
        this.$inertia.get('/', pickBy(this.form), {
          preserveState: true,
          preserveScroll: true,
        })
      },
      deep: true,
    },
  },
}
</script>

<template>
  <Head title="Trang chủ" />
  <div class="catalog">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="catalog__nav">
            <div class="catalog__select-wrap">
              <select class="catalog__select" v-model="form.genre">
                <option value="">Thể loại</option>
                <option v-for="(genre, i) in genres" :value="i" :key="i">
                  {{ genre }}
                </option>
              </select>
              <select class="catalog__select" v-model="form.region">
                <option value="">Quốc gia</option>
                <option value="vi">Việt Nam</option>
                <option value="en">Mỹ</option>
                <option value="ko">Hàn Quốc</option>
                <option value="ja">Nhật Bản</option>
                <option value="cn">Trung Quốc</option>
                <option value="ru">Nga</option>
                <option value="fr">Pháp</option>
                <option value="es">Tây Ban Nha</option>
                <option value="it">Italia</option>
                <option value="pt">Bồ Đào Nha</option>
                <option value="de">Đức</option>
                <option value="tr">Thổ Nhĩ Kỳ</option>
                <option value="pl">Ba Lan</option>
                <option value="ar">Ả Rập</option>
                <option value="th">Thái Lan</option>
                <option value="id">Nhật Bản</option>
              </select>
              <select class="catalog__select" v-model="form.year">
                <option value="">Năm phát hành</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
              </select>
            </div>
            <div class="slider-radio">
              <input
                type="radio"
                v-model="form.grade"
                id="vote_count"
                value="vote_count"
              />
              <label for="vote_count">Nổi bật</label>
              <input
                type="radio"
                v-model="form.grade"
                id="popularity"
                value="popularity"
              />
              <label for="popularity">Phổ biến</label>
              <input
                type="radio"
                v-model="form.grade"
                id="release_date"
                value="release_date"
              />
              <label for="release_date">Mới nhất</label>
            </div>
          </div>

          <div class="row row--grid">
            <VideoItem
              v-for="(movie, index) in movies.data"
              :movie="movie"
              :key="index"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Paginate :links="movies.links" />
        </div>
      </div>
    </div>
  </div>
</template>