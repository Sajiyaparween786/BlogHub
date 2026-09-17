const bookmarkContainer =
document.getElementById(
"bookmarkContainer"
);

const bookmarks =
JSON.parse(
localStorage.getItem(
"bookmarks"
)
) || [];

if(bookmarks.length === 0){

bookmarkContainer.innerHTML = `

<h2 style="
color:white;
text-align:center;
grid-column:1/-1;
">

No Bookmarked Blogs Yet

</h2>

`;

}

else{

bookmarks.forEach(blog=>{

bookmarkContainer.innerHTML += `

<div class="blog-card">

<img
src="${blog.image}"
alt="${blog.title}">

<div class="blog-content">

<h3>

${blog.title}

</h3>

<p>

${blog.content.substring(0,120)}...

</p>

<button
onclick="openBookmark(${blog.id})">

Read More

</button>

</div>

</div>

`;

});

}

function openBookmark(id){

const blog =
bookmarks.find(
item => item.id === id
);

localStorage.setItem(
"selectedBlog",
JSON.stringify(blog)
);

window.location.href =
"blog-details.html";

}