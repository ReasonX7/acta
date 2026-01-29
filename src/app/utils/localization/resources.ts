import { createResource, InitializedResourceReturn } from 'solid-js';

import { LocalizationRecord } from './model';

export function createLocalizationResource(): InitializedResourceReturn<LocalizationRecord> {
	return createResource<LocalizationRecord>(async () => {
		const response = await fetch('/locales/en-US.json');

		return response.ok ? response.json() : {};
	}, { initialValue: {} });
}
