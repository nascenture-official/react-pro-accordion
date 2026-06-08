export function getElementHeight(element) {
  if (!element) return 0;

  const clone = element.cloneNode(true);
  clone.style.position = 'absolute';
  clone.style.visibility = 'hidden';
  clone.style.height = 'auto';
  clone.style.display = 'block';

  element.parentNode.appendChild(clone);
  const height = clone.offsetHeight;
  clone.parentNode.removeChild(clone);

  return height;
}

export function setElementHeight(element, height) {
  if (element) {
    element.style.height = `${height}px`;
  }
}

export function getScrollParent(element) {
  let parent = element.parentElement;

  while (parent) {
    const overflowY = window.getComputedStyle(parent).overflowY;
    if (overflowY === 'auto' || overflowY === 'scroll') {
      return parent;
    }
    parent = parent.parentElement;
  }

  return document.documentElement;
}

export function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  return rect.top >= 0 && rect.bottom <= viewportHeight;
}

export function scrollElementIntoView(element, options = {}) {
  if (element) {
    element.scrollIntoView({
      behavior: options.behavior || 'smooth',
      block: options.block || 'nearest',
      inline: options.inline || 'nearest',
    });
  }
}
