# ayla/eslint-config
reference with (antfu/eslint-config)[https://github.com/antfu/eslint-config] but more suitable for the current project.
## Usage

### Install

```bash
pnpm add -D eslint @antfu/eslint-config
```
### Config `.eslintrc`

```json
{
  "extends": "@ayla"
}
```
### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```