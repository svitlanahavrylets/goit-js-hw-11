import{S as u,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();function d(n){const o="https://pixabay.com",e="/api/",i=new URLSearchParams({key:"44427326-e2b4a6eb28305d60c68b186c8",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${o}${e}?${i}`;return fetch(r).then(t=>t.json()).catch(t=>{iziToast.error({title:"Error",message:`${t}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})}function p(n){const o=n.map(e=>`<li class="gallery-item">  
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
</li>`).join("");s.gallery.innerHTML=o,new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function g(){s.loader.classList.remove("hidden")}function c(){s.loader.classList.add("hidden")}const s={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.form.addEventListener("submit",n=>{n.preventDefault();const o=n.target.elements.text.value.trim();if(o===""){s.gallery.innerHTML=" ",l.warning({title:"Warning",message:"Please, enter the query.",backgroundColor:"#ef4040",layout:2,position:"topRight",displayMode:"once"});return}g(),s.gallery.innerHTML=" ",d(o).then(e=>{if(e.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),c(),s.form.reset();return}c(),s.form.reset(),p(e.hits)}).catch(e=>{l.error({title:"Error",message:`${e}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
