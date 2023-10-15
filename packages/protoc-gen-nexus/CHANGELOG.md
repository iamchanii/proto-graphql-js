# protoc-gen-nexus

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
