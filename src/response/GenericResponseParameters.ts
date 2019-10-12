import { ResponseStatus } from "./ResponseStatus";

/**
 * Interface for consistent response properties.
 */
export interface GenericResponseParameters<T> {
    /**
     * Count of results, if applicable.
     */
    count?: number;
    /**
     * Response or status message, if applicable.
     */
    message?: string;
    /**
     * Status of response (Failure, PartialSuccess, or Success). Defaults to Success.
     */
    status?: ResponseStatus;
    /**
     * Payload of the response.
     */
    value?: T;
}
