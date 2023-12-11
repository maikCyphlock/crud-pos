module.exports = {
  parserOptions: {
    project: 'tsconfig.eslint.json'
    // ... el resto de tu configuración ...
  },
  overrides: [
    {
      files: ['*.js', '*.ts'],
      extends: 'standard-with-typescript'
    }
  ]
}
