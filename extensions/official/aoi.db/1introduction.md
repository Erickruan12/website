---
title: Introduction
description: Setting up aoi.db with ease.
id: aoidb-introduction
pagination_prev: null
pagination_next: null
---

:::info Documentation

In-depth documentation can be found **[here](https://akaruidevelopment.github.io/aoi.db/index.html)**.

:::

### Table of Contents

- **[Installation](#installation)**
- **[Setup](#example-usage)**
  - **[Types](#database-types)**

---

### Installation

<Tabs groupId="pref-install">
  <TabItem value="i-npm" label="npm">

  **node.js 17.0.0 or newer is required.**
  ```bash
  npm install @akarui/aoi.db
  ```
  
  </TabItem>
  <TabItem value="i-yarn" label="yarn">

  **node.js 17.0.0 or newer is required.**
  ```bash
  yarn add @akarui/aoi.db
  ```

</TabItem>
</Tabs>

---

## Database Types
- KeyValue - A simple database that stores key value pairs
```js
  const { KeyValue } = require("@akarui/aoi.db") //commonjs
  // or
  import { KeyValue } from "@akarui/aoi.db" //esm

  // Basic Setup
  const db = new KeyValue({
    path: "./path/",
    tables: ["table"],
  });

  db.on("ready", () => {
    console.log("Database is ready!");
  });

  db.connect();
```
- WideColumn - A database that stores data in a column
```js
  const { WideColumn, Column } = require("@akarui/aoi.db") //commonjs
  // or
  import { WideColumn, Column } from "@akarui/aoi.db" //esm

  // Basic Setup

  const prime = new Column({
    name: "id",
    primary: true,
    type: "bigint",
    default:0n,
  });
  const xp = new Column({
    name: "xp",
    type: "number",
    primary: false,
    sortOrder: "DESC",
    default : 0,
  });

  const db = new WideColumn({
    path: "./path/",
    encryptOption: {
      securitykey: "a-32-characters-long-string-here",
    },
    tables: [
      {
        name: "main",
        columns: [prime, xp ],
      },
    ],
  });

  db.on("ready", () => {
    console.log("Database is ready!");
  });

  db.connect();
```
- Remote - A database that stores data in a remote server
#### Database Server
```js
const { Receiver } = require("@akarui/aoi.db"); // commonJS
// or
import { Receiver } from "@akarui/aoi.db"; // ESM

const rec = new Receiver({
  logEncrypt: "a-32-characters-long-string-here",
  logPath: "./logPath/",
  wsOptions: {
    port: portNo, // 443 for SSL WSS and 80 for WS
    clientTracking: true,
  },
  whitelistedIps: "*",
});

rec.on("connect", () => {
  console.log("connected");
});

rec.connect();
```

#### Client

```js
const { Transmitter, TransmitterFlags } = require("@akarui/aoi.db"); // commonJS
// or
import { Transmitter, TransmitterFlags } from "@akarui/aoi.db"; // ESM

const db = new Transmitter({
  path: "websocket path",
  // path : "ws://localhost:80",
  databaseType: "KeyValue or WideColumn",
  dbOptions: {
    path: "./databasePath in remote server/",
    encryptOption: {
      securitykey: "a-32-characters-long-string-here",
      enabled: true,
    },
  },
  name: "username",
  pass: "password",
  flags: TransmitterFlags.READ_WRITE, // READ_WRITE, READ_ONLY, WRITE_ONLY
  tables: ["table"],
});

db.on("ready", () => {
  console.log("ready");
});
db.on("close", (code, reason) => {
  console.log("[TRANSMITTER] => " + code + " " + reason);
});
db.connect();
```