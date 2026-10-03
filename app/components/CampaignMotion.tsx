"use client";
import {useEffect} from "react";
export function CampaignMotion() {
 useEffect(()=>{
  const media=window.matchMedia("(prefers-reduced-motion: reduce)");let observer:IntersectionObserver|undefined;
  function setup(){observer?.disconnect();document.documentElement.classList.remove("gf-motion-ready");if(media.matches)return;
   const targets=[...document.querySelectorAll<HTMLElement>("[data-reveal]")];targets.forEach(el=>{if(el.getBoundingClientRect().top>window.innerHeight*.98)el.classList.add("gf-pending");});document.documentElement.classList.add("gf-motion-ready");
   observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove("gf-pending");observer?.unobserve(entry.target);}}),{threshold:.08});targets.forEach(el=>observer?.observe(el));
  }setup();
  function closeMenu(event:MouseEvent){const link=(event.target as Element).closest(".gf-mobile-menu a, .article-mobile-toc a");if(link)link.closest("details")?.removeAttribute("open");}
  document.addEventListener("click",closeMenu);media.addEventListener("change",setup);return()=>{document.removeEventListener("click",closeMenu);observer?.disconnect();media.removeEventListener("change",setup);document.documentElement.classList.remove("gf-motion-ready");document.querySelectorAll(".gf-pending").forEach(el=>el.classList.remove("gf-pending"));};
 },[]);return null;
}
