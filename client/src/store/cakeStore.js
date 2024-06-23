import axios from 'axios';
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer';
export const useCakeStore = create(devtools(immer((set) => ({
    cakeData: [
        ],
        getCakesAPI: async () => {
            const apiResponse = await axios.get('https://cake-shop-m4jt.onrender.com/cakes');
            set((state)=>{
                state.cakeData = apiResponse.data
            })
    },
    addCakesAPI: async (payload) => {
        const apiResponse = await axios.post('https://cake-shop-m4jt.onrender.com/cakes', payload);
        set((state)=>{
            state.cakeData.push( apiResponse.data);
        })
    },
    updateCakesAPI: async (payload) => {
        const apiResponse = await axios.put(`https://cake-shop-m4jt.onrender.com/cakes${payload.id}`, payload);
        set((state)=>{
            let cakeState = state.cakeData.filter(c=>c.id!==payload.id);
            cakeState.push(apiResponse.data);
            state.cakeData = cakeState;
        })
    },
    deleteCakesAPI: async (id) => {
        const apiResponse = await axios.delete(`https://cake-shop-m4jt.onrender.com/cakes/${id}`);
        set((state)=>{
            let cakeState = state.cakeData.filter(c=>c.id!==id);
            state.cakeData = cakeState;
        })
    }
}))));

export const getCakeById = (id) => {
    return (state)=>{
        let cake = state.cakeData.filter(c=>c.id===id);
        if(cake){
            return cake[0];
        }
        return null;
    }
} 