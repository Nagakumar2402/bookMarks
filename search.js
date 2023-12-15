const search = document.getElementById("search");
const button = document.getElementById("button");
const bookmarks = document.querySelector(".bookmarks");

const link = [
  {
    id: 1,
    name: "google",
    icon: ` <i class="ri-google-line"></i>`,
    link: "https://www.google.com/",
  },
  {
    id: 2,
    name: "youtube",
    icon: ` <i class="ri-youtube-line"></i>`,
    link: "https://www.youtube.com/",
  },
  {
    id: 3,
    name: "facebook",
    icon: ` <i class="ri-facebook-line"></i>`,
    link: "https://www.facebook.com/",
  },
  {
    id: 4,
    name: "instagram",
    icon: ` <i class="ri-instagram-line"></i>`,
    link: "https://www.instagram.com/",
  },
  {
    id: 5,
    name: "twitter",
    icon: ` <i class="ri-twitter-line"></i>`,
    link: "https://twitter.com/",
  },
  {
    id: 6,
    name: "whatsapp",
    icon: `<i class="ri-whatsapp-line"></i>`,
    link: "https://web.whatsapp.com/",
  },
  {
    id: 7,
    name: "beautifier",
    icon: ` <i class="ri-javascript-line"></i>`,
    link: "https://beautifier.io/",
  },
  {
    id: 8,
    name: "codepen",
    icon: ` <i class="ri-codepen-line"></i>`,
    link: "https://codepen.io/",
  },
  {
    id: 9,
    name: "github",
    icon: ` <i class="ri-github-line"></i>`,
    link: "https://github.com/",
  },
  {
    id: 10,
    name: "tools",
    icon: ` <i class="ri-tools-line"></i>`,
    link: "https://10015.io/",
  },
  {
    id: 11,
    name: "ChatGPT",
    icon: `<i class="ri-chat-3-line"></i>`,
    link: "https://chat.openai.com/chat",
  },
  {
    id: 12,
    name: "Keyboard",
    icon: `<i class="ri-keyboard-line"></i>`,
    link: "https://www.keybr.com/",
  },
  {
    id: 13,
    name: "colorPalettes",
    icon: `<i class="ri-palette-line"></i>`,
    link: "https://colorhunt.co/",
  },
  {
    id: 14,
    name: "transition",
    icon: `<i class="ri-rocket-line"></i>`,
    link: "https://www.transition.style/",
  },
  {
    id: 15,
    name: "codeSandbox",
    icon: '<i class="ri-code-box-line"></i>',
    link: "https://codesandbox.io/p/sandbox/react-new?file=%2Fsrc%2FApp.js",
  },
  {
    id: 16,
    name: "translate",
    icon: `<i class="ri-translate-2"></i>`,
    link: "https://translate.google.com/",
  },
  {
    id: 17,
    name: "pixabay",
    icon: `<i class="ri-image-line"></i>`,
    link: "https://pixabay.com/",
  },
  {
    id: 18,
    name: "unsplash",
    icon: `<i class="ri-image-line"></i>`,
    link: "https://unsplash.com/",
  },
  {
    id: 19,
    name: "svgRepo",
    icon: `<i class="ri-yuque-line"></i>`,
    link: "https://www.svgrepo.com/",
  },
  {
    id: 20,
    name: "photopea",
    icon: `<i class="ri-image-line"></i>`,
    link: "https://www.photopea.com/",
  },
];

button.addEventListener("click", (e) => {
  searchParams(e);
});

search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchParams(e);
  }
});

const searchParams = (e) => {
  e.preventDefault();
  window.location.href = `https://www.google.com/search?q=${search.value}`;
  search.value = "";
};

link.map((item) => {
  const li = document.createElement("li");
  li.innerHTML = ` ${item.icon}<a href="${item.link}">${item.name}</a>`;
  bookmarks.appendChild(li);
});
