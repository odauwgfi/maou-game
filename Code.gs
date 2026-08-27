/**
 * Webアプリへのアクセス時にHTMLページをレンダリングして返します
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('我ぞ魔王！〜勇者イジメと世界滅亡の狂想曲〜')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}
