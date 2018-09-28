module.exports = {
  "presets": [
    [
      "@lightscript",
      {
        "env": {
          "targets": { "node": 8, "ie": 11 }
        }
      }
    ]
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}
