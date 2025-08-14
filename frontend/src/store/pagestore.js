import {create} from 'zustand'

export const switchpage = create((set,get)=>({
    page:'dashboard',
    form_:null,
    setpage : (spage)=>{
       set({page:spage})
    },
    setform:(sform)=>{
        set({form_:sform+get().page})
        if (sform==null){
            set({form_:null})
        }
    }
    
}))