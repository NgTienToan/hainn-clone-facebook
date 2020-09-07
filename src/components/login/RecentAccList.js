import React, { useState } from 'react'
import RecentAccItem from './RecentAccItem'
function RecentAccList() {
  const Acc = [
    {
      id: 1
    },
    {
      id: 2
    }
  ]
  const [recentAcc, setRecentAcc] = useState(Acc);
  const handleDeleteAcc = (e) => {
    console.log(e);
    let array = recentAcc;
    let newArray = array.filter((item) => item.id!==e);
    setRecentAcc(newArray);
  }
  console.log(recentAcc);
  return (
    <>
      {recentAcc.map(item => {
        return <RecentAccItem key={item.id} onDelete={() => handleDeleteAcc(item.id)} />
      })}
    </>
  )
}
export default RecentAccList;
