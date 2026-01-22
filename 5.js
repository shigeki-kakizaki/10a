let count = 1; // カウント用変数、後で使う

function addCard() {
  // カードリスト要素を取得する
  const cardList = document.getElementById("cardList");

  // 新しいdiv要素（カード）を作成
  const card = document.createElement("div");
  card.className = "card";

  // 内容を書く
  card.innerHTML =`カード${count}枚目です`;

  // カードをリストに追加
  cardList.appendChild(card);

  count++; // 次のカード用にカウントを増やす
}
function addCard() {
  // ここに追加
  // inputタグから要素を取得して、さらに値を変数に代入する
  const name = document.getElementById("nameInput").value;
  const age = document.getElementById("ageInput").value;

  if (name === "" || age === "") {
    alert("名前と年齢を入力してください");
    return;
  }
  // ここまで

  // カードリスト要素を取得する
  const cardList = document.getElementById("cardList");

 // 新しいdiv要素（カード）を作成
  const card = document.createElement("div");
  card.className = "card";

  // 内容をテンプレートリテラルで書く
  card.innerHTML = "カード追加";
// カードのHTML内容
  card.innerHTML = `
    <h3>${name} さん</h3>
    <p>年齢：${age} 歳</p>
    <button onclick="deleteCard(this)">削除</button>
  `;

  // カードをリストに追加
  cardList.appendChild(card);

  // フォームをクリア
  document.getElementById("nameInput").value = "";
  document.getElementById("ageInput").value = "";
}
function deleteCard(button) {
  const card = button.parentElement;
  card.remove();  // カードごと削除
}
