export type ColDef = {
  id: string;
  field: string;
  name: string;
  width: number;
};

export type Row = {
  id: string;
  name: string;
  gender: string;
  age: number;
};

export const COL_DEFS: ColDef[] = [
  {
    id: "name",
    field: "name",
    name: "Name",
    width: 250,
  },
  {
    id: "gender",
    field: "gender",
    name: "Gender",
    width: 200,
  },
  {
    id: "age",
    field: "age",
    name: "Age",
    width: 100,
  },
  {
    id: "id",
    field: "id",
    name: "ID",
    width: 300,
  },
];
