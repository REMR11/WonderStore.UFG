export function debounce(func, delay){
  let timeID;

  return function(...args){
    clearTimeout(timeID);

    timeID = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}