export function delay<T>(ms: number, value?: T): Promise<T> {
	return new Promise<T>((resolve) => {
		setTimeout(() => resolve(value as T), ms);
	});
}
