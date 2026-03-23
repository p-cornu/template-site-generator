import fr from '../src/i18n/messages/fr.json';
import en from '../src/i18n/messages/en.json';

function getLeafKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  return Object.keys(obj).flatMap(key => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return getLeafKeys(value as Record<string, unknown>, fullKey);
    }
    return [fullKey];
  });
}

describe('Translation parity — FR / EN', () => {
  test('fr.json and en.json have the same keys', () => {
    const frKeys = getLeafKeys(fr as unknown as Record<string, unknown>).sort();
    const enKeys = getLeafKeys(en as unknown as Record<string, unknown>).sort();

    const missingInEn = frKeys.filter(k => !enKeys.includes(k));
    const missingInFr = enKeys.filter(k => !frKeys.includes(k));

    if (missingInEn.length > 0) {
      console.error('Keys in fr.json but not en.json:', missingInEn);
    }
    if (missingInFr.length > 0) {
      console.error('Keys in en.json but not fr.json:', missingInFr);
    }

    expect(missingInEn).toHaveLength(0);
    expect(missingInFr).toHaveLength(0);
  });

  test('no translation values are empty strings', () => {
    const frKeys = getLeafKeys(fr as unknown as Record<string, unknown>);
    frKeys.forEach(key => {
      const value = key.split('.').reduce((obj: unknown, k) => {
        if (obj && typeof obj === 'object') return (obj as Record<string, unknown>)[k];
        return undefined;
      }, fr as unknown);
      if (typeof value === 'string') {
        expect(value.trim()).not.toBe('');
      }
    });
  });
});
