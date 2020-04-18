# generator-things-factory [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

>

## Installation

First, install [Yeoman](http://yeoman.io) and generator-things-factory using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-things-factory
```

To generate your new things-factory application project:

```bash
yo things-factory:app
```

To generate your new things-factory base-module project:

```bash
yo things-factory:base-module
```

To generate your new things-factory ui-module project:

```bash
yo things-factory:ui-module
```

To generate your new things-factory resource:

```bash
yo things-factory:resource
```

To generate your new things-factory page:

```bash
yo things-factory:page
```

## 로컬로 인스톨하는 경우 (generator-things-factory 개발시 권장)

먼저, https://github.com/hatiolab/generator-things-factory 로부터 generator-things-factory 프로젝트를 설치한다.

로컬에 설치된 generator-things-factory 폴더에서 npm link 를 실행한다.

```
$ mkdir xxx-yyy # 원하는 모듈 이름의 폴더를 만든다.
$ cd xxx-yyy    # 폴더로 이동한다.
$ yo things-factory:app  # 어플리케이션을 만든다.
```

## Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

EULA © [Hatiolab](http://things-factory.hatiolab.com/EULA/)

[npm-image]: https://badge.fury.io/js/generator-things-factory.svg
[npm-url]: https://npmjs.org/package/generator-things-factory
[travis-image]: https://travis-ci.org/heartyoh/generator-things-factory.svg?branch=master
[travis-url]: https://travis-ci.org/heartyoh/generator-things-factory
[daviddm-image]: https://david-dm.org/heartyoh/generator-things-factory.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/heartyoh/generator-things-factory
[coveralls-image]: https://coveralls.io/repos/heartyoh/generator-things-factory/badge.svg
[coveralls-url]: https://coveralls.io/r/heartyoh/generator-things-factory
