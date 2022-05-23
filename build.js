'use strict';

import chalk from 'chalk';
import boxen from 'boxen';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define options for Boxen
const options = {
    title: chalk.bold.blueBright('Scott Geleas'),
    titleAlignment: 'center',
    borderStyle: 'round',
    float: 'center',
    padding: 1,
    margin: 1,
};

const data = {
    work: chalk.white(
        'Teaching Assistant ' + chalk.bold.italic('@') + ' Trilogy Education'
    ),
    // twitter: chalk.gray('https://twitter.com/') + chalk.cyan('bitandbang'),
    github: chalk.gray.italic('https://github.com/') + chalk.red('scottgeleas'),
    linkedin:
        chalk.gray.italic('https://linkedin.com/in/') +
        chalk.blueBright('scottgeleas'),
    web: chalk.gray.italic(
        'https://' +
            chalk.green('scottgeleas') +
            '.github.io/' +
            chalk.magenta('React-Portfolio') +
            '/'
    ),

    labelWork: chalk.white.bold('       Work:'),
    // labelTwitter: chalk.white.bold('       Twitter:'),
    labelGitHub: chalk.white.bold('     GitHub:'),
    labelLinkedIn: chalk.white.bold('   LinkedIn:'),
    labelWeb: chalk.white.bold('    Website:'),
};

const newline = '\n';
const work = `${data.labelWork}  ${data.work}`;
// const twittering = `${data.labelTwitter}  ${data.twitter}`
// const npming = `${data.labelnpm}  ${data.npm}`
const github = `${data.labelGitHub}  ${data.github}`;
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`;
const web = `${data.labelWeb}  ${data.web}`;

const output = work + newline + github + newline + linkedin + newline + web;

fs.writeFileSync(
    path.join(__dirname, 'bin/output'),
    chalk.white(boxen(output, options))
);
