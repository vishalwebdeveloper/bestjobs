const searchData = [
    {
      title: 'FSC Engineers Pvt Ltd',
      location: 'Bhopal, India',
      category: 'MNC',
      imgSrc: 'img/com-logo-1.jpg',
    },
    {
      title: 'Lumenore',
      location: 'Bhopal, India',
      category: 'MNC',
      imgSrc: 'img/com-logo-2.jpg',
    },
    {
      title: 'Praadis Strategy Development Technologies India Pvt Ltd',
      location: 'Bhopal, India',
      category: 'MNC',
      imgSrc: 'img/com-logo-3.jpg',
    },
    {
        title: 'Sanfield India Ltd',
        location: 'Bhopal, India',
        category: 'MNC',
        imgSrc: 'img/com-logo-2.jpg',
    },
    {
        title: 'Zappian Media India Pvt Ltd',
        location: 'Bhopal, India',
        category: 'MNC',
        imgSrc: 'img/com-logo-2.jpg',
      },
    {
      title: 'Microsoft',
      location: 'Mumbai, India',
      category: 'Computer Software',
      imgSrc: 'img/com-logo-4.jpg',
    },
    {
      title: 'Google',
      location: 'Mumbai, India',
      category: 'Computer Software',
      imgSrc: 'img/com-logo-5.jpg',
    },
    {
        title: 'IBM',
        location: 'Hyderbad, India',
        category: 'Computer Software',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'Amazon',
        location: 'Hyderbad, India',
        category: 'Computer Software',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'The Coca Cola Co.',
        location: 'Gurugram, India',
        category: 'Goods',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'Procter& Gamble',
        location: 'Mumbai, India',
        category: 'Goods',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'Mahindra Groups',
        location: 'Banglore, india',
        category: 'Automotive',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'Maruti Sukuzi Motors',
        location: 'Delhi,India',
        category: 'Automotive',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'Tata Motors',
        location: 'Gujarat,India',
        category: 'Automotive',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'Sony Coporation',
        location: 'Jaipur,India',
        category: 'Electronics',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'Samsung',
        location: 'Noida,India',
        category: 'Electronics',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'TCS',
        location: 'Pune,India',
        category: 'IT Industry',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'Infosys',
        location: 'Bangalore,India',
        category: 'IT Industry',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'Wipro',
        location: 'Pune,India',
        category: 'IT Industry',
        imgSrc: 'img/com-logo-5.jpg',
      },
      {
        title: 'Accenture',
        location: 'Pune,India',
        category: 'IT Industry',
        imgSrc: 'img/com-logo-5.jpg',
      },
  ];
  

  const searchForm = document.getElementById('searchForm');
  const jobItemsContainer = document.getElementById('jobItemsContainer');
  displayResults(searchData);  
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    const keyword = document.getElementById('keywordInput').value.toLowerCase();
    const category = document.getElementById('categorySelect').value;
    const location = document.getElementById('locationInput').value.toLowerCase();
  
    const filteredResults = searchData.filter(function (item) {
      const itemKeyword = item.title.toLowerCase();
      const itemCategory = category ? item.category === category : true;
      const itemLocation = item.location.toLowerCase();
  
      return itemKeyword.includes(keyword) && itemCategory && itemLocation.includes(location);
    });
  
    if (keyword || category || location) {
      displayResults(filteredResults);
    } else {
      displayResults(searchData);
    }
  });
  
  function displayResults(results) {
    jobItemsContainer.innerHTML = ''; // Clear previous results
  
    if (results.length === 0) {
      jobItemsContainer.innerHTML = '<p class="text-center">No results found.</p>';
      return;
    }
  
    results.forEach(function (result) {
      const jobItem = document.createElement('div');
      jobItem.classList.add('job-item', 'p-4', 'mb-4');
  
      const row = document.createElement('div');
      row.classList.add('row', 'g-4');
  
      const col1 = document.createElement('div');
      col1.classList.add('col-sm-12', 'col-md-8', 'd-flex', 'align-items-center');
  
      const img = document.createElement('img');
      img.classList.add('flex-shrink-0', 'img-fluid', 'border', 'rounded');
      img.src = result.imgSrc;
      img.alt = '';
  
      const jobDetails = document.createElement('div');
      jobDetails.classList.add('text-start', 'ps-4');
  
      const title = document.createElement('h5');
      title.classList.add('mb-3');
      title.textContent = result.title;
  
      const locationSpan = document.createElement('span');
      locationSpan.classList.add('text-truncate', 'me-3');
      locationSpan.innerHTML = `<i class="fa fa-map-marker-alt text-primary me-2"></i>${result.location}`;
  
      const categorySpan = document.createElement('span');
      categorySpan.classList.add('text-truncate', 'me-3');
      categorySpan.textContent = result.category;
  
      // ... Create and append other job details elements
  
      jobDetails.appendChild(title);
      jobDetails.appendChild(locationSpan);
      jobDetails.appendChild(categorySpan);
      // ... Append other job details elements
  
      col1.appendChild(img);
      col1.appendChild(jobDetails);
  
      row.appendChild(col1);
      // ... Append other columns and elements to row
  
      jobItem.appendChild(row);
      jobItemsContainer.appendChild(jobItem);
    });
  }
  