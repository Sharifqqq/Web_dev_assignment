const loading = document.getElementById("loading")
const list = document.getElementById("albumList")

fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(data =>
    {
        loading.style.display = "none"
        data.slice(0, 15).forEach(album =>
        {
            const li = document.createElement("li")
            li.textContent = album.title
            list.appendChild(li)
        })
    })