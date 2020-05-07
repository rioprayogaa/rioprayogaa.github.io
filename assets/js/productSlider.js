new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

  new Glider(document.querySelector('.glider2'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
  
    arrows: {
      prev: '.prevNearby',
      next: '.nextNearby'
    }
  });
 
  new Glider(document.querySelector('.glider3'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
  
    arrows: {
      prev: '.prevBig',
      next: '.nextBig'
    }
  });

  new Glider(document.querySelector('.glider4'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
  
    arrows: {
      prev: '.prevSmall',
      next: '.nextSmall'
    }
  });