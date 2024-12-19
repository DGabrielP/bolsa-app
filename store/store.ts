//LOTTERY
import { create } from 'zustand';

// USELOTTERYSTORE
interface LotteryState {
  switchStates: { [key: number]: boolean };
  selectedNumbers: number[];
  toggleSwitch: (number: number) => void;
  purchaseNumbers: (numbers: number[]) => void;
  resetSwitches: () => void;
  addSingleNumber: (number: number) => void;
}
const useLotteryStore = create<LotteryState>((set, get) => ({
  switchStates: {},
  selectedNumbers: [],

  //ESTE ES EL USE LOTTERY STORE, NO EL BOGHT STORE
  //NO LO TOQUES O SE DAÑA TODO EL PROYECTO

  toggleSwitch: (number: number) => {
    const { switchStates } = get();
    set({
      switchStates: {
        ...switchStates,
        [number]: !switchStates[number],
      },
    });
  },

  // Acción para seleccionar los números
  purchaseNumbers: (numbers: number[]) => {
    const { switchStates, selectedNumbers } = get();
    const selected = numbers.filter((number) => switchStates[number]);
    const uniqueSelectedNumbers = Array.from(new Set([...selectedNumbers, ...selected]));
    set({selectedNumbers: uniqueSelectedNumbers, });
    alert(`Has comprado los números: ${selected.join(', ')}`);
  },

  // Reiniciar todos los switches
  resetSwitches: () => set({ switchStates: {} }),

  addSingleNumber: (number: number) => {
    const { selectedNumbers } = get();
    if (!selectedNumbers.includes(number)) {
      set({ selectedNumbers: [...selectedNumbers, number] });
    } else {
      alert(`El número ${number} ya ha sido comprado.`);
    }
  },

}));



export default useLotteryStore;
