import { Color, ThreeElements } from "@react-three/fiber";

export type ShapeParams = ThreeElements["mesh"] & {
  size?: number;
  color?: Color;
  colorOnHover?: Color;
};
