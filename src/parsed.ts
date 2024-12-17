type Smeta = {
  id: number;
  smeta_name: string;
  smeta_number: string;
  father_smeta_name: string;
  group_number: string;
};

type NormalizedSmeta = Smeta & {
  group_nums: number[];
};

type NestedSmeta = NormalizedSmeta & {
  children: NestedSmeta[];
};

const smeta_data = [
  {
    id: 1,
    smeta_name: "I guruh Ish haqi va unga tenglashtirilgan to‘lovlar",
    smeta_number: "",
    father_smeta_name: "1.0.0.0",
    group_number: "1",
  },
  {
    id: 3,
    smeta_name: "Pul shaklidagi ish haqi",
    smeta_number: "4111000",
    father_smeta_name: "1.1.0.0",
    group_number: "1",
  },
  {
    id: 2,
    smeta_name: "Ish haqi",
    smeta_number: "4110000",
    father_smeta_name: "1.1.1.0",
    group_number: "1",
  },
  {
    id: 4,
    smeta_name: "Asosiy ish haqi",
    smeta_number: "4111100",
    father_smeta_name: "1.1.1.1",
    group_number: "1",
  },
  {
    id: 5,
    smeta_name: "Ish haqiga ustama va qo‘shimcha to‘lovlar",
    smeta_number: "4111200",
    father_smeta_name: "1.1.1.2",
    group_number: "1",
  },
  {
    id: 6,
    smeta_name:
      "Umumta’lim maktablari, akademik litseylari, boshlang‘ich, o‘rta va o‘rta maxsus professional ta’lim muassasalarining o‘rnak ko‘rsatgan xodimlarini rag‘batlantirishning Direktor jamg‘armasi mablag‘lari",
    smeta_number: "4111210",
    father_smeta_name: "1.1.1.3",
    group_number: "1",
  },
  {
    id: 7,
    smeta_name: "Tibbiyot tashkilotlari xodimlariga ustama va qo‘shimchalar",
    smeta_number: "4111220",
    father_smeta_name: "1.1.1.4",
    group_number: "1",
  },
  {
    id: 8,
    smeta_name:
      "Uy-joy-kommunal xizmatlar bo‘yicha har oylik kompensatsiya to‘lovlari",
    smeta_number: "4299100",
    father_smeta_name: "1.1.1.5",
    group_number: "1",
  },
  {
    id: 9,
    smeta_name: "Nafaqalar",
    smeta_number: "4711100",
    father_smeta_name: "1.1.1.6",
    group_number: "1",
  },
  {
    id: 10,
    smeta_name: "Ishsizlik bo‘yicha nafaqa",
    smeta_number: "4711110",
    father_smeta_name: "1.1.1.7",
    group_number: "1",
  },
];

const remove_trailing_zeros = (str: string) => {
  return str.replace(/(\.0)+$/, "");
};

const array_starts_with = (arr: number[], prefix: number[]) => {
  return prefix.every((v, i) => v === arr[i]);
};

const groupNestedList = <T extends Record<string, unknown>>(
  list: T[],
  key: keyof T
) => {
  const normalized = list.map((item) => ({
    ...item,
    _levels: remove_trailing_zeros(String(item[key])).split(".").map(Number),
  }));

  const find_children = <K = (typeof normalized)[number]>(
    item: K
  ): K & { children: K } => {
    const children = normalized.filter(
      (item) =>
        array_starts_with(item._levels, item._levels) &&
        item._levels.length === item._levels.length + 1
    );
    return {
      ...item,
      children: children.map(find_children),
    };
  };

  const heads = normalized.filter((item) => item._levels.length === 1);
  const nested_list = heads.map(find_children);

  return nested_list;
};

const main = () => {
  const nested_list = groupNestedList(smeta_data, "group_number");

  nested_list[0].
};

export { main };
