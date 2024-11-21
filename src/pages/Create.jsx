import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/Userslice'
import { redirect, useNavigate } from 'react-router-dom'

const Create = () => {
    const {register,handleSubmit,reset}=useForm()
    const redirect = useNavigate()

    const dispatch = useDispatch()

    function submitData(data){
        dispatch(addUser(data))
        alert("data inserted")
        reset()
        redirect('/view')
    }
  return (
    <>
    <div className="back">
    <form action="" method='post' onSubmit={handleSubmit(submitData)} className='container  p-5 my-5 shadow col-lg-6'>
        <div className="mt-4">
            <input type="text" {...register('username')} className='form-control' placeholder='enter username' />
        </div>
        <div className="mt-4">
            <input type="text" {...register('email')} className='form-control' placeholder='enter email' />
        </div>
        <div className="mt-4">
            <input type="text" {...register('mobile')} className='form-control' placeholder='enter mobile' />
        </div>
        <div className="mt-4">
            <button className='btn btn-success'>submit</button>
        </div>
    </form>
    </div>
    </>
)
}

export default Create