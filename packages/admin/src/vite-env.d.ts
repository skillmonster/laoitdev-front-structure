/// <reference types="vite/client" />
declare global {
  type Mode = 'staging' | 'development' | 'production';
}
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
type FieldValues = Record<string>;
type RequireOne<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & {
  [P in K]-?: T[P];
};

type OptionalOne<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]: T[X];
} & {
  [P in K]?: T[P];
};

type TuplifyUnion<
  T,
  L = LastOf<T>,
  N = [T] extends [never] ? true : false
> = true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;

type Status = 'PENDING' | 'SUBMITTED' | 'REJECTED' | 'VERIFIED' | 'ACCEPTED';
