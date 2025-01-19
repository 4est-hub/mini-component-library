// Inherited 'div' element props, plus additoinal props to meet requrements. 

export type ScenarioProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpen?: boolean;  // optional prop standard with modals
  onClose?: () => void;
  'data-testid'?: string;
};
  