/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const pluralize = require('pluralize')
const _ = require('lodash')

module.exports = class extends Generator {
  prompting() {
    this.log(yosay('Welcome to the smashing ' + chalk.red('generator-things-factory:resource') + ' generator!'))

    const prompts = [
      {
        type: 'input',
        name: 'resourceName',
        message: 'Your things-factory resource name?',
        default: this.appname.toLowerCase().replace(/ /g, '-')
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
      this.props.pluralResourceName = pluralize(props.resourceName)
      this.props.camelCaseResourceName = _.camelCase(props.resourceName)
      this.props.pluralCamelCaseRsourceName = _.camelCase(props.pluralResourceName)
      this.props.upperSnakeCaseResourceName = _.snakeCase(props.resourceName).toUpperCase()
      this.props.classifiedResourceName = _.upperFirst(_.camelCase(props.resourceName))
      this.props.timestamped = String(Date.now())
    })
  }

  writing() {
    var { resourceName, classifiedResourceName, pluralResourceName } = this.props

    /* entities folder */
    this.fs.copyTpl(
      this.templatePath('server/entities/_resource.ts'),
      this.destinationPath('server/entities/' + resourceName + '.ts'),
      this.props
    )

    /* resolvers folder */
    this.fs.copyTpl(
      this.templatePath('server/graphql/resolvers/_resource/_create-resource.ts'),
      this.destinationPath('server/graphql/resolvers/' + resourceName + '/create-' + resourceName + '.ts'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('server/graphql/resolvers/_resource/_delete-resource.ts'),
      this.destinationPath('server/graphql/resolvers/' + resourceName + '/delete-' + resourceName + '.ts'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('server/graphql/resolvers/_resource/_resource.ts'),
      this.destinationPath('server/graphql/resolvers/' + resourceName + '/' + resourceName + '.ts'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('server/graphql/resolvers/_resource/_resources.ts'),
      this.destinationPath('server/graphql/resolvers/' + resourceName + '/' + pluralResourceName + '.ts'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('server/graphql/resolvers/_resource/_update-resources.ts'),
      this.destinationPath('server/graphql/resolvers/' + resourceName + '/update-' + pluralResourceName + '.ts'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('server/graphql/resolvers/_resource/index.ts'),
      this.destinationPath('server/graphql/resolvers/' + resourceName + '/index.ts'),
      this.props
    )

    /* types folder */
    this.fs.copyTpl(
      this.templatePath('server/graphql/types/_resource/_new-resource.ts'),
      this.destinationPath('server/graphql/types/' + resourceName + '/new-' + resourceName + '.ts'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('server/graphql/types/_resource/_resource-patch.ts'),
      this.destinationPath('server/graphql/types/' + resourceName + '/' + resourceName + '-patch.ts'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('server/graphql/types/_resource/_resource.ts'),
      this.destinationPath('server/graphql/types/' + resourceName + '/' + resourceName + '.ts'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('server/graphql/types/_resource/index.ts'),
      this.destinationPath('server/graphql/types/' + resourceName + '/index.ts'),
      this.props
    )

    /* migrations */
    this.fs.copyTpl(
      this.templatePath('server/migrations/_timestamped-SeedResource.ts'),
      this.destinationPath('server/migrations/' + String(Date.now()) + '-Seed' + classifiedResourceName + '.ts'),
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
