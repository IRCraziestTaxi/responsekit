import { Rejection } from "../rejection/Rejection";
import { GenericResponse } from "../response/GenericResponse";

/**
 * The result of a request that either failed (resulted in a Rejection)
 * or succeed (resulted in a GenericResponse).
 */
export type CommandResult<T> = GenericResponse<T> | Rejection;
