let topbarhtml = `<header class="topbar">
            <div class="toptab">
                <img class="icon" src="favicon.ico">
                <h1>THE FROGGY SHRINE <i class="smol">(aka Driftini's website)</i></h1>
            </div>
            <a class="toptext toptab" href="index.html"><span>Home</span></a>
            <a class="toptext toptab" href="news.html"><span>News</span></a>
            <a class="toptext toptab" href="wip.html"><span>Project 4Modes</span></a>
            <a class="toptext toptab" href="wip.html"><span>Win103</span></a>
        </header>`;
        
window.onload = function summonbar() {document.getElementById("barhere").innerHTML = topbarhtml};

function appendNewsItemBackground(title, body, date, img, bg) {
  let newsItem = `<div class="newsitem" style="background-image:url("${bg}"); background-size:cover; background-repeat:no-repeat">
            <h3>${title}</h3>
            <div class="flexrow">
              <p>${body}</p>
              <img src="${img}" style="align-self:flex-start">
            </div>
            <footer style="font-size:15px"><i>${date}</i></footer>
          </div>`
  let newsObject = document.createElement("div")
  newsObject.innerHTML = newsItem
  
  document.getElementById("newshere").appendChild(newsObject)
}

function appendNewsItemImg(title, body, date, img) {
  let newsItem = `<div class="newsitem">
            <h3>${title}</h3>
            <div class="flexrow">
              <p>${body}</p>
              <img src="${img}" style="align-self:flex-start">
            </div>
            <footer style="font-size:15px"><i>${date}</i></footer>
          </div>`
  let newsObject = document.createElement("div")
  newsObject.innerHTML = newsItem
          
  document.getElementById("newshere").appendChild(newsObject)
}

function appendNewsItem(title, body, date) {
  let newsItem = `<div class="newsitem">
            <h3>${title}</h3>
            <p>${body}</p>
            <footer style="font-size:15px"><i>${date}</i></footer>
          </div>`
  let newsObject = document.createElement("div")
  newsObject.innerHTML = newsItem
          
  document.getElementById("newshere").appendChild(newsObject)
}
