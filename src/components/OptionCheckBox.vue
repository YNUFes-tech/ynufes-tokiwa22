<script setup>
</script>

<template>
  <form class="c-form">
    <div>
      <input id="event_genre-1" type="checkbox">
      <label class="c-form-input" for="event_genre-1">展示・体験・販売</label>
    </div>
    <div>
      <input id="event_genre-2" type="checkbox">
      <label class="c-form-input" for="event_genre-2">パフォーマンス</label>
    </div>
    <div>
      <input id="event_genre-3" type="checkbox">
      <label class="c-form-input" for="event_genre-3">ゲーム・スポーツ</label>
    </div>
    <div>
      <input id="event_genre-4" type="checkbox">
      <label class="c-form-input" for="event_genre-4">デザート</label>
    </div>
    <div>
      <input id="event_genre-5" type="checkbox">
      <label class="c-form-input" for="event_genre-5">鉄板・麺類</label>
    </div>
    <div>
      <input id="event_genre-6" type="checkbox">
      <label class="c-form-input" for="event_genre-6">ファストフード</label>
    </div>
    <div>
      <input id="event_genre-7" type="checkbox">
      <label class="c-form-input" for="event_genre-7">ドリンク</label>
    </div>
    <div>
      <input id="event_genre-8" type="checkbox">
      <label class="c-form-input" for="event_genre-8">ご飯もの</label>
    </div>
  </form>
</template>
<style scoped lang="scss">
.c-form {
  font-size: 0.8em;
  display: flex;
  flex-wrap: wrap;
  gap: 1.1em 0.4em;

  input {
    transform: translateX(calc(100% + 1em));
  }

  > div {
    box-sizing: border-box;
    margin-left: -1em;

    > label {
      vertical-align: middle;
      transition: all 0.15s ease-in-out;
      border-radius: 0.2em;
      box-sizing: border-box;
      padding: 0.1em 0.1em 0.1em 2em;
    }

    > input {
      vertical-align: middle;
    }
  }

  div:nth-child(1) {
    label {
      border: solid .3em #b36305;
      color: #b36305;
    }

    input:checked ~ label {
      background: #b36305;
    }
  }


  div:nth-child(2) {
    label {
      border: solid .3em #e32017;
      color: #e32017;
    }

    input:checked ~ label {
      background: #e32017;
    }
  }


  div:nth-child(3) {
    label {
      border: solid .3em #00782a;
      color: #00782a;
    }

    input:checked ~ label {
      background: #00782a;
    }
  }


  div:nth-child(4) {
    label {
      border: solid .3em #003688;
      color: #003688;
    }

    input:checked ~ label {
      background: #003688;
    }
  }


  div:nth-child(5) {
    label {
      border: solid .3em #9b0056;
      color: #9b0056;
    }

    input:checked ~ label {
      background: #9b0056;
    }
  }


  div:nth-child(6) {
    label {
      border: solid .3em #ee7c0e;
      color: #ee7c0e;
    }

    input:checked ~ label {
      background: #ee7c0e;
    }
  }


  div:nth-child(7) {
    label {
      border: solid .3em #84b817;
      color: #84b817;
    }

    input:checked ~ label {
      background: #84b817;
    }
  }


  div:nth-child(8) {
    label {
      border: solid .3em #0098d4;
      color: #0098d4;
    }

    input:checked ~ label {
      background: #0098d4;
    }
  }


  input + label {
    background: #fffffff3;
  }

  input:checked + label {
    color: white;
  }
}


</style>