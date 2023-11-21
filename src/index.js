const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $avatar = document.querySelector('img');


const data = {
    name: "Lean Lopez",
    nickname: "Lean",
    description: "...",
    avatar: "img/foto-perfil",
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
        ${link.name}</a><span>librito</span></div>`;
    }).join('');
    let newItem = document.createElement("section");
    newItem.innerHTML = links;
    $links.appendChild(newItem);
    $name.appendChild(name);
    $img.appendChild(img);



}
 
main();