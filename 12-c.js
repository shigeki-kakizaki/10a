function addCard(text) {
  // 要素を作る
  const card = document.createElement("div");

  // テキストを入れる
  card.textContent = text;

  // スタイル設定（将棋風）
  card.style.backgroundColor = "#f5deb3"; // 木っぽい色
  card.style.border = "2px solid #654321";
  card.style.borderRadius = "8px";
  card.style.padding = "20px";
  card.style.margin = "15px";
  card.style.width = "150px";
  card.style.textAlign = "center";
  card.style.fontWeight = "bold";
  card.style.boxShadow = "3px 3px 6px rgba(0,0,0,0.4)";

  // bodyに追加
  document.body.appendChild(card);
}

// 関数を3回以上呼び出す
addCard("☗ 王将");
addCard("☖ 飛車");
addCard("☗ 角行");
