import plugin from '@oigroup/babel-plugin-lightscript';

export function getToolImplementation(toolApi) {
  return toolApi.wrapLscPlugin({
    plugin: plugin,
    version: '1.1.0',
    options: {}
  })
}
