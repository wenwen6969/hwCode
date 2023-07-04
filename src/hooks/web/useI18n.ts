type I18GlobalTranslation = {
	(key: string): string;
	(key: string, locale: string): any;
	(key: string, locale: string, list: unknown[]): string;
	(key: string, locale: string, named: Record<string, unknown>): string;
	(key: string, named: Record<string, unknown>): string;
	(key: string, list: unknown[]): string;
};

type I18TranslationRestParameters = [string, any];

function getKey(namespace: string | undefined, key: string) {
	if (!namespace) return key;
	if (key.startsWith(namespace)) return key;
	return `${namespace}.${key}`;
}

export function useI18n(namespace?: string): {
	t: I18GlobalTranslation;
} {
	const normalFn = {
		t: (key: string) => {
			return getKey(namespace, key);
		},
	};
	if (!i18n) {
		return normalFn;
	}
	const { t, ...methods } = i18n.global;
}
