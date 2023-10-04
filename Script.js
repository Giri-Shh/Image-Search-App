const accessKey="2FUBEMGqFKRSterHDTT-joyUppOsyck9POTB32J2xPQ";

const formEl=document.querySelector("form")
const inputEl=document.getElementById("Search-input")
const searchResults= document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")


let inputData=""
let page=1;
console.log(inputData);
async function searchImages(){
    inputData=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    const response=await fetch(url)
    // console.log(response);
    const data = await response.json();
    const results =  data.results

    if (page ===1){
        searchResults.innerHTML=""
    }
    results.map((result)=>{
        let html = `<div class="search-result">
        <img src="${result.urls.small} " alt="${result.alt_description}">
        <a href="${result.links.html}" target="_blank">${result.alt_description}</a>
    </div>`
        // const imageWrapper=document.createElement('div')
        // imageWrapper.classList.add("search-result")
        // const image =document.createElement('img')
        // image.src=result.urls.small
        // image.alt=result.alt_description
        // const imageLink=document.createElement('a')
        // imageLink.href = result.links.html
        // imageLink.target="_blank"
        // imageLink.textContent=result.alt_description

        // imageWrapper.append(image)
        // imageWrapper.appendChild(imageLink)
        // // imageWrapper.appendChild(imageWrapper)
        // imageWrapper.appendChild(imageWrapper);
        searchResults.innerHTML += html
    })
    page++
    if(page>1){
        showMore.style.display="block"
    }

}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages()
})
showMore.addEventListener("click",(event)=>{
    debugger
    

    searchImages()
})