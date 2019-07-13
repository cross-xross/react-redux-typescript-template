# React + Redux with TypeScript のお手本構成

## 構成技術

- React: 16.8.6
- Redux: 4.0.1
- Redux-Thunk: 2.3.0
- TypeScript: 3.5.2
- TsLint: 5.18.0
- Prettier: 1.18.2
- Enzyme: 3.10.0

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

- Container Component と Presentation Component の分離
  - Redux 連携しつつも Presentation Component は React 非依存に保つ
