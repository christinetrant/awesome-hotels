let bookNowBtn = document.querySelectorAll('.bookNowBtn');
const searchBtn = document.getElementById('searchBtn');

bookTrip = e => {
  e.preventDefault();
  console.log('ooh where are we going?');
};

searchTrip = e => {
  e.preventDefault();
  console.log("Let's have a look");
};

bookNowBtn.forEach(btn => {
  btn.addEventListener('click', bookTrip);
});

searchBtn.addEventListener('click', searchTrip);
