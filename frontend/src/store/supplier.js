import { create } from "zustand"

const { axiosinstance } = require("./axiosinstance")

export const supplierstore =create((set,get)=>({
    supplier_list :[],
    setsupplierlist:async()=>{
        const res = await axiosinstance.get('/supplier/readsupplier',{})
        
        if(!res) return console.log('error occured');
        set({supplier_list:res.data.result});
    },
    addsupplier: async(s_name,contact,email,address,product_supply)=>{
        const res = await axiosinstance.post('/supplier/addsupplier',{s_name,contact,email,address,product_supply})
        if(res) return alert('data well inserted')
        else return alert('error accured')
    },
    updatesupplier: async(s_name,contact,email,address,product_supply,id)=>{
        const res = await axiosinstance.put(`/supplier/updatesupplier/${id}`,{s_name,contact,email,address,product_supply})
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    },
    deletesupplier: async(id)=>{
        const res = await axiosinstance.delete(`/supplier/deletesupplier/${id}`)
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    }
}))