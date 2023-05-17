import React from 'react'
import { useFormik } from 'formik'

const Validatioin = () => {
  
    const formik=useFormik({})

  return (
    <div className='body'>
        <h2 style={{color:'white'}}>Login</h2>
        <div>
            
      <form>
      <label htmlfor='name' >Name</label>
        <input type="text"  id='name'name='name'/>
        <label htmlfor='email' >Email</label>
        <input type="email"  id='email'/>
        <label htmlfor='password' >Password</label>
        <input type="password"  id='password'/>
           <button >Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Validatioin
