import { useEffect } from "react";

//key can be in different format like escape EsCaPe escApE
export function useKey(key, action) {
  useEffect(
    function () {
      // each time new event listener added to doc when new movie is clicked
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
