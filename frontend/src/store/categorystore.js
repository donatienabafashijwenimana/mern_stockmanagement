import axios  from 'axios'
import { create } from 'zustand'
import { axiosinstance } from './axiosinstance'

export const categorystore = create((set,get)=>({
   categorieslist:[],
   setcategorieslist : async()=>{
    const res = await axiosinstance.get('/category/readcategories',{})
    set({categorieslist:res.data.result})
   },
   insertcategory : async(category,description,status)=>{
      const res= await axiosinstance.post('/category/addcategory',{category,description,status})
      if(res) return alert(res.data.message)
       alert('error occured')
   },
   updatecategory: async(category,description,status,id)=>{
       const res = await axiosinstance.post('/category/updatecategory',{category,description,status,id})
       if (res) return alert('data well updated')
       else return alert('error occured')
   },
   deletecategory:(id)=>{
       const res = axiosinstance.delete(`/category/deletecategory/${id}`,)
       if(res) return alert('data well deleted')
        else return alert('data not deleted')
   }
}))