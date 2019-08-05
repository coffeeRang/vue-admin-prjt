<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-app style="width:700px" justify-center align-center> 
          <v-layout>
            <v-flex>
              <v-card>
                <!-- <v-card-actions> -->
                  <v-select v-model="size" :items="items" label="Size"></v-select>
                  <v-spacer></v-spacer>
                <!-- </v-card-actions> -->
                <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
                  <v-layout wrap>
                    <v-flex
                      v-for="n in gridListCnt"
                      :key="n"
                      xs4
                    >
                      <v-card flat tile>
                        <v-img
                          :src="`https://unsplash.it/300/400?image=${Math.floor(Math.random() * 100) + 1}`"
                          height="150px"
                        ></v-img>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>


              <pagination :pages="page" :totalCnt="totalPageCnt" :visibled="visible" @setPaging="setPaging"/>
              <!-- <v-layout justify-center> 
                <v-pagination
                v-model="page"
                :length="totalPageCnt"
                :total-visible="visible"
              ></v-pagination>
              </v-layout> -->

            </v-flex>
          </v-layout>
        </v-app>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import userItem from '@/components/mainLabel/userList.js'
import Pagination from '@/components/mainLabel/Pagination'

export default {
  name: 'userList',
  props: ['pages', 'visibled', 'totalCnt', 'gridCnt'],
  data: () => ({
    visible : 10,
    totalPageCnt : 10,
    page: 1,
    size: 'sm',
    items: userItem,
    gridListCnt: 9,
  }),
  mounted() {
    if (this.pages) {
      this.page = this.pages
    }
    if (this.visibled) {
      this.visible = this.visibled
    }
    if (this.totalCnt) {
      this.totalPageCnt = this.totalCnt
    }
    if (this.gridCnt) {
      this.gridListCnt = this.gridCnt
    }
  },
  methods: {
    setPaging(pagingObj) {
      console.log('>> pagingObj : ', pagingObj);
      this.page = pagingObj.page
      this.totalPageCnt = pagingObj.totalPageCnt
      this.visible = pagingObj.visibled
      console.log(`page : ${this.page}, totalPageCnt : ${this.totalPageCnt}, visible : ${this.visible}`)
    }
  },
  computed: {
  },
  components: {
    Pagination
  }
  // props: {
  //   page: {
  //     type: Boolean,
  //     required: true
  //   }
  // }
}
</script>