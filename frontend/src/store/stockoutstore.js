import { create } from "zustand";
import { axiosinstance } from "./axiosinstance";


export const stockoutstore = create((set,get)=>({
    stockout_list:[],

    addstockout : async(product,quantity,customer,date,price,id)=>{
        const res = await axiosinstance.post('/stock/addstockout',{product,quantity,customer,date,price,id})
        if (res){
            console.log(res.date)
        }
    },
    setstockoutlist:async()=>{
        const res = await axiosinstance.get('/stock/readstockout',{})
        if (!res) return alert('error occured')
        set({stockout_list:res.data})
    }
}))