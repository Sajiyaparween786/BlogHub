const blogs = [
{
id:1,
title:"JavaScript Essentials",
category:"Programming",
author:"Sajiya",
image:"https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
content:`JavaScript is one of the most important programming languages used in web development. It allows developers to create interactive and dynamic websites. Without JavaScript, websites would only display static content without any user interaction.

JavaScript can be used to create image sliders, dropdown menus, form validation, popups, animations, and many other interactive features. It works directly in the browser and can manipulate HTML and CSS using the Document Object Model (DOM).

Modern JavaScript includes advanced features such as ES6 modules, arrow functions, promises, async-await, and APIs. These features make development faster and more efficient.

Learning JavaScript opens opportunities in frontend development, backend development using Node.js, mobile app development, and full-stack development. Every web developer should have a strong understanding of JavaScript fundamentals.`
},
{
id:2,
title:"React For Beginners",
category:"Programming",
author:"Sajiya",
image:"https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
content:`React is a popular JavaScript library developed by Facebook for building user interfaces. It helps developers create reusable components and manage application data efficiently.

One of the biggest advantages of React is its component-based architecture. Instead of writing the same code repeatedly, developers can create reusable components and use them throughout the application.

React uses a virtual DOM which improves performance by updating only the necessary parts of a webpage. This makes applications faster and more responsive.

React is widely used in modern web applications such as Facebook, Instagram, and many business platforms. Learning React can significantly improve your frontend development skills and career opportunities.`
},
{
id:3,
title:"Future of Artificial Intelligence",
category:"Technology",
author:"Sajiya",
image:"https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
content:`Artificial Intelligence is transforming industries across the world. From healthcare and education to transportation and entertainment, AI is helping organizations automate tasks and improve decision-making.

Machine learning, natural language processing, and computer vision are some of the major branches of AI. These technologies allow computers to learn from data and perform tasks that traditionally required human intelligence.

AI-powered tools are becoming increasingly common in everyday life. Virtual assistants, recommendation systems, chatbots, and self-driving vehicles all use AI technologies.

As AI continues to evolve, it is expected to create new career opportunities while also changing the way people work. Understanding AI concepts is becoming an important skill for future professionals.`
},
{
id:4,
title:"Cloud Computing Explained",
category:"Technology",
author:"Sajiya",
image:"https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
content:`Cloud computing refers to the delivery of computing services such as storage, databases, servers, and software over the internet. Instead of storing data on local computers, users can access resources from cloud providers.

Popular cloud platforms include Amazon Web Services, Microsoft Azure, and Google Cloud Platform. These services allow businesses to scale resources according to their needs.

Cloud computing offers benefits such as cost savings, flexibility, accessibility, and improved security. Organizations can access their data from anywhere with an internet connection.

As businesses continue to adopt digital technologies, cloud computing remains one of the most important innovations in modern information technology.`
},
{
id:5,
title:"Effective Study Techniques",
category:"Education",
author:"Sajiya",
image:"https://images.pexels.com/photos/8199674/pexels-photo-8199674.jpeg",
content:`Effective study techniques can significantly improve learning and academic performance. Students should begin by creating a study schedule that allocates time for each subject.

Active learning methods such as note-taking, summarizing information, self-testing, and teaching concepts to others can improve understanding and memory retention.

It is important to study in a distraction-free environment. Short breaks between study sessions help maintain focus and prevent mental fatigue.

Consistent revision, proper sleep, and healthy habits contribute to long-term academic success. Students who develop effective study techniques often perform better in examinations and assignments.`
},
{
id:6,
title:"Time Management For Students",
category:"Education",
author:"Sajiya",
image:"https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
content:`Time management is an essential skill for students. Proper planning helps balance academics, extracurricular activities, personal responsibilities, and relaxation.

Students can use planners, calendars, and task lists to organize their daily schedules. Prioritizing important tasks helps ensure deadlines are met efficiently.

Avoiding procrastination is crucial for effective time management. Breaking large tasks into smaller manageable sections makes them easier to complete.

Good time management reduces stress, improves productivity, and allows students to achieve their goals while maintaining a healthy lifestyle.`
},
{
id:7,
title:"Top Places To Visit In India",
category:"Travel",
author:"Sajiya",
image:"https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
content:`India is a diverse country with numerous tourist destinations. From the Himalayan mountains to beautiful beaches, India offers experiences for every traveler.

Popular destinations include Kashmir, Jaipur, Goa, Kerala, Agra, and Ladakh. Each location offers unique culture, cuisine, architecture, and natural beauty.

Traveling helps people learn about different traditions, meet new people, and gain valuable experiences. It also contributes significantly to local economies.

Exploring different regions of India allows travelers to appreciate the country's rich history, diversity, and cultural heritage.`
},
{
id:8,
title:"Budget Travel Tips",
category:"Travel",
author:"Sajiya",
image:"https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg",
content:`Traveling does not always require a large budget. With proper planning and smart decisions, people can explore amazing destinations without spending too much money.

One of the best ways to save money while traveling is by booking tickets and accommodation in advance. Comparing prices on different platforms helps travelers find the best deals.

Using public transportation instead of private vehicles can significantly reduce travel expenses. Travelers should also look for affordable local food options rather than expensive restaurants.

Budget travel encourages people to focus on experiences rather than luxury. It allows travelers to explore more places, meet new people, and create unforgettable memories while staying within their budget.`
},
{
id:9,
title:"Healthy Food Habits",
category:"Food",
author:"Sajiya",
image:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
content:`Healthy food habits are essential for maintaining physical and mental well-being. A balanced diet provides the body with the nutrients needed for growth, energy, and overall health.

Students and working professionals should include fruits, vegetables, whole grains, and proteins in their daily meals. Drinking enough water throughout the day is equally important.

Avoiding excessive junk food, sugary drinks, and processed snacks helps reduce the risk of health problems. Healthy eating also improves concentration and productivity.

Developing healthy food habits from an early age can lead to a better quality of life and long-term health benefits.`
},
{
id:10,
title:"Benefits Of Home Cooked Food",
category:"Food",
author:"Sajiya",
image:"https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
content:`Home cooked food is often healthier and more nutritious than fast food or restaurant meals. Preparing meals at home allows people to control ingredients and portion sizes.

Home cooking encourages the use of fresh vegetables, fruits, and quality ingredients. It also reduces the consumption of unhealthy fats, excess sugar, and preservatives.

Cooking at home can save money and strengthen family relationships when family members participate in meal preparation together.

Regular consumption of home cooked meals promotes healthier eating habits and contributes to long-term physical well-being.`
},
{
id:11,
title:"Benefits Of Playing Badminton",
category:"Sports",
author:"Sajiya",
image:"https://images.pexels.com/photos/2202685/pexels-photo-2202685.jpeg",
content:`Badminton is one of the most enjoyable and beneficial sports. It provides a full-body workout while improving coordination, agility, and cardiovascular health.

Playing badminton regularly helps strengthen muscles and improve stamina. The fast-paced nature of the game enhances reflexes and concentration.

Apart from physical fitness, badminton reduces stress and promotes mental well-being. It is an excellent activity for students who want to stay active and healthy.

Because it can be played both recreationally and competitively, badminton is suitable for people of all ages and skill levels.`
},
{
id:12,
title:"Importance Of Daily Exercise",
category:"Sports",
author:"Sajiya",
image:"https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
content:`Daily exercise plays a vital role in maintaining a healthy lifestyle. Regular physical activity improves heart health, muscle strength, and overall fitness.

Exercise helps reduce stress, anxiety, and depression by releasing endorphins, which are often called the body's natural feel-good chemicals.

Simple activities such as walking, jogging, cycling, or stretching can have significant health benefits when performed consistently.

Developing an exercise routine helps improve energy levels, boosts confidence, and supports long-term physical and mental health.`
},
{
id:13,
title:"How Small Businesses Grow",
category:"Business",
author:"Sajiya",
image:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
content:`Every successful business starts with a simple idea. Small businesses grow by identifying customer needs and providing valuable products or services.

Effective marketing, customer satisfaction, and continuous improvement are important factors that contribute to business growth. Building trust with customers helps create long-term relationships.

Technology has made it easier for small businesses to reach larger audiences through social media, websites, and online marketplaces.

With dedication, strategic planning, and innovation, small businesses can expand and achieve long-term success in competitive markets.`
},
{
id:14,
title:"Startup Success Principles",
category:"Business",
author:"Sajiya",
image:"https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
content:`Successful startups are built on strong ideas, clear goals, and a willingness to solve real-world problems. Entrepreneurs must understand their target audience and continuously improve their products.

Innovation, adaptability, and persistence are key qualities of successful startup founders. Challenges and failures are common, but learning from mistakes helps businesses grow.

Building a skilled team and maintaining effective communication contribute significantly to startup success. Financial planning and resource management are equally important.

By focusing on customer value and long-term vision, startups can transform into successful businesses and create a lasting impact in their industries.`
}
];


const container = document.getElementById("blogContainer");

function displayBlogs(blogList){

if(!container) return;

container.innerHTML="";

blogList.forEach(blog=>{

container.innerHTML += `

<div class="blog-card">

<img src="${blog.image}" alt="blog">

<div class="blog-content">

<h3>${blog.title}</h3>

<p>${blog.content.substring(0,120)}...</p>

<button
class="read-btn"
onclick="openBlog(${blog.id})">

Read More

</button>

</div>

</div>

`;

});

}

displayBlogs(blogs);

function openBlog(id){

const blog = blogs.find(
item => item.id === id
);

localStorage.setItem(
"selectedBlog",
JSON.stringify(blog)
);

window.location.href =
"pages/blog-details.html";

}

// Search

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value =
searchInput.value.toLowerCase();

const filtered =
blogs.filter(blog=>

blog.title.toLowerCase().includes(value) ||

blog.category.toLowerCase().includes(value)

);

displayBlogs(filtered);

});

}

// Category Filter

const categoryButtons =
document.querySelectorAll(".category-btn");

categoryButtons.forEach(button=>{

button.addEventListener("click",()=>{

const category =
button.dataset.category;

if(category==="All"){

displayBlogs(blogs);
return;

}

const filtered =
blogs.filter(blog=>

blog.category===category

);

displayBlogs(filtered);

});

});


;


function displayBlogs(data){

const container =
document.getElementById("blogContainer");

if(!container) return;

container.innerHTML = "";

data.forEach(blog=>{

container.innerHTML += `

<div class="blog-card">

<img src="${blog.image}" alt="blog">

<div class="blog-content">

<h3>${blog.title}</h3>

<p>
${blog.content.substring(0,120)}...
</p>

<div class="blog-buttons">

<button
class="read-btn"
onclick="openBlog(${blog.id})">

Read More

</button>

<button
class="bookmark-btn"
onclick="saveBookmark(${blog.id})">

<i class="fa-solid fa-bookmark"></i>
Bookmark

</button>

</div>

</div>

</div>

`;

});

}

displayBlogs(blogs);

function saveBookmark(id){

const blog =
blogs.find(
item => item.id === id
);

let bookmarks =
JSON.parse(
localStorage.getItem("bookmarks")
) || [];

const exists =
bookmarks.some(
item => item.id === id
);

if(!exists){

bookmarks.push(blog);

localStorage.setItem(
"bookmarks",
JSON.stringify(bookmarks)
);

alert(
"Blog Bookmarked Successfully!"
);

}
else{

alert(
"Already Bookmarked!"
);

}

}


function subscribeChannel(){

let link =
document.getElementById("https://www.youtube.com/").value;

if(link===""){

alert("https://www.youtube.com/@rajshamani");


return;

}

window.open(link,"_blank");

}