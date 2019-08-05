<template>
  <v-layout justify-center> 
    <v-pagination
    v-model="page"
    :length="totalPageCnt"
    :total-visible="visible"
    v-on:click.native="testClick()"
  ></v-pagination>
  </v-layout>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pages', 'totalCnt', 'visibled'],
  data: () => ({
    page: 1,
    totalPageCnt : 20,
    visible : 10,
  }),
  mounted() {
    if (this.pages) {
      this.page = this.pages
    }
    // if (this.totalCnt) {
    //   this.totalPageCnt = this.totalCnt
    // }
    if (this.visibled) {
      this.visible = this.visibled
    }
  },
  methods: {
    testClick () {
      // console.log('>> Pagination - page : ', this.page, ', totalPageCnt : ', this.totalPageCnt, ', visibled : ', this.visibled);
      const val1 = this.page;
      const val2 = this.totalPageCnt;
      const val3 = this.visibled;
      const pagingObj = {
        'page': this.page,
        'totalPageCnt': this.totalPageCnt,
        'visibled': this.visibled
      }
      this.$emit('setPaging', pagingObj)
      // this.$emit('setPaging', val1, val2, val3)

    }
  }
  

}
</script>

<style>

</style>
