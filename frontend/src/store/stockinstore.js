import { create } from "zustand";
import { axiosinstance } from "./axiosinstance";


export const stockinstore = create((set,get)=>({
    stockin_list:[],

    addstockin : async(product,quantity,supplier,date,price,id)=>{
        const res = await axiosinstance.post('/stock/addstockin',{product,quantity,supplier,date,price,id})
        if (res){
            console.log(res.date)
            alert(res.data.message)
        }
    },
    setstockinlist:async()=>{
        const res = await axiosinstance.get('/stock/readstockin',{})
        if (!res) return alert('error occured')
        set({stockin_list:res.data})
    }
}))