# @aylaweb/eslint-config-basic

reference with [antfu/eslint-config](https://github.com/antfu/eslint-config) but more suitable for the current project.

## Usage

### Install

```bash
npx add -D eslint @aylaweb/eslint-config-basic
```

### Config `.eslintrc`

```json
{
  "extends": "@aylaweb/eslint-config-basic"
}
```

### add .prettierrc in root

```json
{
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false,
  "arrowParens": "avoid"
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### additional packages

- rimraf
- nr
- bumpp
