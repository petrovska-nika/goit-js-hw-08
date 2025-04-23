const images = [
  {
    preview: "/images/preview/1.png",
    original: "/images/original/1.png",
    description: "Team Brainstorming",
  },
  {
    preview: "/images/preview/2.png",
    original: "/images/original/2.png",
    description: "Lightbulb Idea",
  },
  {
    preview: "/images/preview/3.png",
    original: "/images/original/3.png",
    description: "Minimalist Workspace",
  },
  {
    preview: "/images/preview/4.png",
    original: "/images/original/4.png",
    description: "Modern Office Interior",
  },
  {
    preview: "/images/preview/5.png",
    original: "/images/original/5.png",
    description: "Creative Office Design",
  },
  {
    preview: "/images/preview/6.png",
    original: "/images/original/6.png",
    description: "Coworking Space",
  },
  {
    preview: "/images/preview/7.png",
    original: "/images/original/7.png",
    description: "Workspace Essentials",
  },
  {
    preview: "/images/preview/8.png",
    original: "/images/original/8.png",
    description: "Casual Working Style",
  },
  {
    preview: "/images/preview/9.png",
    original: "/images/original/9.png",
    description: "Team Presentation",
  },
];

const galleryContainer = document.querySelector(".gallery");
const markup = createGalleryMarkup(images);

galleryContainer.insertAdjacentHTML("beforeend", markup);

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const isImageEl = event.target.classList.contains("gallery-image");
  if (!isImageEl) return;

  const originalImg = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600">
  `);

  instance.show();
}
