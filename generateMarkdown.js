function generateMarkdown(data) {
  return `

var result = str.link(""); 

# ${data.title}

## Description

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Testing](#testing)

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
