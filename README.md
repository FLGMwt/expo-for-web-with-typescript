# expo-for-web-with-typescript

Minimal setup for Typescript in the experimental Web support for Expo.

Requires modifying expo-cli's webpack config in two places (line numbers for expo-cli version 2.13.0):

- /usr/local/lib/node_modules/expo-cli/node_modules/@expo/webpack-config/webpack/createBabelConfig.js (https://github.com/expo/expo-cli/blob/master/packages/webpack-config/webpack/createBabelConfig.js#L15)

Change line #15 from

```
test: /\.jsx?$/,
```

to:

```
test: /\.(t|j)sx?$/,
```

- /usr/local/lib/node_modules/expo-cli/node_modules/@expo/webpack-config/webpack/webpack.common.js (https://github.com/expo/expo-cli/blob/master/packages/webpack-config/webpack/webpack.common.js#L262)

Change line 168 from:

```
extensions: ['.web.js', '.js', '.jsx', '.json'],
```

to:

```
extensions: [".web.js", ".js", ".jsx", ".json", ".tsx", ".ts"],
```
