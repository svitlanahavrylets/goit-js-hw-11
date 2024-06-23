import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function d(s){const o="https://pixabay.com",e="/api/",a=new URLSearchParams({key:"44427326-e2b4a6eb28305d60c68b186c8",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${o}${e}?${a}`;return fetch(t).then(r=>r.json()).catch(r=>{console.log(r)})}function p(s){const o=s.map(e=>`<li class="gallery-item">  
      <a class="gallery-link" 
      href="${e.largeImageURL}">
      <img class="gallery-image" 
      src="${e.webformatURL}"
      alt="${e.tags}"/>
      </a> 
<div class="gallery-card-container">
<p><strong>Likes:</strong> ${e.likes}</p>
<p><strong>Views:</strong> ${e.views}</p>
<p><strong>Comments:</strong> ${e.comments}</p>
<p><strong>Downloads:</strong> ${e.downloads}</p>
<p><strong>Likes:</strong> ${e.likes}</p>
</div>
</li>`).join("");n.gallery.innerHTML=o,new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function g(){n.loader.classList.remove("hidden")}function c(){n.loader.classList.add("hidden")}const n={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.text.value.trim();if(o===""){n.gallery.innerHTML=" ",l.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"});return}g(),n.gallery.innerHTML=" ",d(o).then(e=>{if(e.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),c(),n.form.reset();return}c(),n.form.reset(),p(e.hits)}).catch(e=>{console.log(e)})});
//# sourceMappingURL=commonHelpers.js.map
