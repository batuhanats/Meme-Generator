const memeBtn = document.querySelector("#meme-btn");
const memeTitle = document.querySelector("#meme-title");
const memeImg = document.querySelector("#meme-image");
const authorEl = document.querySelector(".memeAuthor");
const url = `https://meme-api.com/gimme/wholesomememes`;

memeBtn.addEventListener("click", newMeme)
document.addEventListener("DOMContentLoaded", newMeme)


function newMeme() {
    fetch(`${url}`)
        .then(response => response.json())
        .then(data => {
            updateDetails(data.url, data.title, data.author)
        })
        .catch(err => console.log("error"))
}

function updateDetails(url, title, author) {
    memeImg.setAttribute("src", url);
    memeTitle.textContent = title;
    authorEl.textContent = `Meme by :${author}`;
}







