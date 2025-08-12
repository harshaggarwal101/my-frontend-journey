import { saveBookmark } from './localstorage.js';
import { showBookmarks, attachDeleteHandler } from './domutils.js';

document.addEventListener("DOMContentLoaded", () => {
    // Initial render
    showBookmarks();

    // Attach delete handler (event delegation)
    attachDeleteHandler();

    // Handle form submission (works with Enter and button click)
    const form = document.querySelector("#bookmarkForm");
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const urlInput = document.getElementById("url");

        let name = nameInput.value.trim();
        let url = urlInput.value.trim();

        if (!name || !url) {
            alert("Please enter both a name and URL");
            nameInput.value = '';
            urlInput.value = '';
            return;
        }
        saveBookmark({ name, url });

        // Clear inputs
        nameInput.value = '';
        urlInput.value = '';

        // Re-render
        showBookmarks();
    });
});
