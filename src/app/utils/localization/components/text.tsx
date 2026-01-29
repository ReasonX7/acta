import { JSXElement, useContext } from 'solid-js';

import { LocalizationContext } from '../context';

type TextProps = {
  key: string;
};

export function Text(props: TextProps): JSXElement {
  const context = useContext(LocalizationContext)

  return (
    <span>{context.locales()[props.key]}</span>
  );
}
