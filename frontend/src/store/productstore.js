import { create } from "zustand"

const { axiosinstance } = require("./axiosinstance")

export const productstore =create((set,get)=>({
    product_list :[],
    setproductlist:async()=>{
        const res = await axiosinstance.get('/product/readproduct',{})
        
        if(!res) return console.log('error occured');
        set({product_list:res.data.result});
    },
    addproduct: async(p_name,category,u_measure,c_price,s_price,status)=>{
        const res = await axiosinstance.post('/product/addproduct',{p_name,category,u_measure,c_price,s_price,status})
        if(res) return alert('data well inserted')
        else return alert('error accured')
    },
    updateproduct: async(p_name,category,u_measure,c_price,s_price,status,id)=>{
        const res = await axiosinstance.put(`/product/updateproduct/${id}`,{p_name,category,u_measure,c_price,s_price,status})
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    },
    deleteproduct: async(id)=>{
        const res = await axiosinstance.delete(`/product/deleteproduct/${id}`)
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    }
}))