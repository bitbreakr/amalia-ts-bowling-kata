import { DownedPinsCount } from "./downed-pins-count.type";

export interface DownedPinsPossibilities {
  strike: Extract<DownedPinsCount, 10>;
  spare: Exclude<DownedPinsCount, 10 | 0>;
  open: DownedPinsCount;
}
