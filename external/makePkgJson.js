// Create NPM module including everything
var path = require('path')
var fs = require('fs')
var assert = require('assert')

var pluginJson = require('@lightscript/transform/package.json')
var presetJson = require('@lightscript/babel-preset/package.json')

assert(pluginJson.version == presetJson.version)

var pkgJson = {
  name: "@lightscript/webpacked",
  version: pluginJson.version,
  license: "MIT",
  description: "Webpacked Lightscript plugins for use via unpkg.",
  publishConfig: {
    access: "public"
  }
}

fs.writeFileSync(path.join(__dirname, 'output', 'package.json'), JSON.stringify(pkgJson, null, 2))
