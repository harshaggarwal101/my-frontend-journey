import { deleteBookmark, getBookmarks } from './localstorage.js';

export function showBookmarks() {
    const container = document.getElementById("bookmarks");
    const bookmarks = getBookmarks();
    container.innerHTML = "";

    bookmarks.forEach((b, i) => {
        const li = document.createElement("li");
        li.className = "flex justify-between items-center";
        li.dataset.index = i;

        const link = document.createElement("a");
        link.href = b.url;
        link.target = "_blank";
        link.textContent = b.name;
        link.className = "text-blue-700 underline";

        const btn = document.createElement("button");
        btn.className = "text-red-500 ml-4";
        btn.textContent = "Delete";

        li.appendChild(link);
        li.appendChild(btn);
        container.appendChild(li);
    });
}

export function attachDeleteHandler() {
    const container = document.getElementById("bookmarks");

    container.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            const index = e.target.parentElement.dataset.index;
            deleteBookmark(index);
            showBookmarks();
        }
    });
}
