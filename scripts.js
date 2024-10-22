const root = document.getElementById("root");

const getAPI = document.createElement("button");

getAPI.textContent = "voca데이터 가져오기!";

getAPI.addEventListener('click', () => {
  // fetch로 JSON 파일을 불러옴
  fetch('./vocabulary/japaneseword.json')
    .then(response => response.json())  // 응답을 JSON으로 변환
    .then(jsonData => {
      const word = document.createElement("div");
      const voca = jsonData.N5[0];  // N5 레벨의 첫 번째 단어를 가져옴
      word.textContent = `한자: ${voca.kanji}, 요음: ${voca.hiragana}, 영어발음: ${voca.english}, 한국어발음: ${voca.korean}, 의미: ${voca.mean}`;
      root.appendChild(word);
    })
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });
});

root.appendChild(getAPI);
