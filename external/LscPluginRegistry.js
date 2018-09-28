export function getToolImplementation(toolApi) {
  var babel7 = {
    type: 'remote',
    url: 'https://wcjohnson.github.io/lightscript-compiler/modules/platform/babel-7.1.0.min.js'
  };

  return toolApi.lscToolchains({
    versions: [
      // 4.0.0-alpha.12
      {
        name: '4.0.0-alpha.12',
        babel: babel7,
        lscPlugin: {
          type: 'remote',
          url: 'https://wcjohnson.github.io/lightscript-compiler/modules/compiler/4.0.0-alpha.12.min.js'
        }
      }
    ]
  });
};
