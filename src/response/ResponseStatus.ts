/**
 * The status of a processed request.
 */
export enum ResponseStatus {
    /**
     * The request failed.
     */
    Failure = 0,
    /**
     * Parts, but not all, of the request succeeded.
     */
    PartialSuccess = 1,
    /**
     * The request succeeded.
     */
    Success = 2
}
