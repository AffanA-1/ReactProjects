import { useState, useEffect } from 'react';

// **Custom Hook: useDebounce**
// Returns a value that only updates after a specified delay (time)
export function useDebounce(value: string, delay: number) {
    // so the deboinuce value is only set when the setTimeout Expires
    // meanwhole the value can keep chanighing
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

   // everytime the useEffect runs, it will remove the previous timers, thus eliminating th eprevious setDebouncwValues

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  //this is the debounced value that will be returned after the timeout comleted
  return debouncedValue;
}


// Everytime this function is called, we are returned a debouncedValie, which is the finalValue that we recieve on the finalRTimeout

// each searchItem 'A-F-F-A-N' that we send becomes one value, and this value is then pssed
// tp the setYImeout to set the value for debounceValue.
//WHen finally, we stop for 5 seconds, the timeOut completes, and we are sent back the debouncedValue

// We will now use the final A-F-F-A to search the api