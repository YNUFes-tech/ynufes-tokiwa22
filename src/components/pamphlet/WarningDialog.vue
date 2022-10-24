<template>
  <teleport to="body">
    <div class="dialog" id="warning-dialog" v-show="isVisible" @click="close"></div>
    <div class="dialog-content" v-show="isVisible">
      <h2>パンフレット(オリジナル版)をダウンロードしますか?</h2>
      <div>
        ※オリジナル版は大容量(122MB)です。パンフレットのダウンロードや利用に伴う通信費(パケット代)はご利用者様のご負担となります。
        モバイルデータ通信をご利用の際は軽量版のご利用を推奨します。
      </div>
      <div class="selection-button-row">
        <div @click="close">戻る</div>
        <a class="download-button" href="/data/pamphlet/22tokiwa-pamphlet-original.pdf" target="_blank">ダウンロード(122.23MB)</a>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    isVisible: {
      required: true,
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {}
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang='sass'>
.dialog
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background-color: rgba(0, 0, 0, .5)
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.dialog-content
  text-align: center
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  background-color: rgba(0, 0, 0, .5)
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  background-color: white
  color: #03061A
  width: min(80%, 600px)
  height: auto
  border-radius: 20px
  padding: 20px

.selection-button-row
  display: flex
  gap: .5em
  padding-top: 1em
  > *
    padding: 1em
    border-radius: 2em
    border: #03061A 1px solid
    cursor: pointer
  .download-button
    background: #171749
    color: white
    text-decoration: none

</style>