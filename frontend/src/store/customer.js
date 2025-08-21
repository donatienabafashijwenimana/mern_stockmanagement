import { create } from "zustand"

const { axiosinstance } = require("./axiosinstance")

export const customerstore =create((set,get)=>({
    customer_list :[],
    setcustomerlist:async()=>{
        const res = await axiosinstance.get('/customer/readcustomer',{})
        
        if(!res) return console.log('error occured');
        set({customer_list:res.data.result});
    },
    addcustomer: async(c_name,contact,email,address)=>{
        const res = await axiosinstance.post('/customer/addcustomer',{c_name,contact,email,address})
        if(res) return alert('data well inserted')
        else return alert('error accured')
    },
    updatcustomer: async(c_name,contact,email,address,id)=>{
        const res = await axiosinstance.put(`/customer/updatecustomer/${id}`,{c_name,contact,email,address})
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    },
    deletecustomer: async(id)=>{
        const res = await axiosinstance.delete(`/customer/deletecustomer/${id}`)
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    }
}))