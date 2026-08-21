// Front

import { ProductFormState } from "./product";

export type FieldType = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

export type DataType = {
  formData: ProductFormState;
};

export type EditableDataType = {
  formData: ProductFormState;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormState>>;
};

export type TextFieldKey = keyof Pick<
  ProductFormState,
  "title" | "storage" | "ram" | "color"
>;

export type ProductFieldConfig = {
  label: string;
  key: TextFieldKey;
  placeholder: string;
};

export type PriceFieldType = {
  label: string;
  value: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
};

export type UrlType = {
  action: (payload: FormData) => void;
};
