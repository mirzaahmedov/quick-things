import { create } from "zustand";
import { http } from "@app/lib/http";

class HttpService {
  constructor() {}

  async getAll() {
    const res = await http.get("/spravochnik");
    return res?.data;
  }
  async getById() {
    const res = await http.get("/spravochnik/:id");
    return res?.data;
  }
  async create() {
    const res = await http.post("/spravochnik");
    return res?.data;
  }
  async update() {
    const res = await http.put("/spravochnik/:id");
    return res?.data;
  }
  async delete() {
    const res = await http.delete("/spravochnik/:id");
    return res?.data;
  }
}

type Spravochnik = {
  id?: string;
  name?: string;
  params?: Record<string, unknown>;
  onChange?: (data: unknown) => void;
};
type SpravochnikStore = Spravochnik & {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  setSpravochnik(state: Spravochnik): void;
};
const useSpravochnikStore = create<SpravochnikStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setSpravochnik: (state) => set(state),
}));

const useSpravochnik = () => {
  const { isOpen, open, close } = useSpravochnikStore();

  return {
    isOpen,
    open,
    close,
  };
};

export { useSpravochnikStore, useSpravochnik, HttpService };
