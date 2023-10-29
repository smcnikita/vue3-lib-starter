import type { InputHTMLAttributes } from 'vue';

export type TBaseInputVariant = 'primary' | 'secondary';
export type TBaseInputValue = string | number | null;

interface IBaseAttrs extends InputHTMLAttributes {}

export interface IBaseInputProps {
  attrs?: IBaseAttrs;
  variant?: TBaseInputVariant;
  modelValue: TBaseInputValue;
  modelModifiers?: { [key: string]: string };
}
