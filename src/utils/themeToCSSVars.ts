type ThemeObject = Record<string, string>;

export function themeToCSSVars(
  obj: ThemeObject,
  parentKey = '',
  prefix = '--',
): Record<string, string> {
  const result: Record<string, string> = {};

  Object.entries(obj).forEach(([key, value]) => {
    const kebabKey = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
    const fullKey = parentKey ? `${parentKey}-${kebabKey}` : kebabKey;

    if (typeof value === 'object' && value !== null) {
      Object.assign(result, themeToCSSVars(value, prefix, fullKey));
    } else {
      result[`${prefix}${fullKey}`] = String(value);
    }
  });

  return result;
}
