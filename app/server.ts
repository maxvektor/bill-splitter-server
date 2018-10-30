import * as express from "express";

import controllers from "./controllers";

declare const module: any;

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.use("/bills", controllers.Bills);

export const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

// TODO: deal with hotreloading firebase issue
// if (module.hot) {
//   module.hot.accept();
//   module.hot.dispose(() => server.close());
// }

export default app;
