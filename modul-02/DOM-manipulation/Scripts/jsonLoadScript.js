let mainContentArea = document.getElementById("main-content-area");

fetchData("Data/data.json").then((data) => {
  //Al kode som bruger "data" inde mellem de krøllede parateser: {}

  console.log(data);

  let articleToInsert = "";

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].heading);

    let contentToInsert = "";
    let authorToInsert = "";
    let emailToInsert = "";

    if (data[i].author == "Foo Bar") {
      contentToInsert = "Censored";
      emailToInsert = data[i].email;
      authorToInsert = data[i].author;
    } else if (data[i].author == "John Doe") {
      authorToInsert = "Anonymous";
      contentToInsert = data[i].content;
    } else {
      contentToInsert = data[i].content;
      emailToInsert = data[i].email;
      authorToInsert = data[i].author;
    }

    articleToInsert =
      "<div id='" +
      data[i].id +
      "' class='content'>" +
      "<h1>" +
      data[i].heading +
      "</h1>" +
      "<p class='inner-content'>" +
      contentToInsert +
      "</p>" +
      "<p class='author'>" +
      authorToInsert +
      "</p>" +
      "<p class='contact'>" +
      emailToInsert +
      "</p>" +
      "</div>";

    mainContentArea.innerHTML += articleToInsert;
  }
  let authorElements = document.getElementsByClassName("author");
  let emailElements = document.getElementsByClassName("contact");

  console.log(authorElements);

  for (let i = 0; i < authorElements.length; i++) {
    let currentElement = authorElements[i];

    if (currentElement.innerHTML == "Anonymous") {
      currentElement.style.color = "navy";
    }

    if (currentElement.innerHTML == "Jane Doe") {
      currentElement.style.color = "pink";
      currentElement.style.fontWeight = "bold";
    }
  }

  /*
  for (let i = 0; i < emailElements.length; i++) {
    let currentElement = emailElements[i];

    if (currentElement.innerHTML == "jane@doe.com") {
      currentElement.style.color = "pink";
      currentElement.style.fontWeight = "bold";
    }
  }
    */

  /*
  let i = 0;
  while (i < emailElements.length) {
    let currentElement = emailElements[i];

    if (currentElement.innerHTML == "jane@doe.com") {
      currentElement.style.color = "pink";
      currentElement.style.fontWeight = "bold";
    }

    i++;
  }
    */
  /*
  for (let i in emailElements) {
    let currentElement = emailElements[i];

    if (currentElement.innerHTML == "jane@doe.com") {
      currentElement.style.color = "pink";
      currentElement.style.fontWeight = "bold";
    }
  }
*/
  let emailElementsArray = Array.from(emailElements);
  /*
  emailElementsArray.forEach(paintJanePink);

  function paintJanePink(elmnt) {
    if (elmnt.innerHTML == "jane@doe.com") {
      elmnt.style.color = "pink";
      elmnt.style.fontWeight = "bold";
    }
  }

  */
  /*
  emailElementsArray.forEach(function (elmnt) {
    if (elmnt.innerHTML == "jane@doe.com") {
      elmnt.style.color = "pink";
      elmnt.style.fontWeight = "bold";
      elmnt.style.fontStyle = "normal";
    }
  });*/

  emailElementsArray.forEach((elmnt) => {
    if (elmnt.innerHTML == "jane@doe.com") {
      elmnt.style.color = "darkRed";
      elmnt.style.fontWeight = "bold";
      elmnt.style.fontStyle = "normal";
    }
  });
});

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
