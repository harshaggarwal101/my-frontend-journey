
function savebookmarks() {
    const name=document.getElementById("name").value;
    const url=document.getElementById("url").value;

    if(!name || !url){
        alert("Both fields are required");
    }
    const bookmark={name,url};
    const bookmarks=JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks));

    document.getElementById('name').value='';
    document.getElementById('url').value='';

    showbookmarks();
}

function showbookmarks() {
    const container=document.getElementById("bookmarks");
    const bookmarks=JSON.parse(localStorage.getItem("bookmarks"))||[];
    container.innerHTML="";

bookmarks.forEach((b, i) => {
  container.innerHTML += `
    <li class="flex justify-between items-center">
      <a href="${b.url}" target="_blank" class="text-blue-700 underline">${b.name}</a>
      <button onclick="deleteBookmark(${i})" class="text-red-500 ml-4">Delete</button>
    </li>
  `;
});
}

function deleteBookmark(i) {
    const bookmarks=JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.splice(i,1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    showbookmarks(); 
}

window.onload = showbookmarks;