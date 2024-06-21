import{i as n}from"./assets/vendor-8e8cd629.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function i(a){if(a==="")return;const r="https://pixabay.com",s="/api/",o=new URLSearchParams({key:"44427326-e2b4a6eb28305d60c68b186c8",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${s}?${o}`;return fetch(e).then(t=>t.json()).catch(t=>{console.log(t)})}function u(a){a.hits.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:l,downloads:c})=>`<li class="gallery-item">
          <div class="gallery-images">
            <a class="gallery-link" href="${r}">
            // <img
            // class="gallery-image"
            // src=${s}
            // data-source="${r}"
            // alt=${o}
            // />
            // </a>
          </div>
          <div class="gallery-card-container">
            <h3 class="gallery-card-title">Likes</h3>
            <p class="gallery-card-text">${e}</p>
                  <h3 class="gallery-card-title">Views</h3>
            <p class="gallery-card-text">${t}</p>
                  <h3 class="gallery-card-title">Comments</h3>
            <p class="gallery-card-text">${l}</p>
                  <h3 class="gallery-card-title">Downloads</h3>
            <p class="gallery-card-text">${c}</p>
          </div>
        </li>`).join("")}const d={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector("button")};d.form.addEventListener("submit",a=>{a.preventDefault();const r=a.target.elements.text.value.trim();i(r).then(s=>{s.hits.length===0&&(n.show({message:"Sorry, there are no images matching your search query. Please try again!"}),console.log("Sorry, there are no images matching your search query. Please try again!"));const o=document.querySelector(".images-gallery"),e=u(s);console.log(e),o.insertAdjacentElement("beforeend",e)}).catch(s=>{})});
//# sourceMappingURL=commonHelpers.js.map
