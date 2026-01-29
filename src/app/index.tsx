import { JSXElement } from 'solid-js';
import { render } from 'solid-js/web';

import { LocalizationProvider, Text } from './utils/localization';

function Root(): JSXElement {
	return (
		<LocalizationProvider>
			<Text key="AppName" />
		</LocalizationProvider>
	);
}

render(Root, document.getElementById('root')!);
