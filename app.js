
const loadNews = async()=>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data)
}

const displayNews = (news) =>{

    const newsContainer = document.getElementById('news-container');
    // newsContainer.textContent = '';


     news.forEach(newses =>{
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.innerHTML = `
          <div class="card ">
         <div class=" col-md-4">
        <img src="${newses.thumbnail_url}" class="img-fluid rounded-1" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-primary fs-5">${newses.title}</h5>
          <p class="card-text text-truncate">${newses.details}</p>

            <div class="card-text d-flex justify-content-between m-3">
                    <div class="d-flex">
                        <img src="${newses.img
                        }" class="img-fluid rounded-circle" alt="">
                        <p class="fs-5 fw-bold">${newses.author}</p>
                    </div>
                    <div>
                        <small class="fs-5 fw-bold">${newses.total_view}</small>
                    </div>
                    <div>
                        <button class="btn btn-primary fs-5 fw-bold">CLick</button>
                    </div>
            </div>
        </div>
      </div>
      </div>
        `;
        newsContainer.appendChild(newsDiv);
     });
}

loadNews();