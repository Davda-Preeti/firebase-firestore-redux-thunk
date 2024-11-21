import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { viewUser ,updateUser} from '../redux/Userslice'

const Update = () => {
    const {register,handleSubmit,reset} =useForm()
    const {id} =  useParams()
    const redirect = useNavigate()
    const {userList} = useSelector((state)=>state.users)

    const singleUser = userList.find((user)=>{
        return user.id===id
    })

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(viewUser())
        reset(singleUser)

    },[dispatch])

        async function submitData(data){
            await dispatch(updateUser(data))
            redirect('/view')
        }

  return (
    <form action="" method='post' onSubmit={handleSubmit(submitData)} className='container my-5 p-5 mx-auto shadow col-lg-6'>
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
  )
}

export default Update