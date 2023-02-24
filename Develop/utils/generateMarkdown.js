// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  [![License, MIT]
  (`https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT`)]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.licence !== 'none') {
    return (`[![License: ${license.license}]https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT`);
  } else {
    return '';
  }}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ${data.username}
  ${data.Description}

`;
}

module.exports = generateMarkdown;
