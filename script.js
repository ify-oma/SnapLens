const accessKey = "cOQ2AZdtwB4Wvvb1RndzX1HJ_EezMo967i75PuFjt3A"

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMorebtn = document.getElementById("show-more-btn");
const searchButton = document.getElementById('search-btn');




let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    if (page === 1){
        searchResult.innerHTML = "";
    }
    
    const results = data.results;
    
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMorebtn.style.display = "block"

}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages()
})

showMorebtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbxfaoD3yXlqMzg06dSPd1dNlVSFydQUlq5cIcOivtVhZvibHXb5gM0_7STjSloqla4/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message has been sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

searchButton.addEventListener('click', ()=>{
    
    searchResult.style.display =  'grid';
    searchImages();
});





const btne = document.querySelector(".btn");

btne.addEventListener("mouseover", (event) => {
    const y = (event.pageY - btne.offsetTop);
    const x = (event.pageX - btne.offsetLeft);
    
    btne.style.setProperty("--xPos", x + "px");
    btne.style.setProperty("--yPos", y + "px");
});



const containerEl = document.querySelector(".container");

 const btnEle = document.querySelector(".contact");

 const popupContainer = document.querySelector(".contact-right ");
 const closeIconEl = document.querySelector(".close-icon");

 btnEle.addEventListener("click", ()=>{ 
    containerEl.classList.add("active");
    popupContainer.classList.remove("active");
 });

 closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popupContainer.classList.add("active")
 });