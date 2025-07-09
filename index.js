#!/usr/bin/env node

import chalk from 'chalk';
import ora from 'ora';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import open from 'open';
import figlet from 'figlet';
import { promisify } from 'util';

const asyncFiglet = promisify(figlet); // ✅ Promisify figlet for use with await

const spinner = ora({
  text: chalk.cyan('🔍 Extracting Information... Please wait'),
  spinner: 'dots',
}).start();

setTimeout(async () => {
  spinner.stop();

  const border = chalk.gray('═'.repeat(60));
  console.log('\n' + border);
  console.log(gradient.pastel(chalk.bold(`👋 Hey there! I'm Sahil Pal\n`)));

  console.log(chalk.bold('💼 Role: ') + 'React Native & Web Developer');
  console.log(chalk.bold('🌐 Website: ') + chalk.underline.blue('https://sahilme.vercel.app/'));
  console.log(chalk.bold('📦 NPM: ') + 'https://www.npmjs.com/sahilnpmi');
  console.log(chalk.bold('🔍 My NPM Packags: ') + 'https://www.npmjs.com/settings/sahilnpmi/packages');
  console.log(chalk.bold('🐙 GitHub: ') + 'https://github.com/sahilforkshere');
  console.log(chalk.bold('📧 Email: ') + 'paalsahil04@gmail.com\n');
  console.log(chalk.bold('🛠 Skills: ') + 'React Native · React · Node.js · WebSockets · Firebase · MongoDB · TypeScript · NPM · SQL · PostgreSQL · Three.js');
  console.log(chalk.bold('📱 Mobile: ') + 'Building apps for Android & iOS');
  console.log(chalk.bold('🧠 Learning: ') + 'AI/ML');
  console.log(chalk.bold('🚧 Projects: ') + 'Full-stack apps using modern tech');
  console.log(border);

  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: chalk.yellow('\nWhat would you like to do next?'),
      choices: [
        { name: '🌐 Visit Portfolio Website', value: 'website' },
        { name: '🐙 View GitHub Profile', value: 'github' },
        { name: '📦 Check My NPM Packages', value: 'npm' },
        { name: '❌ Exit', value: 'exit' },
      ],
    },
  ]);

  switch (answer.action) {
    case 'website':
      await open('https://sahilme.vercel.app/');
      break;
    case 'github':
      await open('https://github.com/sahilforkshere');
      break;
    case 'npm':
      await open('https://www.npmjs.com/sahilnpmi');
      break;
    default:
      console.clear();

      // ✅ Use promisified figlet
      const exitBanner = await asyncFiglet('TAKE CARE', {
        font: 'Big',
      });

      console.log(gradient.passion.multiline(exitBanner));

      console.log(chalk.green.bold('\n💚 Thanks for checking out Sahil Pal\'s CLI!'));
      console.log(chalk.green('🌟 Keep building, keep growing.'));

      console.log(chalk.cyan(`
       ${chalk.yellow('   \\')}
        ${chalk.yellow('   \\')}    👨‍💻 
             👍   ${chalk.bold('You’re awesome!')}
      `));

      process.exit();
  }
}, 1800);
