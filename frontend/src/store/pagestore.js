import {create} from 'zustand'

export const switchpage = create((set,get)=>({
    page:'dashboard',
    form_:null,
    form_data:{},
    setpage : (spage)=>{
       set({page:spage})
       set({form_:null})
    },
    setform:(sform,data)=>{
        set({form_:get().page,form_data:data})
        if(sform=='received'){
            set({form_:'received'})
        }
        if(sform=='delivered'){
            set({form_:'delivered'})
        }
        if (sform==null){
            set({form_:null})
        }
    }
    
}))