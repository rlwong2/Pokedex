module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "env": {
    "development": {
      "plugins": [
        [
          "babel-plugin-styled-components",
          {
            "fileName": false
          }
        ]
      ]
    },
    "production": {
      "plugins": [
        [
          "babel-plugin-styled-components",
          {
            "fileName": false
          }
        ]
      ]
    },
    "test": {
      "plugins": [
        "babel-plugin-styled-components",
        {
          "displayName": false
        }
      ]
    }
  }
}