
export const debounce = (func, timeout)=>{
    let timeoutID;
    return (...args)=>{
        clearTimeout(timeoutID);
        console.log('func', func)
        timeoutID = setTimeout(()=>func(...args), timeout)       
    }
}
