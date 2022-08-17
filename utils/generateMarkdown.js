let licenseBadge = '';
let licenseLink = '';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license == 'MIT') {
    // Kept license links to make badges clickable too
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (data.license == 'Apache') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (data.license == 'ISC') {
    licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (data.license == 'Unlicense') {
    licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
    licenseBadge = '';
  }
  return licenseBadge
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license == 'MIT') {
    licenseLink = `https://opensource.org/licenses/MIT`;
  } else if (data.license == 'Apache') {
    licenseLink = `https://opensource.org/licenses/Apache-2.0`;
  } else if (data.license == 'ISC') {
    licenseLink = `https://opensource.org/licenses/ISC`;
  } else if (data.license == 'Unlicense') {
    licenseLink = `http://unlicense.org/`;
  } else {
    licenseLink = '';
  }
  return licenseLink

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license !== null || data.license !== undefined) {
    license = data.license;
  } else {
    license ='';
  }
  return `## License: \n${badge}\n${link}`;
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}/n/n


`;
}

module.exports = generateMarkdown;
