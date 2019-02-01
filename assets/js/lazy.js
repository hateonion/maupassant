(function lazyLoad(){
  const imageToLazy = document.querySelectorAll('.lazy-container img[data-src]');
  const loadImage = function (image) {
    image.setAttribute('src', image.getAttribute('data-src'));
  }


  const intersectionObserver = new IntersectionObserver(function(items, observer) {
    items.forEach(function(item) {
      if(item.isIntersecting) {
        loadImage(item.target);
        observer.unobserve(item.target);
      }
    });
  });

  imageToLazy.forEach(function(image){
    intersectionObserver.observe(image);
  })
})()
