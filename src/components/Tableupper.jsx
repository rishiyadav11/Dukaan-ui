import React, { useState } from 'react'

const Tableupper = () => {
  const [whichbtn, setwhichbtn] = useState("pay")
  return (
    <div>
      <h1 className='text-xl font-semibold'>Transactions | This Month</h1>
      <div className='flex gap-3 text-sm pt-2'>
      <button onClick={()=>setwhichbtn("pay")} className={`bg-gray-300 rounded-2xl select-none text-black py-1.5 px-4 ${whichbtn ==="pay" ? "bg-sky-600 text-white" : ""}`}>Payouts (22)</button>
      <button onClick={()=>setwhichbtn("refund")} className={`bg-gray-300 rounded-2xl select-none text-black py-1.5 px-4 ${whichbtn ==="refund" ? "bg-sky-600 text-white" : ""}`}>Refunds (6)</button>
    </div>

    
    </div>
  )
}

export default Tableupper