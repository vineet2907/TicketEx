# TicketEx

A microservice based ticket exchange app created using NodeJs, React, MongoDb and NATS Streaming Server

## Services

- auth: AuthN and AuthZ using JWT
- tickets: CRUD operations for tickets
- orders: Create / Cancel orders
- expiration: Worker service that expires an order after set interval
- payents: Process payments (some in progress code excluded from the git repo)

## Client

- client: Server side rendered React app using NextJS

## Common Libraries

- common: NPM package shared across services. Contains common code like error handling and AuthN middlewares, token validation, base listeners and publishers, event interfaces etc.

## Infra

- docker: container for each service
- k8s: container orchestration
  - Load balancer service: ingress-nginx . Install - https://kubernetes.github.io/ingress-nginx/deploy/#quick-start
  - Secrets: add JWT secret using
    `kubectl create secret generic jwt-secret --from literal = jwt-secret = <secret-value>`

## Dev Setup (on premise)

- Install Docker and enable k8s service
- Install Skaffold - https://skaffold.dev/docs/install/
- Run `skaffold dev`

## Tests

- jest: Run `npm test`
