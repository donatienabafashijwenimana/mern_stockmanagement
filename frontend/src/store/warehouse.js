import { create } from "zustand"

const { axiosinstance } = require("./axiosinstance")

export const warehousestore =create((set,get)=>({
    warehouse_list :[],
    setwarehouselist:async()=>{
        const res = await axiosinstance.get('/warehouse/readwarehouse',{})
        
        if(!res) return console.log('error occured');
        set({warehouse_list:res.data.result});
    },
    addwarehouse: async(w_name,location,manager,description)=>{
        const res = await axiosinstance.post('/warehouse/addwarehouse',{w_name,location,manager,description})
        if(res) return alert('data well inserted')
        else return alert('error accured')
    },
    updatewarehouse: async(w_name,location,manager,description,id)=>{
        const res = await axiosinstance.put(`/warehouse/updatewarehouse/${id}`,{w_name,location,manager,description})
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    },
    deletewarehouse: async(id)=>{
        const res = await axiosinstance.delete(`/warehouse/deletewarehouse/${id}`)
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    }
}))