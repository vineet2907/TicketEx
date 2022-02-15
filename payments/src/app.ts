import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@ticketex/common';

const app = express();
app.set('trust proxy', true); //let express trust traffic coming from ingress nginx
//body parser is now part of Express.
//Hence you can use express.json() instead of importing body parser
app.use(json());
app.use(
  cookieSession({
    signed: false, //no encryption needed as JWTs are tamper proof
    secure: process.env.NODE_ENV !== 'test', //only allow HTTPS (except when running tests)
  })
);

app.use(currentUser);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
