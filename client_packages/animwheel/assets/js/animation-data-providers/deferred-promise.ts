export default class DeferredPromise<T> {
    underlyingPromise: Promise<T>;
    reject;
    resolve;

    constructor(executor) {
        this.underlyingPromise = new Promise<T>((resolve, reject) => {
            this.reject = reject
            this.resolve = resolve

            executor();
        })
    }
}
