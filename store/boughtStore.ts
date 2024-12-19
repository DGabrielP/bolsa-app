import { create } from 'zustand';

interface BoughtState {
  boughtNumbers: number[]; 
  setBoughtNumbers: (numbers: number[]) => void; 
}

const useBoughtStore = create<BoughtState>((set) => ({
  boughtNumbers: [], 
  setBoughtNumbers: (numbers: number[]) => set({ boughtNumbers: numbers }), 
}));

export default useBoughtStore;
