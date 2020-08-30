function generateMarkdown(data) {
  return `
 

# ${data.title}

## Description

${data.Description}

## Table of Contents
  * [Installation](#installation)

  * [Usage](#usage) 

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  * [Demo](#GIF)


## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

* ${data.contributing} 

## Tests

${data.tests}


`;
}

module.exports = generateMarkdown;
