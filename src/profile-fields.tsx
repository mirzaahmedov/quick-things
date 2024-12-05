import { Controller, Form } from "react-hook-form";

type RequiredFields = {
  name: string;
};

const ProfileFields = ({}) => {
  return (
    <Form {...form}>
      <Controller name="summa" render={({ field }) => <input {...field} />} />
    </Form>
  );
};

export { ProfileFields };
