
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
        <div class="card mb-3" style="max-width: 100;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${newses.thumbnail_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title fs-4 text-primary">${newses.title}</h5>
              <p class="card-text text-gray-900 text-wrap ext-break fw-semibold text-truncate">${newses.details}</p>

              <div class="card-text d-flex justify-content-between ">

              <div class="d-flex">
              <img src="${newses.img
              }" class="img-fluid rounded-circle" alt="">
              <p class="fs-5 fw-bold">${newses.author}</p>
          </div>
          <div>
              <small class="fs-5 "> <i class="fa-sharp  font-semibold text-primary fa-solid fa-eye"></i> ${newses.total_view}M</small>
          </div>
          <div>
             <smal>
             <i class="fa-solid font-semibold text-primary fa-arrow-right-long"></i>
             </smal>
          </div>
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