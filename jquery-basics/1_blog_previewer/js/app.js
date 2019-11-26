$('#flashMessage').hide()

$('#previewButton').click(() => {
  const title = $('#blogTitleInput').val();
  const blogContent = $('#blogContentInput').val();

  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').text(blogContent);

  $('#flashMessage')
    .fadeIn(1000)
    .delay(4000)
    .slideUp();
});
