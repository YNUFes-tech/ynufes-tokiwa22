<script setup>
import UnderlinedSectionTitle from "@/components/utils/UnderlinedSectionTitle"

fetch('https://infinite-bayou-57338.herokuapp.com/result.json', {
  mode: 'cors'
})
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const table = document.createElement('table');
      const table1 = document.createElement('table');
      const table2 = document.createElement('table');
      const table3 = document.createElement('table');
      const title = ['順位', '企画コンNo', '企画名'];
      const label = ['rank', 'id', 'name'];

      for (let i = 0; i < 4; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
          if (i === 0) {
            let th = document.createElement('th');
            th.textContent = title[j];
            tr.appendChild(th);
          } else {
            let td = document.createElement('td');
            td.textContent = json[i - 1][label[j]];
            tr.appendChild(td);
          }
        }
        table.appendChild(tr);
      }
      document.getElementById('maintable').appendChild(table);

      for (let i = 0; i < 4; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
          if (i === 0) {
            let th = document.createElement('th');
            th.textContent = title[j];
            tr.appendChild(th);
          } else {
            let td = document.createElement('td');
            td.textContent = json[i + 2][label[j]];
            tr.appendChild(td);
          }
        }
        table1.appendChild(tr);
      }
      document.getElementById('table1').appendChild(table1);

      for (let i = 0; i < 4; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
          if (i === 0) {
            let th = document.createElement('th');
            th.textContent = title[j];
            tr.appendChild(th);
          } else {
            let td = document.createElement('td');
            td.textContent = json[i + 5][label[j]];
            tr.appendChild(td);
          }
        }
        table2.appendChild(tr);
      }
      document.getElementById('table2').appendChild(table2);

      for (let i = 0; i < 4; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
          if (i === 0) {
            let th = document.createElement('th');
            th.textContent = title[j];
            tr.appendChild(th);
          } else {
            let td = document.createElement('td');
            td.textContent = json[i + 8][label[j]];
            tr.appendChild(td);
          }
        }
        table3.appendChild(tr);
      }
      document.getElementById('table3').appendChild(table3);
    });
</script>
<template>
  <div class="content fade-up" @click="null">
    <h1>
      <img id="head-pic" src="/data/icons/sp/contest-clipped.webp" alt="22常盤 企画総選挙">
    </h1>
    <div class="page-content">
      <p>
        ご来場の皆様から投票していただき、常盤祭で最もすばらしい企画を決めます。<br>
        本部企画を除く企画が飲食部門、展示・物販部門、パフォーマンス部門の3つの部門に分類されており、各部門1〜3位と全企画の中で得票数が1位となった企画には、表彰及び賞品の授与を行います。<br>
        投票所で投票の際に、アンケートにもご回答頂きますと、全ての方に景品をお配りしております（なくなり次第終了）。豪華景品もご用意しておりますのでぜひ図書館前の投票所へ足をお運びください。
      </p>

      <UnderlinedSectionTitle>
        開催日時
      </UnderlinedSectionTitle>
      <p>
        10月28日(金)14:00〜15:30<br>
        10月29日(土) 9:00〜16:30<br>
        10月30日(日) 9:00～12:00<br>
        受付終了は企画終了10分前まで<br>
        場所: 図書館前
      </p>
      <div class="online">
        <UnderlinedSectionTitle>
          オンライン投票
        </UnderlinedSectionTitle>

        <p>22常盤 企画総選挙ではオンライン投票も行っております。投票所での投票とは別に1人1回1企画投票できます。<br>
          オンライン投票の完了画面を投票所での投票時にお見せいただくと、もう一回抽選機を回すことができます。<br>
          各企画の企画詳細ページか以下の一覧表からご投票ください。<br>
          投票にはGoogleフォームを使用しており、Googleアカウントが必要になります。詳しくは投票一覧表をご覧ください。</p>
        <div class="serch"><router-link to="/events">企画一覧から探す</router-link></div>
        <div class="list"><a href="/22tokiwa_contest_list.pdf">投票一覧表(PDF)</a></div>
      </div>
      <div class="result">
        <UnderlinedSectionTitle>現在の順位</UnderlinedSectionTitle>
        <p>今回の常盤祭ではリアルタイムで結果を公開しています。10/29の企画終了まで更新します。最終日の結果は最終発表（＠Grand☆Finale）をお楽しみに。</p>
        <h3>総合得票数</h3>
        <div id="maintable"></div>
        <h3>飲食部門</h3>
        <div id="table1"></div>
        <h3>展示・物販部門</h3>
        <div id="table2"></div>
        <h3>パフォーマンス部門</h3>
        <div id="table3"></div>
      </div>
    </div>
    <div class="back-button-wrapper">
      <router-link class="back-button" to="/">トップに戻る</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
#head-pic{
  width: min(90%, 400px);

}

.content {
  box-sizing: border-box;
  width: min(90%, 60rem);
  background: white;
  color: #2c3e50;
  border-radius: 1em;
  overflow: hidden;

  span {
     display: inline-block;
  }

  h1 {
    padding: 1em 0;
    margin: 0;
    width: 100%;
    font-size: 2em;
    background: #25254d;
    color: white;

    b {
      color: white;
      font-size: 1.5em;
      margin: 0 0.1em;
      text-decoration: none;
    }
  }

  .page-content {
    margin: 1em;
    background-image: url("@/assets/logo-seisai-trans08.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 1em;
    font-weight: bold;

    ul {
      text-align: start;
      margin: 0 auto;
      line-height: 1.5;

      li {
        margin: 0.5em 0;
      }
    }

    p,
    ul {
      font-size: 1em;
    }
  }

  .back-button-wrapper {
    margin: 80px auto;
    position: relative;
    width: fit-content;

    .back-button {
      text-decoration: none;
      padding: 0.8em 1.5em 0.8em 2.5em;
      border-radius: 2em;
      border: solid 0.1em #25254d;
      width: fit-content;
      font-size: 1em;
      color: #25254d;
      font-weight: bold;
    }
    .back-button::before {
      content: "";
      background: url("@/assets/goto_top_icon.webp") no-repeat;
      background-size: contain;
      position: absolute;
      top: 55%;
      left: 12%;
      transform: translate(0, -50%);
      vertical-align: middle;
      padding-right: 5px;
      width: 16px;
      height: 16px;
    }
  }
}
</style>
