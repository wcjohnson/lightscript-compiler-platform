import preset from '@lightscript/babel-preset';
import packageMetadata from '@lightscript/babel-preset/package.json'

export function getToolImplementation(toolApi) {
  return toolApi.wrapLscPreset({
    preset: preset,
    version: packageMetadata.version
  })
}
