import { Publisher, OrderCreatedEvent, Subjects } from '@ticketex/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
