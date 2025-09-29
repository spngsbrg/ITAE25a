function init() {
  let mainContentArea = document.getElementById("main-content-area");

  fetchData("Data/data.json").then((data) => {
    console.log(data);

    addArticlesToPage(data, mainContentArea);
  });
}

function addArticlesToPage(articles, parrentElement) {
  articles.forEach((article) => {
    let articleToInsert =
      "<div id='" +
      article.id +
      "' class='content'>" +
      "<h1>" +
      article.heading +
      "</h1>" +
      "<p class='inner-content'>" +
      article.content +
      "</p>" +
      "<p class='author'>" +
      article.author +
      "</p>" +
      "<p class='contact'>" +
      article.email +
      "</p>" +
      "</div>";

    parrentElement.innerHTML = parrentElement.innerHTML + articleToInsert;
  });
}

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
