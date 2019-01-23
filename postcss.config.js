module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'default',
        }),
        require('postcss-hash')({
            algorithm: 'sha256',
            trim: 20,
            manifest: './data/manifest.json'
        }),
        require('postcss-import')({})
    ],
};
