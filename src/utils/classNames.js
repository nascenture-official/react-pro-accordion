export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function createAccordionClass(baseClass, modifiers = {}) {
  const classes = [baseClass];

  for (const [modifier, value] of Object.entries(modifiers)) {
    if (value) {
      classes.push(`${baseClass}--${modifier}`);
    }
  }

  return classes.join(' ');
}

export function prefixClass(prefix, className) {
  return className ? `${prefix}__${className}` : prefix;
}
