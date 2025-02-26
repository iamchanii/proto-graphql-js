# protoc-gen-nexus

## 0.8.2

### Patch Changes

- [#417](https://github.com/proto-graphql/proto-graphql-js/pull/417) [`2ae48d1`](https://github.com/proto-graphql/proto-graphql-js/commit/2ae48d1576a15a47f3f1083fb78eec69507d601a) Thanks [@izumin5210](https://github.com/izumin5210)! - use protobuf-es@v2 internally

- [#427](https://github.com/proto-graphql/proto-graphql-js/pull/427) [`c681582`](https://github.com/proto-graphql/proto-graphql-js/commit/c681582431637946cebdaa82b9559bb5ab52b760) Thanks [@izumin5210](https://github.com/izumin5210)! - refactor: parse options with protoplugin api

- [#428](https://github.com/proto-graphql/proto-graphql-js/pull/428) [`e3cee38`](https://github.com/proto-graphql/proto-graphql-js/commit/e3cee38438fbb4c0fbd177566aa75e83e11221ed) Thanks [@izumin5210](https://github.com/izumin5210)! - refactor: migrate protoc plugins to ESM

- Updated dependencies [[`2ae48d1`](https://github.com/proto-graphql/proto-graphql-js/commit/2ae48d1576a15a47f3f1083fb78eec69507d601a), [`c681582`](https://github.com/proto-graphql/proto-graphql-js/commit/c681582431637946cebdaa82b9559bb5ab52b760), [`e3cee38`](https://github.com/proto-graphql/proto-graphql-js/commit/e3cee38438fbb4c0fbd177566aa75e83e11221ed)]:
  - @proto-graphql/protoc-plugin-helpers@0.4.2
  - @proto-graphql/codegen-core@0.5.2

## 0.8.1

### Patch Changes

- [#371](https://github.com/proto-graphql/proto-graphql-js/pull/371) [`d8be975`](https://github.com/proto-graphql/proto-graphql-js/commit/d8be975c7e716e11cbfc662ab7518020525b75d7) Thanks [@izumin5210](https://github.com/izumin5210)! - build: set `pulic` to `publishConfig.access`

- Updated dependencies [[`d8be975`](https://github.com/proto-graphql/proto-graphql-js/commit/d8be975c7e716e11cbfc662ab7518020525b75d7)]:
  - @proto-graphql/protoc-plugin-helpers@0.4.1
  - @proto-graphql/proto-descriptors@0.3.5
  - @proto-graphql/codegen-core@0.5.1

## 0.8.0

### Minor Changes

- [#369](https://github.com/proto-graphql/proto-graphql-js/pull/369) [`967ed0e`](https://github.com/proto-graphql/proto-graphql-js/commit/967ed0e5a5a9d8dea7e7ef46a220cc57048844da) Thanks [@izumin5210](https://github.com/izumin5210)! - support protobuf-es@v1 on protoc-gen-pothos

### Patch Changes

- Updated dependencies [[`967ed0e`](https://github.com/proto-graphql/proto-graphql-js/commit/967ed0e5a5a9d8dea7e7ef46a220cc57048844da)]:
  - @proto-graphql/protoc-plugin-helpers@0.4.0
  - @proto-graphql/codegen-core@0.5.0

## 0.7.0

### Minor Changes

- [#349](https://github.com/proto-graphql/proto-graphql-js/pull/349) [`2b3d87f`](https://github.com/proto-graphql/proto-graphql-js/commit/2b3d87fcc05b3ef6ae7921ef8e72a667ec751159) Thanks [@izumin5210](https://github.com/izumin5210)! - generate protobuf options to graphql extensions

- [#346](https://github.com/proto-graphql/proto-graphql-js/pull/346) [`fa1e455`](https://github.com/proto-graphql/proto-graphql-js/commit/fa1e455561e2ea2a80accf7e80e2ff731e80eac6) Thanks [@izumin5210](https://github.com/izumin5210)! - refactor: use `@bufbuild/protoplugin`

- [#310](https://github.com/proto-graphql/proto-graphql-js/pull/310) [`8f7ad44`](https://github.com/proto-graphql/proto-graphql-js/commit/8f7ad44e56356867a3f95c0d08437d31bc4b8f33) Thanks [@izumin5210](https://github.com/izumin5210)! - support scalar option for define custom scalar type mappings instead of legacy option

  BREAKING CHANGE: drop `long_number` and `custom_type` options

  #### Migration

  `long_number` and `custom_type` can be replaced with `scalar`.

  ```patch
   plugins:
     name: pothos
     out: src/__generated__/schema
     opt:
  -    - long_number=Int
  +    - scalar=int64=Int
  +    - scalar=uint64=Int
  +    - scalar=sint64=Int
  +    - scalar=fixed64=Int
  +    - scalar=sfixed64=Int
  +    - scalar=google.protobuf.Int64Value=Int
  +    - scalar=google.protobuf.UInt64Value=Int
  +    - scalar=google.protobuf.SInt64Value=Int
  +    - scalar=google.protobuf.Fixed64Value=Int
  +    - scalar=google.protobuf.SFixed64Value=Int
  ```

  ```patch
   plugins:
     name: pothos
     out: src/__generated__/schema
     opt:
  -    - custom_type=google.type.Date=Date
  +    - scalar=google.type.Date=Date
  ```

### Patch Changes

- [#354](https://github.com/proto-graphql/proto-graphql-js/pull/354) [`0b532bc`](https://github.com/proto-graphql/proto-graphql-js/commit/0b532bcc1fb21d2364a911d2234bd30449804cb6) Thanks [@izumin5210](https://github.com/izumin5210)! - build with tsup

- Updated dependencies [[`9fd6869`](https://github.com/proto-graphql/proto-graphql-js/commit/9fd6869ead97335506076bcb7086a9d561aa4bb9), [`0b532bc`](https://github.com/proto-graphql/proto-graphql-js/commit/0b532bcc1fb21d2364a911d2234bd30449804cb6), [`cb38fa7`](https://github.com/proto-graphql/proto-graphql-js/commit/cb38fa72abf3f1ff2fba0fcfc75d725f63c0ff85), [`2b3d87f`](https://github.com/proto-graphql/proto-graphql-js/commit/2b3d87fcc05b3ef6ae7921ef8e72a667ec751159), [`fa1e455`](https://github.com/proto-graphql/proto-graphql-js/commit/fa1e455561e2ea2a80accf7e80e2ff731e80eac6), [`8f7ad44`](https://github.com/proto-graphql/proto-graphql-js/commit/8f7ad44e56356867a3f95c0d08437d31bc4b8f33), [`1166d7b`](https://github.com/proto-graphql/proto-graphql-js/commit/1166d7bb4e183e06e7964be897a204d864b94381)]:
  - @proto-graphql/codegen-core@0.4.0
  - @proto-graphql/protoc-plugin-helpers@0.3.0
  - @proto-graphql/proto-descriptors@0.3.4

## 0.6.6

### Patch Changes

- Updated dependencies [[`16b1fac`](https://github.com/proto-graphql/proto-graphql-js/commit/16b1facf48cae5ceb959bf3e81643b7fc58011fc)]:
  - @proto-graphql/codegen-core@0.3.5
  - @proto-graphql/protoc-plugin-helpers@0.2.7

## 0.6.5

### Patch Changes

- [#308](https://github.com/proto-graphql/proto-graphql-js/pull/308) [`5a650c6`](https://github.com/proto-graphql/proto-graphql-js/commit/5a650c6ace5f6132a7dcfd76be8c2c45d84611ab) Thanks [@izumin5210](https://github.com/izumin5210)! - redo the last release

- Updated dependencies [[`5a650c6`](https://github.com/proto-graphql/proto-graphql-js/commit/5a650c6ace5f6132a7dcfd76be8c2c45d84611ab)]:
  - @proto-graphql/codegen-core@0.3.4
  - @proto-graphql/proto-descriptors@0.3.3
  - @proto-graphql/protoc-plugin-helpers@0.2.6

## 0.6.4

### Patch Changes

- [#294](https://github.com/proto-graphql/proto-graphql-js/pull/294) [`709c7da`](https://github.com/proto-graphql/proto-graphql-js/commit/709c7da021fb503efeaa7ec4a3485fd166204563) Thanks [@izumin5210](https://github.com/izumin5210)! - refer internal dependencies with `workspace:`

- Updated dependencies [[`709c7da`](https://github.com/proto-graphql/proto-graphql-js/commit/709c7da021fb503efeaa7ec4a3485fd166204563), [`fc4512a`](https://github.com/proto-graphql/proto-graphql-js/commit/fc4512a1db42b7bbc4683e6ad4eb9fbf3a6d24f0)]:
  - @proto-graphql/protoc-plugin-helpers@0.2.5
  - @proto-graphql/codegen-core@0.3.3
  - @proto-graphql/proto-descriptors@0.3.2

## 0.6.3

### Patch Changes

- [#274](https://github.com/proto-graphql/proto-graphql-js/pull/274) [`e854e95`](https://github.com/proto-graphql/proto-graphql-js/commit/e854e953d5b22057678224672e95f18bd952513d) Thanks [@qnighy](https://github.com/qnighy)! - Fix regression on skip_resolver

- Updated dependencies [[`ff3638b`](https://github.com/proto-graphql/proto-graphql-js/commit/ff3638b382953cef02df774df0e93fbd991548ee)]:
  - @proto-graphql/protoc-plugin-helpers@0.2.4

## 0.6.2

### Patch Changes

- [#255](https://github.com/proto-graphql/proto-graphql-js/pull/255) [`70295da`](https://github.com/proto-graphql/proto-graphql-js/commit/70295dae5e83a5ee4ee5185e670348c1a88979e2) Thanks [@izumin5210](https://github.com/izumin5210)! - support proto3 optional

- Updated dependencies [[`db7fcec`](https://github.com/proto-graphql/proto-graphql-js/commit/db7fcec7aa987037523388f9fe4ae9b8c3b4c6a4), [`70295da`](https://github.com/proto-graphql/proto-graphql-js/commit/70295dae5e83a5ee4ee5185e670348c1a88979e2)]:
  - @proto-graphql/codegen-core@0.3.2
  - @proto-graphql/proto-descriptors@0.3.1
  - @proto-graphql/protoc-plugin-helpers@0.2.3

## 0.6.1

### Patch Changes

- [#250](https://github.com/proto-graphql/proto-graphql-js/pull/250) [`81b8ead`](https://github.com/proto-graphql/proto-graphql-js/commit/81b8eadbc1c7831bd287e48eb502233ed8126f7e) Thanks [@izumin5210](https://github.com/izumin5210)! - support `(graphql.input_type).ignore` option

- Updated dependencies [[`81b8ead`](https://github.com/proto-graphql/proto-graphql-js/commit/81b8eadbc1c7831bd287e48eb502233ed8126f7e)]:
  - @proto-graphql/codegen-core@0.3.1

## 0.6.0

### Minor Changes

- [#241](https://github.com/proto-graphql/proto-graphql-js/pull/241) [`cef3d3e`](https://github.com/proto-graphql/proto-graphql-js/commit/cef3d3e512e616f98869c12060d592c3ff887aa9) Thanks [@izumin5210](https://github.com/izumin5210)! - rewrite protoc-gen-nexus printer with ts-poet

### Patch Changes

- [#243](https://github.com/proto-graphql/proto-graphql-js/pull/243) [`3aa729a`](https://github.com/proto-graphql/proto-graphql-js/commit/3aa729a62a36aa782e8c2153bb3b789e9551ae00) Thanks [@izumin5210](https://github.com/izumin5210)! - remove unused code from codegen-core

- Updated dependencies [[`3aa729a`](https://github.com/proto-graphql/proto-graphql-js/commit/3aa729a62a36aa782e8c2153bb3b789e9551ae00), [`cef3d3e`](https://github.com/proto-graphql/proto-graphql-js/commit/cef3d3e512e616f98869c12060d592c3ff887aa9), [`f072608`](https://github.com/proto-graphql/proto-graphql-js/commit/f0726082c9ad728ff5ad648e79ab7862f85a1a97)]:
  - @proto-graphql/codegen-core@0.3.0
  - @proto-graphql/protoc-plugin-helpers@0.2.2
  - @proto-graphql/proto-descriptors@0.3.0

## 0.5.6

### Patch Changes

- [#234](https://github.com/proto-graphql/proto-graphql-js/pull/234) [`a2a3e60`](https://github.com/proto-graphql/proto-graphql-js/commit/a2a3e60789f75c31c600333afd830a02ac0cccf8) Thanks [@izumin5210](https://github.com/izumin5210)! - support `ProtoScalar` in `ProtoField.type`

- [#236](https://github.com/proto-graphql/proto-graphql-js/pull/236) [`3410d43`](https://github.com/proto-graphql/proto-graphql-js/commit/3410d43a7d29d04e1ed52576ac8a28e9b43cb452) Thanks [@izumin5210](https://github.com/izumin5210)! - add `typeFullName` to extensions in GraphQLField

- Updated dependencies [[`a2a3e60`](https://github.com/proto-graphql/proto-graphql-js/commit/a2a3e60789f75c31c600333afd830a02ac0cccf8)]:
  - @proto-graphql/codegen-core@0.2.2
  - @proto-graphql/proto-descriptors@0.2.0
  - @proto-graphql/protoc-plugin-helpers@0.2.1

## 0.5.5

### Patch Changes

- [#230](https://github.com/proto-graphql/proto-graphql-js/pull/230) [`66fe96f`](https://github.com/proto-graphql/proto-graphql-js/commit/66fe96f45b39ac36fac9b68de48222522626fc78) Thanks [@izumin5210](https://github.com/izumin5210)! - Fix references in switch-case conditional expressions in oneof field resolver

- [#216](https://github.com/proto-graphql/proto-graphql-js/pull/216) [`831f8e7`](https://github.com/proto-graphql/proto-graphql-js/commit/831f8e70ff45d3503413441f568c2c901ae6f552) Thanks [@izumin5210](https://github.com/izumin5210)! - new E2E testing

- Updated dependencies [[`c7db053`](https://github.com/proto-graphql/proto-graphql-js/commit/c7db0531f3790dbf61d740440eda841459cb3f6b)]:
  - @proto-graphql/codegen-core@0.2.1

## 0.5.4

### Patch Changes

- Updated dependencies [[`6c25f40`](https://github.com/proto-graphql/proto-graphql-js/commit/6c25f4035f1b788a63bf005dbc52ca5d0bd5f2a2)]:
  - @proto-graphql/codegen-core@0.2.0
  - @proto-graphql/protoc-plugin-helpers@0.2.0

## 0.5.3

### Patch Changes

- [#217](https://github.com/proto-graphql/proto-graphql-js/pull/217) [`5e2e85b`](https://github.com/proto-graphql/proto-graphql-js/commit/5e2e85baf6e0e21960104d3db30a4e21e04e1627) Thanks [@izumin5210](https://github.com/izumin5210)! - add `eslint-disable` directive to generated files

- Updated dependencies [[`c1246c3`](https://github.com/proto-graphql/proto-graphql-js/commit/c1246c3a349f11e3b2bbfd6198c1a06b37270ece)]:
  - @proto-graphql/codegen-core@0.1.2

## 0.5.2

### Patch Changes

- [#212](https://github.com/proto-graphql/proto-graphql-js/pull/212) [`ba647eb`](https://github.com/proto-graphql/proto-graphql-js/commit/ba647eb584850fee9c632a76cc1c028ce8ccd725) Thanks [@izumin5210](https://github.com/izumin5210)! - refactor dependencies

- Updated dependencies [[`ba647eb`](https://github.com/proto-graphql/proto-graphql-js/commit/ba647eb584850fee9c632a76cc1c028ce8ccd725), [`c5b988a`](https://github.com/proto-graphql/proto-graphql-js/commit/c5b988a4a1eac5d56d29572b593ae7643e23bd88)]:
  - @proto-graphql/codegen-core@0.1.1
  - @proto-graphql/protoc-plugin-helpers@0.1.1

## 0.5.1

### Patch Changes

- [#200](https://github.com/proto-graphql/proto-graphql-js/pull/200) [`515eabd`](https://github.com/proto-graphql/proto-graphql-js/commit/515eabd2f39baa0a99ae057b1b30a4ccc4149f66) Thanks [@izumin5210](https://github.com/izumin5210)! - support Pothos GraphQL

- [#207](https://github.com/proto-graphql/proto-graphql-js/pull/207) [`9659bf5`](https://github.com/proto-graphql/proto-graphql-js/commit/9659bf5b5064a9bbdd9cc0e5ae922794d25cfa00) Thanks [@izumin5210](https://github.com/izumin5210)! - Rename repository: proto-nexus -> proto-graphql-js

- Updated dependencies [[`515eabd`](https://github.com/proto-graphql/proto-graphql-js/commit/515eabd2f39baa0a99ae057b1b30a4ccc4149f66)]:
  - @proto-graphql/codegen-core@0.1.0
  - @proto-graphql/proto-descriptors@0.1.0
  - @proto-graphql/protoc-plugin-helpers@0.1.0
