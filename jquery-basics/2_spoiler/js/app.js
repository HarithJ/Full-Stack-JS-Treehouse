// create a spoiler reveler button
// the dollar sign is not required, but it helps to distinguish between jquery created elemtents
// from other vars
const $button = $('<button>Reveal Spoiler</button>');

//append to the DOM
$('.spoiler').append($button);

$('.spoiler span').hide();

// listen for event on the element of spoiler class.
// if the element is button then do something
$('.spoiler').on('click', 'button', (event) => {
  $(event.target).prev().show();
  $(event.target).hide();
});
