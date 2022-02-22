/*@license Unlicense
http://unlicense.org/UNLICENSE
magnet:?xt=urn:btih:5ac446d35272cc2e4e85e4325b146d0b7ca8f50c&dn=unlicense.txt
*/
let footer = document.createElement("footer")
footer.innerHTML = `
<span class="social">
    <a class="social_tw" href="https://twitter.com/UmbraK"></a>
    <a class="social_dc" href="https://discord.gg/VwAPkHd"></a>
    <a class="social_yt" href="https://www.youtube.com/channel/UC8eEbbyJ-_nJv_zSb9_Z0lA"></a>
    <a class="social_ms" href="https://myspace.windows93.net/?id=1231"></a>
    <a class="social_gh" href="https://github.com/Driftini/"></a>
</span>

<img class="footcol" src="res/img/tfs.svg">
<ul class="footcol">
    <li><b>Windows93 Projects</b></li>
    <li><a>Pancake</a></li>
    <!-- <li><a>LunarRabbit</a></li> -->
    <li><a>Sapiens</a></li>
    <li><a>93Tweaks</a></li>
    <!-- <li><a>TweakStore</a></li>
    <li><a>TAWM</a></li> -->
    <li><a>Ease</a></li>
</ul>
`

let nav = document.createElement("nav")
nav.innerHTML = `
<span class="navleft">
    <a class="navpart" href="index.html">
        <img src="res/img/wfrog.svg">
        <label>The Froggy Shrine</label>
    </a>
</span>
<span class="navright">
    <a class="navpart" href="wip.html">Blog</a>
    <a class="navpart" href="wallpapers.html">Wallpapers</a>
    <a class="navpart" href="wip.html">Projects</a>
</span>
`

document.body.appendChild(nav)
document.body.appendChild(footer)
// @license-end