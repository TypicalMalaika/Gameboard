var main = function() {

  $('more-btn').on('click', (event) => {
    $(event.currentTarget).siblings('.more-menu').toggle();
  })
  
  $('.share').on('click', (event) => {
    $(event.currentTarget).next().toggle();
  })

  $('.notification').on('click', (event) => {
    $(event.currentTarget).toggleclass('active');
  })
};

$(document).ready(main);
