import nats, { Message, Stan } from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { TicketCreatedListener } from './events/ticket-created-listener';

console.clear();

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Listener conected to NATS');

  stan.on('close', () => {
    console.log('NATS connection closed !');
    process.exit();
  });

  new TicketCreatedListener(stan).listen();
});

//on interrupt or terminate close gracefully (might not work on windows)
process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());
