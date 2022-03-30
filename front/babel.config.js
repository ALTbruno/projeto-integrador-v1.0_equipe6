/* module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
}; */
module.exports = {
    presets: ["@babel/preset-react", "@babel/preset-env"],
    plugins: [
        'babel-plugin-transform-import-meta',
    ],
};
