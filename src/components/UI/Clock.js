import React,{useState} from 'react'

const Clock = () => {

    const [day,setDay]=useState();
    const [hour,setHour]=useState();
    const [minute,setMinute]=useState();
    const [second,setSecond]=useState();

 let interval;
const countDown=()=>{
       
const destination=new Date('nov 22,2023').getTime()
    interval=setInterval(()=>{
        const now=new Date().getTime();
        const difference=destination-now;
        const days=Math.floor(difference/(1000*24*60*60))
        const hours=Math.floor(difference%(1000*24*60*60)/(1000*60*60))
        const minutes=Math.floor(difference%(1000*60*60)/(1000*60))
        const seconds=Math.floor(difference%(1000*60)/1000)

        if(destination<0){
            clearInterval(interval.current)
        }else{
            setDay(days)
            setHour(hours)
            setMinute(minutes)
            setSecond(seconds)
        }
    })
    }

    countDown();
  return (
    <div className="clock__wrapper d-flex align-item-center gap-3 ">
        <div className="clock__data d-flex align-item-center gap-2">
            <div className="text-cemter">
                <h1 className='text-white fs-3 mb-2'>{day}</h1>
                <h5 className='text-white fs-6'>Days</h5>
            </div>
            <span className='text-white fs-3 text-center'>:</span>
        </div>
        <div className="clock__data d-flex align-item-center gap-2">
            <div className="text-cemter">
                <h1 className='text-white fs-3 mb-2'>{hour}</h1>
                <h5 className='text-white fs-6'>Hours</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className="clock__data d-flex align-item-center gap-2">
            <div className="text-cemter">
                <h1 className='text-white fs-3 mb-2'>{minute}</h1>
                <h5 className='text-white fs-6 text-center'>Minutes</h5>
            </div>
            <span className='text-white fs-3 text-center'>:</span>
        </div>
        <div className="clock__data d-flex align-item-center gap-2">
            <div className="text-cemter">
                <h1 className='text-white fs-3 mb-2'>{second}</h1>
                <h5 className='text-white fs-6'>Seconds</h5>
            </div>
        </div>
    </div>
  )
}

export default Clock