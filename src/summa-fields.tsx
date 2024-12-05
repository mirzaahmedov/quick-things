import type { Control, UseFormReturn } from "react-hook-form";

import { Form, Controller } from "react-hook-form";

type RequiredFields = {
  summa: number;
};

type SummaFieldProps<T extends RequiredFields> = {
  __type?: T;
  form: UseFormReturn<RequiredFields>;
};

const SummaFields = <T extends RequiredFields>({
  form,
}: SummaFieldProps<T>) => {
  return (
    <Form {...form}>
      <Controller
        control={form.control as unknown as Control<RequiredFields>}
        name="summa"
        render={({ field }) => <input {...field} />}
      />
    </Form>
  );
};

export { SummaFields };
