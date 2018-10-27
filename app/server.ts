import * as express from 'express';
import controllers from './controllers';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.use('/welcome', controllers.WelcomeController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});

export default app;