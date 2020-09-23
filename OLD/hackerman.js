let topbarhtml = `<header id="topbar">
            <a class="toptab" href="news.html"><span>News</span></a>
            <a class="toptab" href="index.html">
                <img class="icon" src="aniicon.gif">
                <h1>THE FROGGY SHRINE</h1>
            </a>
            <span class="toptab projects">
              <span>Projects</span>
              <div class="projectsdropdown">
                <a href="wip.html">Pancake</a>
                <a href="wip.html">4Modes</a>
              </div> 
            </span>
            
        </header>`;
        
window.onload = function summonbar() {document.getElementById("barhere").innerHTML = topbarhtml};

function appendNewsItemImgBg(title, body, date, id, img, bg) {
  let newsItem = `<div class="newsitem" id="${id}" style="background-image:url('${bg}') !important; background-size:cover; background-repeat:no-repeat; background-attachment:fixed">
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

function appendNewsItemBg(title, body, date, id, bg) {
  let newsItem = `<div class="newsitem" id="${id}" style="background-image:url('${bg}') !important; background-size:cover; background-repeat:no-repeat; background-attachment:fixed">
            <h3>${title}</h3>
            <p>${body}</p>
            <footer style="font-size:15px"><i>${date}</i></footer>
          </div>`
  let newsObject = document.createElement("div")
  newsObject.innerHTML = newsItem
  
  document.getElementById("newshere").appendChild(newsObject)
}

function appendNewsItemImg(title, body, date, id, img) {
  let newsItem = `<div class="newsitem" id="${id}">
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

function appendNewsItem(title, body, date, id) {
  let newsItem = `<div class="newsitem" id="${id}">
            <h3>${title}</h3>
            <p>${body}</p>
            <footer style="font-size:15px"><i>${date}</i></footer>
          </div>`
  let newsObject = document.createElement("div")
  newsObject.innerHTML = newsItem
          
  document.getElementById("newshere").appendChild(newsObject)
}
