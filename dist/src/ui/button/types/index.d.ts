import type { ButtonHTMLAttributes } from 'vue';
export type TBaseButtonVariant = 'primary' | 'secondary';
interface IBaseAttrs extends ButtonHTMLAttributes {
}
export interface IBaseButtonProps {
    attrs?: IBaseAttrs;
    variant?: TBaseButtonVariant;
}
export {};
