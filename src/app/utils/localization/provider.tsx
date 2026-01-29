import { JSXElement, ParentProps } from 'solid-js';

import { LocalizationContext } from './context';
import { createLocalizationResource } from './resources';

export function LocalizationProvider(props: ParentProps): JSXElement {
	const [locales, actions] = createLocalizationResource();

	const refetch = () => Promise.resolve(actions.refetch()).then((result) => result!);

	return (
		<LocalizationContext.Provider value={{ locales, refetch }}>
			{props.children}
		</LocalizationContext.Provider>
	);
}
