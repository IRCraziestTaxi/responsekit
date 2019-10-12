import { GenericResponseParameters } from "./GenericResponseParameters";
import { ResponseStatus } from "./ResponseStatus";

/**
 * Implements generic response interface for consistent response properties.
 */
export class GenericResponse<T> {
    public count: number;
    public message: string;
    public status: ResponseStatus;
    public value: T;

    public constructor(parameters?: GenericResponseParameters<T>) {
        this.count = (parameters && typeof parameters.count === "number") ? parameters.count : null;
        this.message = parameters && parameters.message || null;
        this.status = parameters && parameters.status || ResponseStatus.Success;
        this.value = (parameters && parameters.value !== undefined) ? parameters.value : null;
    }
}
