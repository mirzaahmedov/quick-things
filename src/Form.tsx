import { useForm } from "react-hook-form";
import { SummaFields } from "./summa-fields";

type PrixodType = {
  id: number;
  name: string;
  summa: number;
};

const Form = () => {
  const form = useForm<PrixodType>({
    defaultValues: {
      id: 1,
      name: "Поступление",
      summa: 100,
    },
  });
  return (
    <div>
      <SummaFields form={form} />
    </div>
  );
};

export { Form };
