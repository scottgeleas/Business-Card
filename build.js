'use strict';

import chalk from 'chalk';
import boxen from 'boxen';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    title: chalk.white.bold('Scott Geleas'),
    titleAlignment: 'center',
    borderStyle: 'round',
    padding: 1,
    margin: 1,
};

const data = {
    work: chalk.white(
        'Teaching Assistant' + ' @ ' + chalk.italic('Trilogy Education')
    ),
    github:
        chalk.gray.italic('https://github.com/') +
        chalk.greenBright.italic('scottgeleas'),
    linkedin:
        chalk.gray.italic('https://linkedin.com/in/') +
        chalk.blue.italic('scottgeleas'),
    web: chalk.gray.italic(
        'https://scottgeleas.github.io/' +
            chalk.magentaBright.italic('React-Portfolio') +
            '/'
    ),
    npm:
        chalk.gray.italic('https://www.npmjs.com/~') +
        chalk.redBright.italic('stazimo'),

    labelWork: chalk.white.bold('       Work:'),
    labelGitHub: chalk.white.bold('     GitHub:'),
    labelLinkedIn: chalk.white.bold('   LinkedIn:'),
    labelWeb: chalk.white.bold('    Website:'),
    labelNpm: chalk.white.bold('        npm:'),
};

const newline = '\n';
const work = `${data.labelWork}  ${data.work}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`;
const web = `${data.labelWeb}  ${data.web}`;
const npm = `${data.labelNpm}  ${data.npm}`;

const output =
    work +
    newline +
    github +
    newline +
    linkedin +
    newline +
    web +
    newline +
    npm;

fs.writeFileSync(
    path.join(__dirname, 'bin/output'),
    chalk.gray(boxen(output, options))
);
