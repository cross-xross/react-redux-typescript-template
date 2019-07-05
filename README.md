# React + Redux with TypeScriptのお手本構成

## 構成技術
- React: 16.8.6
- Redux: 4.0.1
- TypeScript: 3.5.2

## ディレクトリ構成

```
-src/
　├ __tests__/
　├ actions/
　├ containers/
　├ reducers/
　├ store/
　└ views/
```

## ポイント

- Container ComponentとPresentation Componentの分離
  - Redux連携しつつもPresentation ComponentはReact非依存に保つ