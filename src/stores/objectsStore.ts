import create from "zustand";

type TField = {
  name: string;
  title: string;
  type: string;
  content: string;
};

type ObjectState = {
  objects: any[];
  setObjects: (objects: any[]) => void;
  newObject: {
    type?: "single" | "multiple";
    title: string;
    slug: string;
    fields: TField[];
  };
  setNewObject: (newObject: any) => void;
};

export const useObjectsStore = create<ObjectState>(set => ({
  objects: [],
  setObjects: (objects: any[]) => set(state => ({ ...state, objects })),

  newObject: {
    type: undefined,
    title: "",
    slug: "",
    fields: [],
  },
  setNewObject: (newObject: any) =>
    set(state => ({
      ...state,
      newObject: { ...state.newObject, ...newObject },
    })),
}));
