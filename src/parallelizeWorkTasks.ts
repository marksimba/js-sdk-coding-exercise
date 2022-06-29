/**
 *
 * @param {Promise[]} promises
 * @param {Number} parallelExecutionMax
 * @desc Given `Promises[]`
 *
 */

//TODO: change (() => Promise<unknown>)[] | Promise<unknown>[] to the correct type once I've implemented it
export function parallelizeWorkTasks(promises: (() => Promise<unknown>)[] | Promise<unknown>[], parallelExecutionMax: number) : Promise<string>[] {

    throw new Error("Not Implemented");

}
