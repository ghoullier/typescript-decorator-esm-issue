# typescript-decorator-esm-issue

`"experimentalDecorators": true` and `"type": "module"` does not support cyclic references.

`src/user.ts`

```ts
import { Building } from "./building.js";
import { ManyToOne } from "./decorators.js";

export class User {
  @ManyToOne(Building)
  house!: Building;
}
```

`src/building.ts`

```ts
import { OneToMany } from "./decorators.js";
import { User } from "./user.js";

export class Building {
  @OneToMany(Building)
  residents!: User[];
}
```

## Steps to reproduce

```sh
nvm use
```

```sh
pnpm install
```

```sh
pnpm run start
```

```console
> typescript-decorator-esm-issue@1.0.0 start ~/typescript-decorator-esm-issue
> tsc && node dist/index.js

file://~/typescript-decorator-esm-issue/dist/user.js:8
    ManyToOne(Building),
              ^

ReferenceError: Cannot access 'Building' before initialization
    at file://~/typescript-decorator-esm-issue/dist/user.js:8:15
    at ModuleJob.run (node:internal/modules/esm/module_job:217:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async loadESM (node:internal/process/esm_loader:34:7)
    at async handleMainPromise (node:internal/modules/run_main:66:12)
```
