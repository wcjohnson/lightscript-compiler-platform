import plugin from '@oigroup/babel-plugin-lightscript';
import { getMetadata } from '@oigroup/babel-plugin-lightscript/lib/config.js'

export function getToolImplementation(toolApi) {
  var metadata = getMetadata();

  return toolApi.wrapLscPlugin({
    plugin: plugin,
    metadata: metadata,
    version: metadata.version,
    options: metadata.options
  })
}
