/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const path = require('path')

function classname(str) {
  return str
    .replace(/-/g, ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return letter.toUpperCase()
    })
    .replace(/\s+/g, '')
}

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        'Welcome to the smashing ' +
          chalk.red('generator-things-factory:app') +
          ' generator!'
      )
    )

    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'Your things-factory app name?',
        default: this.appname.replace(/ /g, '-')
      },
      {
        type: 'input',
        name: 'username',
        message: "What's your Github username",
        store: true
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
    })
  }

  writing() {
    var tpl = this.props

    this.fs.copyTpl(
      [
        this.templatePath() + '/**',
        this.templatePath() + '/**/.*',
        '!**/{.DS_Store,_*}/**'
      ],
      this.destinationPath(),
      tpl
    )

    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'),
      tpl
    )
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    })
  }
}
