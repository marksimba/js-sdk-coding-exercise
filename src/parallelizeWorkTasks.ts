/**
 *
 * @param {Promise[]} promises
 * @param {number} parallelExecutionMax
 * @desc Given `Promises[]`, process all of the promises without the amount of current processes exceeding the `parallelExecutionMax` count.
 *
 */

export async function parallelizeWorkTasks(promises: Array<() => Promise<string>>, parallelExecutionMax: number) {
    // we need to return the results in order, so create an array for that. 
    const results: string[] = [];

    // we run the first `parallelExecutionMax` amount jobs right away
    // so initialize at the count
    let curIdx = parallelExecutionMax;

    const initialPromises = promises.slice(0, parallelExecutionMax);

    await Promise.all(initialPromises.map((promise, idx) => worker(promise, idx)));

    return Promise.resolve(results);
    
    /**
     * 
     * @param {Promise<string>} job job to process
     * @param {number} idx current job's index
     */
    async function worker(job: () => Promise<string>, idx: number){
        const result = await job();

        // save off results to correct index in `results`
        results[idx] = result;
        // if all haven't been processed, process the next one
        if(curIdx < promises.length) await worker(promises[curIdx], curIdx++);
    }
}
