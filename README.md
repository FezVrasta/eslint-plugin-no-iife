# @fezvrasta/eslint-plugin-no-iife

## Usage

```
{
  "plugins": ["@fezvrasta/eslint-plugin-no-iife"],
  "rules": {
    "@fezvrasta/no-iife/no-iife": "error"
  }
}
```

## Invalid

```
(function() {
  return 'x';
})();

const x = (function() {})();

(() => {});
```
