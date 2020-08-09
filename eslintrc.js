module.exports = {
    extends: ['prettier'],
    plugins: ['prettier'],
    settings: {
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
        'import/extensions': ['.ts'],
    }
};