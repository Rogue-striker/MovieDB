import{j as d,r as l,R as p,a as u}from"./vendor.3c142cb6.js";const m=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};m();const t=d.exports.jsx,a=d.exports.jsxs,f=({movie:{imdbID:i,Year:s,Poster:c,Title:n,Type:e}})=>a("div",{className:"movie",children:[t("div",{children:t("p",{children:s})}),t("div",{children:t("img",{src:c!=="N/A"?c:"https://via.placeholder.com/400",alt:n})}),a("div",{children:[t("span",{children:e}),t("h3",{children:n})]})]},i);var v="/assets/search.5928140f.svg";const y=()=>{const i="http://www.omdbapi.com?apikey=6479e7b1",[s,c]=l.exports.useState([]),[n,e]=l.exports.useState("");l.exports.useEffect(()=>{r("Batman")},[]);const r=async o=>{const h=await(await fetch(`${i}&s=${o}`)).json();c(h.Search)};return a("div",{className:"app",children:[t("h1",{children:"MovieBase"}),a("div",{className:"search",children:[t("input",{type:"text",placeholder:"Search",value:n,onChange:o=>{e(o.target.value)}}),t("img",{src:v,alt:"search",onClick:()=>{r(n)}})]}),(s==null?void 0:s.length)>0?t("div",{className:"container",children:s.map(o=>t(f,{movie:o},o.imdbID))}):t("div",{className:"empty",children:t("h2",{children:"No movies found"})})]})};p.render(t(u.StrictMode,{children:t(y,{})}),document.getElementById("root"));
