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
  onChange?: (data: unknown) => void;
};
type SpravochnikStore = Spravochnik & {
  setSpravochnik(state: Spravochnik): void;
};
const useSpravochnikStore = create<SpravochnikStore>((set) => ({
  setSpravochnik: (state) => set(state),
}));

export { useSpravochnikStore, HttpService };
