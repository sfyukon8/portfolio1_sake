var stage = document.getElementById('stage');
var chart = new CanvasJS.Chart(stage, {
  title: {
    text: "サンプルチャート" //グラフタイトル
  },
  theme: "theme4", //テーマ設定
  data: [{
    type: 'column', //グラフの種類
    dataPoints: data //表示するデータ
  }]
});
chart.render();
//https://paiza.hatenablog.com/entry/2016/06/07/JavaScript%E3%81%A7%E3%82%B0%E3%83%A9%E3%83%95%E6%8F%8F%E7%94%BB%E5%85%A5%E9%96%80%EF%BC%81%E5%85%A8%EF%BC%98%E5%80%8B%E3%81%AE%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%82%92%E3%82%B3%E3%83%BC