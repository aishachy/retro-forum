const infoLoad = async (categoryName) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`);
    const data = await res.json();
    const information = data.posts;
    //console.log(information);
    displayInfo(information);
    
}

const displayInfo = information =>{
    //console.log(information);

const infoContainer = document.getElementById('info-container');

//clear infoContainer cards before adding new cards
infoContainer.textContent = '';

    information.forEach(info =>{
        console.log(info);
        //2. create a div
        const infoCard = document.createElement('div');
        infoCard.classList = `hero w-full`;
        //3. innerHtml
        infoCard.innerHTML = `
       <div class="w-full">
        <div class="flex mb-6 border-4 border-gray-300 rounded-3xl pt-6 pb-6 pl-6 pr-2 bg-slate-100">
    <img
      src="${info.image}"
      class="w-20 h-20 rounded-3xl" />
    <div class="pl-6">
    <div class="flex">
     <p class="mr-5 font-bold text-gray-600"># ${info.category}</p>
     <p class="font-bold text-gray-600">Author : ${info.author.name}</p>
    </div>
      <h1 class="text-xl font-bold pb-4 pt-2">${info.title}</h1>
      <p class="pb-4 text-lg">
        ${info.description}
      </p>
      <hr class="border-dashed border-gray-500 gap-5">
      <div class="flex justify-between">
        <div class="flex justify-start mt-5">
        <p class="pr-6"><i class="fa-regular fa-message pr-2"></i>   ${info.comment_count}</p>
        <p class="pr-6"><i class="fa-regular fa-eye pr-2"></i>   ${info.view_count}</p>
        <p class="pr-6"><i class="fa-regular fa-clock pr-2"></i>   ${info.posted_time}</p>
       </div>
       <div>
        <p onclick="handleShowDetails()" class="cursor-pointer justify-end mt-5"><i class="fa-solid fa-envelope-open bg-green-500 p-2 rounded-full"></i></p>
        </div>
      </div>
    </div>
  </div>
  </div>
        `;
        //4. append child
        infoContainer.appendChild(infoCard);
    });

  //hide loading spinner
  toggleLoadingSpinner(false);
}

const handleShowDetails = () =>{

  
}



const latestPosts = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const data = await res.json();
  const latestInfo = data;
  //console.log(latestInfo);
  latestInfoDetails(latestInfo);
}

const latestInfoDetails = latestInfo =>{
   
const latestInfoContainer = document.getElementById('latest-container');


latestInfo.forEach(user =>{
  console.log(user);

  const latestCard = document.createElement('div');

  latestCard.classList = `card`;
  latestCard.innerHTML = `
  <div class="border-2 border-gray-300 rounded-3xl w-96 flex">
  <div class="w-96 m-6">
      <img class="rounded-3xl"
        src="${user.cover_image}";
        alt="Shoes" />
    <div class="card-body justify-start pl-0">
    <p class="text-gray-600 text-lg"><i class="fa-regular fa-calendar-xmark pr-2"></i>${user.author?.posted_date || 'No Publish Date'}</p>
      <h2 class="card-title text-2xl font-bold">${user.title}</h2>
      <p class="text-gray-600 text-lg">${user.description}</p>
      <div class="flex">
        <div class="flex justify-start w-16 h-16 mt-4">
         <img class="rounded-full mr-6" src="${user.profile_image}"
       </div>
       <div class="">
       <p class="text-xl font-bold mb-2">${user.author.name}</p>
       <p class="w-96 pl-0 ml-0 text-lg text-gray-600">${user.author?.designation || 'Unknown'}</p>
       </div>
      </div>
    </div>
  </div>
 </div>
  `;

latestInfoContainer.appendChild(latestCard);
})
};


//handle search button

const handleSearch = () =>{
  toggleLoadingSpinner(true);
  //console.log('search handle');
  const categoryField = document.getElementById('category-field');
  const categoryName = categoryField.value;
  console.log(categoryName);
  infoLoad(categoryName);
}


const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden');
  }
  else{
    loadingSpinner.classList.add('hidden');
  }
}

handleSearch();

handleShowDetails();

latestPosts();

//infoLoad();
