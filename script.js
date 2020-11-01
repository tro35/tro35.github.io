let data = {
    photo: 'Images/100_0448.JPG',
    title: 'Sea view',
    description: 'Crete south coast'
  };
let data1 = {
    photo: 'Images/100_0474.JPG',
    title: 'Infinity pool',
    description: 'View from pool at Kakkos Bay'
  };  

let data2 = {
    photo: 'Images/100_0541.JPG',
    title: 'Minoan palace',
    description: 'Trip to Minoan palace 1500 B.C., Crete'
  };  

  
let currentPhoto = 0;
let imagesData = [data, data1, data2];
/*$('#picture').attr('src', imagesData[currentPhoto].photo);*/

let loadPhoto = (photoNumber) => {
    $('#picture').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
  }


loadPhoto(currentPhoto);

$('#buttonr').click(() => {
  if(currentPhoto < imagesData.length-1){
    currentPhoto++;}
  loadPhoto(currentPhoto);
})

$('#buttonl').click(() => {
    if(currentPhoto >= 1){
    currentPhoto--;}
    loadPhoto(currentPhoto);
  })


  imagesData.forEach((item, index) => {
    $('.thumbnails_container').append(`<div class="thumbnail" > <img src="${item.photo}" class="thumbnail_image" data-index="${index}" > </div>`);
    $('.thumbnail').click((event) => {
      let indexClicked = $(event.target).attr('data-index');
      // indexClicked is now a string! if you need it as a number you have to change it
      // because for example "1" + 1 is going to be "11" and not 2
      let numberIndex = parseInt(indexClicked);
      
      // now numberIndex is a number
      loadPhoto(numberIndex);
    });
  });
  
  /*images.forEach((item, index) => {
    $('.thumbnail_container').append(`<div class="thumbnail"><div class="title_container"><div class="title">${dataImages[index].title}</div></div><img  
    src="${item}" class="thumbnail_image" data-index="${index}"></div>`);
    $('.thumbnail_image').click(event => {

        let indexClicked = $(event.target).attr('data-index');
        loadPhoto(indexClicked);
    });

});*/
