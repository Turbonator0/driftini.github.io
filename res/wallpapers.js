let previewer = document.getElementById("previewer").style
let wps = document.querySelectorAll(".wplist li > img")

for (let i = 0; i < wps.length; i++) {
    let dlcontainer = document.createElement("span")
    dlcontainer.classList.add("dlcontainer")
    
    let hd = document.createElement("a")
    hd.innerText = "1280x720 (HD)"
    hd.classList.add("download")
    hd.href = wps[i].src
    hd.download = true
    
    let fhd = document.createElement("a")
    fhd.innerText = "1920x1080 (Full HD)"
    fhd.classList.add("download")
    fhd.href = wps[i].dataset.fhd
    fhd.download = true
    
    let title = document.createElement("h2")
    title.innerText = wps[i].title
    
    /*let previewbtn = document.createElement("a")
    previewbtn.innerText = "Preview"
    previewbtn.classList.add("download")
    previewbtn.classList.add("preview")
    previewbtn.href = "javascript:void(0)"*/
    
    wps[i].parentElement.style.backgroundImage = `url(${wps[i].src})`
    wps[i].parentElement.appendChild(title)
    wps[i].parentElement.appendChild(dlcontainer)
    dlcontainer.appendChild(hd)
    dlcontainer.appendChild(fhd)
    //dlcontainer.appendChild(previewbtn)
    
    /*previewbtn.addEventListener("click", function() {
        previewer.backgroundImage = `url(${wps[i].src})`
        previewer.display = "block"
    })*/
}

document.getElementById("previewcloser").addEventListener("click", function() {
    previewer.display = "none"
})
