import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import dbFirestore from "./Firebase";
const initialState ={
  userList:[]
}

export const addUser = createAsyncThunk('user/addUser', async(data)=>{
  const res = await addDoc(collection(dbFirestore, "user"),data)
  const newUser={
    id:res.id,
    ...data
  }
  return newUser
})

export const viewUser = createAsyncThunk('user/viewUser',async()=>{
  const res = await getDocs(collection(dbFirestore, "user"));
  console.log("res................");
  console.log(res)
  const arr = []
  res.forEach((doc)=>{

    const newUser={
      id:doc.id,
      ...doc.data()
    }
    arr.push(newUser)
  })
  return arr;
})

 export const deleteUser = createAsyncThunk('user/deleteUser', async (id)=>{
      await deleteDoc(doc(dbFirestore, "user",id))
      return id
 })

 export const updateUser = createAsyncThunk('user/updateUser',async(data)=>{
  const {id} = data; 
  await setDoc(doc(dbFirestore, 'user', id),data)
  return data
 })
const userSlice = createSlice(
  {
      name:'users',
      initialState,
      extraReducers:(builder)=>{
        builder
        .addCase(addUser.fulfilled,(state , action)=>{
          state.userList.push(action.payload)
        })
        .addCase(viewUser.fulfilled,(state,action)=>{
          console.log(action.payload)
          state.userList = action.payload
        })
        .addCase(deleteUser.fulfilled,(state,action)=>{
          console.log(action)
          const id =action.payload
          const filterData = state.userList.filter((user)=>{
            return user.id !== id
          })
          state.userList=filterData
        })
        .addCase(updateUser.fulfilled,(state,action)=>{
          const {id} = action.payload;
          const indexNumber = state.userList.findIndex((user)=>{
            return user.id === id
          })
          if(indexNumber != -1){
            state.userList[indexNumber]=action.payload
          }
        })
      }
  }
)

export default userSlice.reducer