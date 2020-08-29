function generateMarkdown(data) {
  return `

var result = str.link(""); 

# ${data.title}

## Description

${data.Description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Testing](#testing)

*[Demo](#GIF)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

## Tests

${data.tests}


`;
}

module.exports = generateMarkdown;
