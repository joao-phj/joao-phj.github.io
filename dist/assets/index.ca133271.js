import{w as x,r as p,u as m,o as r,c as _,a as g,b as C,d as b,S,e as f,f as k,g as u,h as d,i as l,F as h,j as y,k as O,t as v,l as $,m as w,n as L}from"./vendor.6f3595fb.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};N();const j={async setup(o){let n,c;const s=([n,c]=x(()=>C("home",{version:"draft"})),n=await n,c(),n);return(e,t)=>{const i=p("StoryblokComponent");return m(s)?(r(),_(i,{key:0,blok:m(s).content},null,8,["blok"])):g("",!0)}}},V=k("div",null,"Loading...",-1),A={setup(o){return(n,c)=>(r(),_(S,null,{default:b(()=>[f(j)]),fallback:b(()=>[V]),_:1}))}},B={class:"flex py-8 mb-6"},F={props:{blok:Object},setup(o){return(n,c)=>{const s=p("StoryblokComponent"),e=u("editable");return d((r(),l("div",B,[(r(!0),l(h,null,y(o.blok.columns,t=>(r(),l("div",{key:t._uid,class:"flex-auto px-6"},[f(s,{blok:t},null,8,["blok"])]))),128))])),[[e,o.blok]])}}},M={class:"px-6"},T={props:{blok:Object},setup(o){return(n,c)=>{const s=p("StoryblokComponent"),e=u("editable");return d((r(),l("div",M,[(r(!0),l(h,null,y(o.blok.body,t=>(r(),_(s,{blok:t,key:t._uid},null,8,["blok"]))),128))])),[[e,o.blok]])}}},D={class:"py-8 mb-6 text-5xl font-bold text-center"},I={props:{blok:Object},setup(o){return(n,c)=>{const s=u("editable");return d((r(),l("div",D,[O(v(o.blok.headline),1)])),[[s,o.blok]])}}},P={class:"py-2"},E={class:"text-lg"},J={props:{blok:Object},setup(o){return(n,c)=>{const s=u("editable");return d((r(),l("div",P,[k("h1",E,v(o.blok.name),1)])),[[s,o.blok]])}}},a=$(A);a.use(w,{accessToken:"MWVwMh2I2WoAK2fJdJMTIQtt",use:[L],apiOptions:{region:""}});a.component("Grid",F);a.component("Page",T);a.component("Teaser",I);a.component("Feature",J);a.mount("#app");
