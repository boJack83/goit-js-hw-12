import{a as d,S as m,i}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function y(s){return d("https://pixabay.com/api/",{params:{key:"50835877-ebd7ce95b33653090cfe69fe8",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const g=new m(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".gallery"),p=document.querySelector(".loader");function h(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
        <li class="gallery-item">
        <a href="${a}">
        <img src="${o}" alt="${e}" class="image">
        </a>
        <div class="statist">
        <p class="text">Likes<span class="span">${t}</span></p>
        <p class="text">Views<span class="span">${n}</span></p>
        <p class="text">Comments<span class="span">${u}</span></p>
        <p class="text">Downloads<span class="span">${f}</span></p>
        </div>
        </li>
    `).join("");l.innerHTML=r,g.refresh()}function L(){l.innerHTML=""}function b(){p.style.display="block"}function x(){p.style.display="none"}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();r!==""&&(L(),b(),y(r).then(o=>{const a=o.hits;a.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(a),c.reset()}).catch(o=>{i.error({message:"Request error!",position:"topRight"})}).finally(()=>{x()}))});
//# sourceMappingURL=index.js.map
