import { RejectionReason } from "./RejectionReason";

/**
 * The result of a handled rejected promise or a faulty request.
 */
export class Rejection {
    private readonly _message: string;
    private readonly _reason: RejectionReason;

    public constructor(
        error: Rejection | Error | string,
        reason: RejectionReason = RejectionReason.InternalServerError
    ) {
        this._message =
            error instanceof Rejection || error instanceof Error
                ? error.message
                : error;
        this._reason = reason;
    }

    /**
     * The error message to return to the user.
     */
    public get message(): string {
        return this._message;
    }

    /**
     * The reason (an HTTP status code) for the rejection.
     */
    public get reason(): RejectionReason {
        return this._reason;
    }

    /**
     * Creates a Rejection with RejectionReason BadRequest.
     * @param message The error message to send.
     */
    public static BadRequest(message: string = null): Rejection {
        return new Rejection(message || "Invalid request.", RejectionReason.BadRequest);
    }

    /**
     * Creates a Rejection with RejectionReason Forbidden.
     * @param message The error message to send.
     */
    public static Forbidden(message: string = null): Rejection {
        return new Rejection(message || "Forbidden.", RejectionReason.Forbidden);
    }

    /**
     * Creates a Rejection with RejectionReason NotFound.
     * @param message The name of the object that was not found.
     */
    public static NotFound(objectName: string): Rejection {
        return new Rejection(`Could not find ${objectName}.`, RejectionReason.NotFound);
    }

    /**
     * Creates a Rejection with RejectionReason Unauthorized.
     * @param message The error message to send.
     */
    public static Unauthorized(message: string = null): Rejection {
        return new Rejection(message || "Not authorized.", RejectionReason.Unauthorized);
    }
}
