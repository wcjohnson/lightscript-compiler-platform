import * as transform from '@lightscript/transform';

var api = transform.api;
var plugin = transform.default;

export function getToolImplementation(toolApi) {
  var metadata = api.tooling.getCompilerMetadata();

  return toolApi.wrapLscPlugin({
    plugin: plugin,
    version: metadata.version,
    options: metadata.options
  })
};
