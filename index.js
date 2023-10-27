
const pointsArr = [];
const pointsAll = document.querySelectorAll('.points');
pointsAll.forEach(function(element){
    pointsArr.push(element);
    element.addEventListener('click', function(){
        currentImageIndex = pointsArr.indexOf(element);
        changeSlide(currentImageIndex)

    })
})

const titlesArr = [];
const titles = document.querySelectorAll('.projspisok');
titles.forEach(function(element){
    titlesArr.push(element);
    element.addEventListener('click', function(){
        currentImageIndex = titlesArr.indexOf(element);
        changeSlide(currentImageIndex)

    })
})

const newImages = [
    
{img:'images/image1.png',
city:'Rostov-on-Don <br>LCD admiral',
area:'81 m2',
time:'3.5 months',
cost:'Upon request',
points: pointsArr[0],
titles: titlesArr[0]
}
   ,
         {img:'images/image2.png',
         city:'Sochi <br>Thieves',
         area:'105 m2',
         time:'4 months',
         cost:'Upon request',
         points: pointsArr[1],
         titles: titlesArr[1]
        }
    ,   
        {img:'images/image3.png',
        city:'Rostov-on-Don <br>Patriotic',
        area:'93 m2',
        time:'3 months',
        cost:'Upon request',
        points: pointsArr[2], 
        titles: titlesArr[2]
    }
  ]
  
  const image = document.querySelector('.projphoto')
  const cityText = document.getElementById('cityText')
  const areaText = document.getElementById('areaText')
  const timeText = document.getElementById('timeText')
  const costText = document.getElementById('costText')
  const prevButton = document.querySelector('.leftarrow')
  const nextButton = document.querySelector('.rightarrow')
  const points = document.querySelector('.points')

  let currentImageIndex = 0


  let changeColor = function (index) {
    newImages.forEach(element => {
        element.titles.classList.remove('chosen');
    })
    newImages[index].titles.classList.add('chosen');
  }

  let changePoint = function (index) {
    newImages.forEach(element => {
        element.points.src = 'images/gray.svg';
    })
    newImages[index].points.src = 'images/white.svg';
  }
  
  
  let changeSlide = function (currentImageIndex) {
    image.src = newImages[currentImageIndex].img;
    cityText.innerHTML = newImages[currentImageIndex].city;
    timeText.innerHTML = newImages[currentImageIndex].time;
    costText.innerHTML = newImages[currentImageIndex].cost;
    areaText.innerHTML = newImages[currentImageIndex].area;
    changeColor(currentImageIndex);
    changePoint(currentImageIndex);

  }
  nextButton.addEventListener("click", function () {
    console.log('click!');
    currentImageIndex++;
    if (currentImageIndex >= newImages.length) {
        currentImageIndex = 0;
    };
    changeSlide(currentImageIndex)

});

prevButton.addEventListener("click", function () {
   
    console.log('click!');
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = newImages.length-1;
    };
    changeSlide(currentImageIndex)
});

