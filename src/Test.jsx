import React from 'react';
import CmsOreder from "./CmsOrder.json";
import GdrxOrder from "./Gdrxorder.json";

const Test = () => {
  
  console.log(CmsOreder);
  console.log(GdrxOrder);
  let totalGdrxOr = GdrxOrder.reduce((total,value)=>{
    return total + +value.OrderCount
  }, 0)
  let totalCmsOr = CmsOreder.reduce((total,value)=>{
    return total + +value.OrderCount
  }, 0)
  const total = totalCmsOr + totalGdrxOr

  return (
    <>
      <div className="header">
        <h1>Order</h1>
        <div className="order">
          <span>CMS: {totalCmsOr}</span>
          <span style={{margin:"0"}}>GDRX: {totalGdrxOr}</span>
        </div>
      </div>
      <div className="total" style={{fontSize:"18px"}}>
        <div className="color-div">
        <div className="main-color">CMS <span className='cms'></span></div>
        <div className="main-color">GDRX <span className='gdrx'></span></div>
        </div>
        <p style={{margin:"0"}}><strong>total Order : {total}</strong></p>
      </div>
      <div className="container">
        {
          CmsOreder.map((data, index) => (
            <div className="box" key={index}>
              <p>{data.Orderdate}</p>
              <span className='gdrx'>{data.OrderCount}</span>
              <span className='cms'>{GdrxOrder[index].OrderCount}</span>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Test
