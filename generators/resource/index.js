/*
 * Copyright © HatioLab Inc. All rights reserved.
 */

'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const pluralize = require('pluralize')
const _ = require('lodash')
const babylon = require('babylon')
const traverse = require('babel-traverse').default
const types = require('babel-types')
const generate = require('babel-generator').default

const isImportDeclaration = path =>
  types.isImportDeclaration(path.node) ||
  types.isImportSpecifier(path.parent) ||
  types.isImportDeclaration(path.parent) ||
  types.isImportSpecifier(path.parent) ||
  types.isImportDefaultSpecifier(path.parent)

module.exports = class extends Generator {
  prompting() {
    this.log(yosay('Welcome to the smashing ' + chalk.red('generator-things-factory:resource') + ' generator!'))

    const prompts = [
      {
        type: 'input',
        name: 'resourceName',
        message: 'Your things-factory resource name?'
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
      this.props.pluralResourceName = pluralize(props.resourceName)
      this.props.camelCaseResourceName = _.camelCase(props.resourceName)
      this.props.pluralCamelCaseResourceName = _.camelCase(props.pluralResourceName)
      this.props.upperSnakeCaseResourceName = _.snakeCase(props.resourceName).toUpperCase()
      this.props.classifiedResourceName = _.upperFirst(_.camelCase(props.resourceName))
      this.props.pluralClassifiedResourceName = pluralize(_.upperFirst(_.camelCase(props.resourceName)))
      this.props.timestamped = String(Date.now())
    })
  }

  writing() {
    var { resourceName, classifiedResourceName, pluralResourceName, timestamped } = this.props

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
      this.templatePath('server/graphql/resolvers/_resource/_delete-resources.ts'),
      this.destinationPath('server/graphql/resolvers/' + resourceName + '/delete-' + pluralResourceName + '.ts'),
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
      this.templatePath('server/graphql/resolvers/_resource/_update-resource.ts'),
      this.destinationPath('server/graphql/resolvers/' + resourceName + '/update-' + resourceName + '.ts'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('server/graphql/resolvers/_resource/_update-multiple-resource.ts'),
      this.destinationPath('server/graphql/resolvers/' + resourceName + '/update-multiple' + resourceName + '.ts'),
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

    this.fs.copyTpl(
      this.templatePath('server/graphql/types/_resource/_resource-list.ts'),
      this.destinationPath('server/graphql/types/' + resourceName + '/' + resourceName + '-list.ts'),
      this.props
    )

    /* migrations */
    this.fs.copyTpl(
      this.templatePath('server/migrations/_timestamped-SeedResource.ts'),
      this.destinationPath('server/migrations/' + timestamped + '-Seed' + classifiedResourceName + '.ts'),
      this.props
    )
  }

  // writingEntitiesIndex() {
  //   var tpl = this.props

  //   // TODO create index.ts if not exist 'index.ts'
  //   const source = this.fs.read(this.destinationPath('server/entities/index.ts'))

  //   const ast = babylon.parse(source, {
  //     sourceType: 'module'
  //   })

  //   const declaration = types.importDeclaration(
  //     [types.importSpecifier()][types.importDefaultSpecifier(types.identifier(tpl.classifiedResourceName))],
  //     types.stringLiteral(`./${tpl.resourceName}`)
  //   )

  //   let lastImport = null
  //   let firstExport = null
  //   let doneImport = false
  //   let doneExport = false

  //   traverse(ast, {
  //     enter(path) {
  //       if (!doneImport) {
  //         if (lastImport && !isImportDeclaration(path)) {
  //           lastImport.insertAfter(declaration)
  //           doneImport = true
  //         } else if (firstExport) {
  //           firstExport.insertBefore(declaration)
  //           doneImport = true
  //         }
  //       }
  //     },

  //     ImportDeclaration(path) {
  //       lastImport = path
  //     },

  //     ExportDefaultDeclaration(path) {
  //       if (!firstExport) {
  //         firstExport = path
  //       }
  //     },

  //     ArrayExpression(path) {
  //       if (!doneExport && firstExport) {
  //         path.node.elements.push(types.identifier(tpl.classifiedResourceName))
  //         doneExport = true
  //       }
  //     }
  //   })

  //   // Generate actually source code from modified AST
  //   const { code } = generate(
  //     ast,
  //     {
  //       /* Options */
  //     },
  //     source
  //   )

  //   // Write source back to file
  //   this.fs.write(this.destinationPath('server/entities/index.ts'), code)
  // }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    })
  }
}
