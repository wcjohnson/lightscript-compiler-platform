import standalone from '@babel/standalone';

var { version, transform, transformFromAst, availablePlugins, availablePresets, registerPlugins, registerPresets } = standalone;

export function getToolImplementation(api) {
  return api.makeCompilerPlatform({
    transformSync: transform,
    transformFromAstSync: transformFromAst,
    getAvailablePlugins: function() { return availablePlugins; },
    getAvailablePresets: function() { return availablePresets; },
    version: version,
    registerPlugins,
    registerPresets
  })
};
