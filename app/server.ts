import * as express from "express";
import * as bodyParser from "body-parser";

import controllers from "./controllers";

declare const module: any;

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/bills", controllers.Bills);

export const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}

export default app;
