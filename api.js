
const saxlayiciDiv = document.querySelector('.trendyol-cards')
window.addEventListener('load', melumatlariGetir)

async function melumatlariGetir() {
    const unvan = "https://jsonplaceholder.typicode.com/posts"
    try {
        const gelenCavab = await fetch(unvan)

        const frontEndData = await gelenCavab.json()
        console.log(frontEndData)
        for (let i = 0; i < frontEndData.length; i++) {
            saxlayiciDiv.innerHTML += ` 
             <div class="card col-12 col-md-6 col-lg-3">
             <div class="card-body">
                 <h5 class="card-title">${frontEndData[i].title}</h5>
                 <p class="card-text">${frontEndData[i].body}</p>
                 <a href="#" class="btn btn-primary">${frontEndData[i].id}</a>
             </div>
         </div>`
        }
    }
    catch (e) {
        console.log(e.message)
    }

}

