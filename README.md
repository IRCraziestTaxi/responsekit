# @responsekit/core
Simple helpers to translate successful or unsuccessful business logic responses into appropriate controller responses.

## Install
To use responsekit:

```
npm install --save @responsekit/core
```

## GenericResponse
Use the `GenericResponse` class as a standardized interface for responses to processed requests.

Consider a request for paged objects:

```ts
new GenericResonse({
    count: totalCount,
    message: `Your request returned ${results.length} out of ${totalCount} results.`,
    status: ResponseStatus.Success,
    value: results
});
```

## Rejection
Use the `Rejection` class as a standardized way to send error messages with a reason based on an HTTP status code.

```ts
// Creates a Rejection with a RejectionReason of 500.
new Rejection("Something went wrong.");

// Creates a Rejection with a RejectionReason of 400.
new Rejection("Invalid request.", RejectionReason.BadRequest);

// Also creates a Rejection with a RejectionReason of 400.
Rejection.BadRequest("Invalid request.");
```

## CommandResult
The `CommandResult` type represents a handled request that resulted either in success or failure (in which case a `Rejection` may have been returned). Consider, for example, using `tsmediator` to process commands that will return a `GenericResponse` or a `Rejection` based on the results of the business logic.

```ts
const result: CommandResult<Thing> = await new Mediator().Send("CommandHandler", command);

if (result instanceof Rejection) {
    // Return a response whose status is result.reason and whose payload contains result.message.
}

// Return a response with status 200 (or similar) whose payload is the GenericResponse that is the result.
```

## Other helpful libraries
To achieve the functionality above using `tsmediator` and/or `express`, check out the [`@responsekit/tsmediator`](https://github.com/IRCraziestTaxi/responsekit-tsmediator) and [`@responsekit/express`](https://github.com/IRCraziestTaxi/responsekit-express) packages.

For Nest.JS, check out [`@responsekit/nestjs`](https://github.com/IRCraziestTaxi/responsekit-nestjs).