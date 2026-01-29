import { createContext } from 'solid-js';

import { LocalizationRecord } from './model.ts';

export const LocalizationContext = createContext<{
  locales: () => LocalizationRecord,
  refetch: () => Promise<LocalizationRecord>,
}>({
  locales: () => ({}),
  refetch: () => Promise.resolve({}),
});
