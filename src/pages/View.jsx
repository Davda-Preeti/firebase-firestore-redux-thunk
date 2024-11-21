import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewUser , deleteUser} from '../redux/Userslice'
import { NavLink } from 'react-router-dom'

const View = () => {
  const dispatch = useDispatch()

  const { userList } = useSelector((state) => state.users)
  console.log("user........")
  console.log(userList)


  useEffect(() => {
    dispatch(viewUser())
  }, [dispatch])

 async function trash(id){
  await  dispatch(deleteUser(id))
    alert("data deleted")
  }
  return (
    <>
      <div className="container my-5">
        <table className='table table-hover table-striped table-success shadow'>
          <thead className='table-dark'>
            <tr>
              <th>S.no</th>
              <th>username</th>
              <th>email</th>
              <th>mobile</th>
              <th>action</th>
              <th>updae</th>
            </tr>
          </thead>
          <tbody>
            {
              userList.length > 0 ?
                userList.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                      <td>
                        <button className='btn btn-danger' onClick={()=> trash(user.id)}><i class="fa-solid fa-trash"></i></button>
                      </td>
                      <td>

                      <NavLink className={"btn btn-warning"} to={`/update/${user.id}`}><i class="fa-solid fa-pen-to-square"></i></NavLink>

                      </td>
                    </tr>
                  )
                })
                :
                <tr>
                  <td colSpan={6} className='text-center fw-bold'>loading........</td>
                </tr>
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default View