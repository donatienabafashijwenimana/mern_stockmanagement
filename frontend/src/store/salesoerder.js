import { create } from "zustand"

const { axiosinstance } = require("./axiosinstance")

export const sales_store =create((set,get)=>({
    s_order_list :[],
    set_s_orderlist:async()=>{
        const res = await axiosinstance.get('/sorder/readsorder',{})
        
        if(!res) return console.log('error occured');
        set({s_order_list:res.data.result});
    },
    add_s_order: async(product,quantity,customer,warehouse,o_date,expected_date)=>{
        const res = await axiosinstance.post('/sorder/addsorder',
            {product,quantity,customer,warehouse,o_date,expected_date})
        if(res) return alert('data well inserted')
        else return alert('error accured')
    },
    update_s_order: async(product,quantity,customer,warehouse,o_date,expected_date,id)=>{
        const res = await axiosinstance.put(`/sorder/updatesorder/${id}`,
            {product,quantity,customer,warehouse,o_date,expected_date})
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    },
    delete_s_order: async(id)=>{
        const res = await axiosinstance.delete(`/sorder/deletesorder/${id}`)
        
        if(res.data.message) return alert(res.data.message)
        else return alert('error accured')

    }
}))