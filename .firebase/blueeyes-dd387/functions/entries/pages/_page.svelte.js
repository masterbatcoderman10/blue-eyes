import { c as create_ssr_component, a as each, e as escape, b as add_attribute } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");.s-y_bCXRrkrYfP.s-y_bCXRrkrYfP{margin:0;box-sizing:border-box;font-family:"Raleway", sans-serif}header.s-y_bCXRrkrYfP.s-y_bCXRrkrYfP{padding:1%;margin-bottom:10vh}nav.s-y_bCXRrkrYfP.s-y_bCXRrkrYfP{text-align:center;color:white}.img-grid.s-y_bCXRrkrYfP.s-y_bCXRrkrYfP{display:grid;grid-template-columns:repeat(2, 1fr);grid-auto-rows:25vh;gap:10px;padding:0 10%}.member.s-y_bCXRrkrYfP.s-y_bCXRrkrYfP{border-radius:12px;overflow:hidden}@media(min-width: 768px){.member.s-y_bCXRrkrYfP.s-y_bCXRrkrYfP:hover{animation:s-y_bCXRrkrYfP-sviwel 200ms ease-in-out infinite alternate forwards}}.member.s-y_bCXRrkrYfP img.s-y_bCXRrkrYfP{width:100%;height:100%;object-fit:cover;transition:transform 200ms linear}.member.s-y_bCXRrkrYfP img.s-y_bCXRrkrYfP:hover{transform:scale(1.1)}@keyframes s-y_bCXRrkrYfP-sviwel{from{transform:rotate(-0.2deg)}to{transform:rotate(0.2deg)}}@media(min-width: 768px){.img-grid.s-y_bCXRrkrYfP.s-y_bCXRrkrYfP{grid-template-columns:repeat(4, 1fr)}.selected.s-y_bCXRrkrYfP.s-y_bCXRrkrYfP{grid-column:2/span 2;grid-row:1/span 2}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedImage = null;
  const images = [
    { url: `/imgs/be-1.avif` },
    { url: `/imgs/be-2.avif` },
    { url: `/imgs/be-3.avif` },
    { url: `/imgs/be-4.avif` },
    { url: `/imgs/be-5.avif` },
    { url: `/imgs/be-6.avif` },
    { url: `/imgs/be-7.avif` },
    { url: `/imgs/be-8.avif` },
    { url: `/imgs/be-9.avif` },
    { url: `/imgs/be-10.avif` },
    { url: `/imgs/be-11.avif` },
    { url: `/imgs/be-12.avif` }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1k6hnqz_START -->${$$result.title = `<title>Blue Eyes</title>`, ""}<!-- HEAD_svelte-1k6hnqz_END -->`, ""} <header class="s-y_bCXRrkrYfP"><nav class="s-y_bCXRrkrYfP"><h1 class="s-y_bCXRrkrYfP" data-svelte-h="svelte-13cvnqi">Blue Eyes V2</h1></nav></header> <main class="img-grid s-y_bCXRrkrYfP">${each(images, (image) => {
    return `<div class="${"member " + escape(image === selectedImage ? "selected" : "", true) + " s-y_bCXRrkrYfP"}"${add_attribute("this", image.element, 0)}><img${add_attribute("src", image.url, 0)} alt="blue eyes" class="s-y_bCXRrkrYfP"> </div>`;
  })} </main>`;
});
export {
  Page as default
};
