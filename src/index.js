import fotoPerfil from "./img/foto-perfil.png";

const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $fotoPerfil = document.getElementById('imagen');
const $text = document.getElementById('text');


const data = {
  name: "Lean Lopez",
  nickname: "Lean",
  description: "Esto es webpack. me costo mucho colocar la imagen... ",
  avatar: fotoPerfil,
  links: [
    {
      name: "blog",
      url: "https://example.com/",
      color: "red",
      emoji: "📖",
    },
    {
      name: "podcast",
      url: "https://example.com/",
      color: "yellow",
      emoji: "💬",
    },
  ],
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links?.map((link) => {
    return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hhover:text-${link.color}-800 cursor-pointer"
        href="https:${link.url}" target="blank">
        ${link.name}</a><span>${link.emoji}</span></div>`;
  }).join('');
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);

  $fotoPerfil.src = fotoPerfil;
  $fotoPerfil.alt = "tuyu";
  $text.textContent = data.description;

}

main();