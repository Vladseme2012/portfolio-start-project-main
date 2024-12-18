import { theme } from './Theme';

type FontPropsType = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: number;
    fontMin?: number;
    fontMax?: number;
};

export const font = ({
    family,
    weight,
    color,
    lineHeight,
    fontMin,
    fontMax,
}: FontPropsType) => `
  font-family: ${family || 'Poppins'};
  font-weight: ${weight || 400};
  color: ${color || theme.colors.colorText};
  line-height: ${lineHeight || 1.2};
  font-size: calc( (100vw - 360)/(1440 - 360) * (${fontMax} - ${fontMin}) + ${fontMin}px);
`;
