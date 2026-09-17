const blog =
JSON.parse(
localStorage.getItem(
"selectedBlog"
)
);

if(blog){

document.getElementById(
"blogData"
).innerHTML = `

<img
class="blog-main-image"
src="${blog.image}">

<h1>${blog.title}</h1>

<p>
Author: ${blog.author}
</p>

<p>
Category: ${blog.category}
</p>

<p>
${blog.content}
</p>

`;

}
