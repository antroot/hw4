function _async(g) {
    
    let iterator;

    function doAsync(...arg) {
        iterator = iterator || g(...arg);
        let result = iterator.next(...arg);
        return result.done ? result.value : Promise.resolve(result.value).then(doAsync);
    }

    return doAsync;

}
