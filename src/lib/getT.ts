/**
 * Minimal server-side translator that works without the next-intl plugin.
 * Loads raw JSON messages and does nested key lookups like "categories.entrees".
 */
export async function getT(locale: string, namespace: string) {
  const messages = (await import(`@/i18n/messages/${locale}.json`)).default as Record<string, unknown>;
  const ns = messages[namespace] as Record<string, unknown> | undefined;

  return function t(key: string): string {
    if (!ns) return key;
    const parts = key.split('.');
    let value: unknown = ns;
    for (const part of parts) {
      if (typeof value === 'object' && value !== null) {
        value = (value as Record<string, unknown>)[part];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };
}
