import { createStore } from 'vuex'

export default createStore({
  state: {
    eventData: {
      //それぞれのデータ項目についてはREADMEを参照
      event_title: '癒しの植物販売所',
      event_summary: '植物の苗の販売',
      event_description: 'サークルオブライフが保有する農園で学生が種から育てた苗を販売いたします。一般に流通するような規格化された苗と違って、この場にしかない一期一会の苗に出会うかもしれません。小さいものは300円から大きなものは数千円までの苗を販売しております。先着で販売いたしますので売り切れはご容赦ください（各日に販売枠を設定しております）。',
      event_place_text: '都市199',
      event_place_id: 'toshi',
      event_genre_id: 1,
      // icon_filename: '/icon/noimage.png',
      org_name: 'サークルオブライフ',
      org_description: '植物を種や苗から育てたり、植林活動を行ったりしています。活動は土日がメインです。',
      sns_twitter: 'ynu_fes',
      sns_facebook: 'ynufes',
      sns_instagram: 'ynu_fes',
      sns_website: 'https://ynu-fes.yokohama',
    },
    imgData: {
      // 画像のデータを格納
      src: '',
      // 画像の種類
      type: '',
      // 画像の縦横の大きさ
      width: 0,
      height: 0
    }
  },
  getters: {
  },
  mutations: {
    update(state, newData) {
      state.eventData = newData
    }
  },
  actions: {
  },
  modules: {
  }
})
