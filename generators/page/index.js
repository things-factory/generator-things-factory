'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const _ = require('lodash')

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the smashing ' + chalk.red('generator-things-factory:page') + ' generator!'))

    const prompts = [
      {
        type: 'input',
        name: 'pageName',
        message: 'Your things-factory page name?'
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
      this.props.classifiedPageName = _.upperFirst(_.camelCase(props.pageName))
      this.props.camelCasePageName = _.camelCase(props.pageName)
      this.props.fullModuleName = this.fs.readJSON(this.destinationPath('./package.json')).name

      this.props.moduleName = this.props.fullModuleName.replace('@things-factory/', '')

      this.props.camelCaseModuleName = _.camelCase(this.props.moduleName)
      this.props.classifiedModuleName = _.upperFirst(_.camelCase(this.props.moduleName))
    })
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_page.js'),
      this.destinationPath('src/pages/' + this.props.pageName + '.js'),
      this.props
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
