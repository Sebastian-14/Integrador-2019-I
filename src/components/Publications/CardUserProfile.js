import React from 'react'

export default function CardUserProfile(props) {

  const data = props.data
  setTimeout(()=>{console.log(data)},3000)
  // const list = data.map((l)=>
  //   <div>
  //     <h1>{l.name}</h1>
  //     <h1>{l.lastname}</h1>
  //   </div>
  // )
  // const list = (()=>
  //   <div>
  //     <h1>{data.name}</h1>
  //   </div>
  // )

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}
