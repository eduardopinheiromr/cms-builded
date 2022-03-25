import create from "zustand";

type ObjectState = {
  objects: any[];
  setObjects: (objects: any[]) => void;
};

export const useObjectsStore = create<ObjectState>(set => ({
  objects: [],
  setObjects: (objects: any[]) => set(state => ({ ...state, objects })),
}));
