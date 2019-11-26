const $checkbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');
const $secureLinks = $('a[href^="https://"]')
const $pdfs = $('a[href$=".pdf"]');

$('#links').append($checkbox);

$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

// when a pdf link is clicked
$pdfs.on('click', (event) => {
  // if the checkbox has not been checked
  if ($(':checked').length === 0) {
    // do nothing
    event.preventDefault();
    //alert the user to check the checkbox
    alert('Please check the download pdf checkbox to download the pdf');
  }
});

// Arrow functions do not establish a value for "this" like conventional functions do.
// for each link
$('a').each(function(){
  // get its URL
  const url = $(this).attr('href');

  //append the URL next to link
  $(this).parent().append(`(${url})`);
});
