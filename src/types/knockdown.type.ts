import { ThrowingLuck } from "./throwing-luck.type";

export type KnockDown<T, K extends ThrowingLuck> = T extends {
  [P in K]: unknown;
}
  ? T[K]
  : never;
