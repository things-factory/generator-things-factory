/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const _ = require('lodash')

module.exports = class extends Generator {
  prompting() {
    this.log(yosay('Welcome to the smashing ' + chalk.red('generator-things-factory:base-module') + ' generator!'))

    const prompts = [
      {
        type: 'input',
        name: 'moduleName',
        message: 'Your things-factory base-module name?',
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
      this.props.camelCaseModuleName = _.camelCase(props.moduleName)
      this.props.upperSnakeCaseModuleName = _.snakeCase(props.moduleName).toUpperCase()
      this.props.classifiedModuleName = _.upperFirst(_.camelCase(props.moduleName))
    })
  }

  writing() {
    var tpl = this.props

    this.fs.copyTpl(
      [this.templatePath() + '/**', this.templatePath() + '/**/.*', '!**/{.DS_Store,_*}/**'],
      this.destinationPath(),
      tpl
    )

    this.fs.copyTpl(this.templatePath('_gitignore'), this.destinationPath('.gitignore'), tpl)
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    })
  }
}
