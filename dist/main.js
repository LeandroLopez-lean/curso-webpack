(()=>{const e=document.getElementById("links"),t=document.querySelector("h1"),o=(document.querySelector("img"),{name:"Lean Lopez",nickname:"Lean",description:"...",avatar:"...",img:[{src:"../src/img/foto-perfil.png"}],links:[{name:"blog",url:"https://example.com/",color:"red",emoji:"📖"},{name:"podcast",url:"https://example.com/",color:"yellow",emoji:"💬"}],footer:"Made with Love on Argentina "});(()=>{let n=document.createTextNode(o?.name),l=o?.links?.map((e=>`<div class="bg-${e.color}-200 px-4 py-5 w-full flex justify-between">\n        <a class="text-sm font-bold text-${e.color}-600 text-center hhover:text-${e.color}-800 cursor-pointer"\n        href="https:${e.url}" target="blank">\n        ${e.name}</a><span>librito</span></div>`)).join(""),r=document.createElement("section");r.innerHTML=l,e.appendChild(r),t.appendChild(n)})()})();