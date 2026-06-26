import React from "react"
export default React.memo(function Child({name}) {
console.log("Skinny Jack")
  return (
    <div>{name}</div>
  )
})

// Using HOC memo, we mitigated that.