const fs = require('fs');

function replaceValues(htmlToRender, values) {
  // loop through all the keys in values
  for(let key in values) {
    htmlToRender = htmlToRender.replace('{{' + key + '}}', values[key]);
  }

  return htmlToRender
}

function view(template, values, response) {
  // read template file
  htmlToRender = fs.readFileSync('views/' + template + '.html', {encoding: 'UTF-8'});

  // replace values
  htmlToRender = replaceValues(htmlToRender, values)

  // write to output
  response.write(htmlToRender);
}

module.exports.view = view;
