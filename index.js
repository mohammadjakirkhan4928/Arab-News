
const loadNews = async (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`
  const res = await fetch(url);
  const data = await res.json();
  displayNews(data.data)
}

const displayNews = (news) => {

  const newsContainer = document.getElementById('news-container');
  newsContainer.textContent = '';
  news.map(n => {
    console.log(n);
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('row');
    newsDiv.innerHTML = `
    <div class="card mb-3" style="max-width:100;">
  <div class="row g-0">
    <div class="col-md-2">
      <img src="${n.thumbnail_url}" class="img-fluid p-3 rounded-start" alt="...">
    </div>
    <div class="col-md-10">
      <div class="card-body">
        <h5 class="card-title">${n.title}</h5>
        <p class="card-text">${n.details.slice(0,200) + '.......'}.</p>

        <div class="mt-4 text-center">
        <div class="row">

          <div class="col d-flex g-0">
            <div>
                <img class ="img-size w-25 rounded-circle" src="${n.author.img}" alt="">
            </div>
            <div>
                <p class="">${n.author.name ? n.author.name : 'Not Found Anything'}</p>
            </div>

          </div>
          <div class="col">
          <div class="p-2 flex-fill"><i class="fa-solid fa-eye"></i>${n.total_view ? n.total_view : '0'}m </div>
          </div>
          <div class="col">
          <div class="p-2 flex-fill">

          <!-- modal start -->

          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <li class="fa-sharp fa-solid fa-arrow-right"></i>
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">     <h5 class="card-title">${n.title}</h5></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                <img src="${n.thumbnail_url}" class="img-fluid p-3 rounded-start" alt="...">
                <p class="card-text">${n.details.slice(0,200) + '.......'}.</p>
                <img class ="img-size w-25 rounded-circle" src="${n.author.img}" alt="">
                <p class="">${n.author.name ? n.author.name : 'Not Found Anything'}</p>
                <div class="p-2 flex-fill"><i class="fa-solid fa-eye"></i>${n.total_view ? n.total_view : '0'}m </div>
                <p class=""> Is Trending: ${n.others_info.is_trending ? n.others_info.is_trending : 'No, It is not Trending'}</p>

                <p class=""> Is Todays news: ${n.others_info.is_todays_pick? n.others_info.is_todays_pick : 'No, It is not Todays news'}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>



          </div>
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


const toggleSpinner = isLoading =>{
  const loaderSection = document.getElementById('loader');
  if(isLoading){
      loaderSection.classList.remove('d-none');
  }
  else{
      loaderSection.classList.add('d-none');
  }
}




const loadCategory = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`
  const res = await fetch(url);
  const data = await res.json();
  displayCategory(data.data.news_category);
}
const helo = (id) => {
  loadNews(id)
}
const displayCategory = (category) => {
  const categoryContainer = document.getElementById('catagori');
  categoryContainer.textContent = '';

  category.forEach(cate => {
    const li = document.createElement('li');
    li.innerHTML = `<a class="nav-link" onclick="helo('${cate.category_id}')" href="#">${cate.category_name}</a>`;
    categoryContainer.appendChild(li);
  });
}

loadNews();

loadCategory();





 const loadCategorys = async () => {
  const url = `https://openapi.programming-hero.com/api/news/category/08`
  const res = await fetch(url);
  const data = await res.json();
  displayNewss(data.data);

}
const displayNewss = (news) => {

  const news_defalt = document.getElementById('news_defalt');
  news_defalt.textContent = '';
  news.map(n => {
    const newsDiv = document.createElement('div');

    newsDiv.classList.add('row');
    newsDiv.innerHTML = `

    <div class="card mb-3" style="max-width:100;">
        <div class="row g-0">
          <div class="col-md-2">
            <img src="${n.thumbnail_url}" class="img-fluid p-3 rounded-start" alt="...">
          </div>
          <div class="col-md-10">
            <div class="card-body">
              <h5 class="card-title">${n.title}</h5>
              <p class="card-text">${n.details.slice(0,200) + '.......'}.</p>

              <div class="mt-4 text-center">
              <div class="row">

                <div class="col d-flex g-0">
                  <div>
                      <img class ="img-size w-25 rounded-circle" src="${n.author.img}" alt="">
                  </div>
                  <div>
                      <p class="">${n.author.name ? n.author.name : 'Not Found Anything'}</p>
                  </div>

                </div>
                <div class="col">
                <div class="p-2 flex-fill"><i class="fa-solid fa-eye"></i>${n.total_view ? n.total_view : '0'}m </div>
                </div>
                <div class="col">
                <div class="p-2 flex-fill">

                <!-- modal start -->

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <li class="fa-sharp fa-solid fa-arrow-right"></i>
                </button>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">     <h5 class="card-title">${n.title}</h5></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                      <img src="${n.thumbnail_url}" class="img-fluid p-3 rounded-start" alt="...">
                      <p class="card-text">${n.details.slice(0,200) + '.......'}.</p>
                      <img class ="img-size w-25 rounded-circle" src="${n.author.img}" alt="">
                      <p class="">${n.author.name ? n.author.name : 'Not Found Anything'}</p>
                      <div class="p-2 flex-fill"><i class="fa-solid fa-eye"></i>${n.total_view ? n.total_view : '0'}m </div>
                      <p class=""> Is Trending: ${n.others_info.is_trending ? n.others_info.is_trending : 'No, It is not Trending'}</p>

                      <p class=""> Is Todays news: ${n.others_info.is_todays_pick? n.others_info.is_todays_pick : 'No, It is not Todays news'}</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>



                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>
             `;
    news_defalt.appendChild(newsDiv);
  });
}
loadCategorys();