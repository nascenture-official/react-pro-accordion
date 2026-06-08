export class HeightAnimation {
  constructor(options = {}) {
    this.duration = options.duration || 300;
    this.easing = options.easing || 'ease';
    this.startTime = null;
    this.startHeight = 0;
    this.endHeight = 0;
  }

  start(fromHeight, toHeight) {
    this.startTime = performance.now();
    this.startHeight = fromHeight;
    this.endHeight = toHeight;
  }

  update(currentTime) {
    if (!this.startTime) return this.endHeight;

    const elapsed = currentTime - this.startTime;
    const progress = Math.min(1, elapsed / this.duration);
    const easedProgress = this.getEasingProgress(progress);

    return this.startHeight + (this.endHeight - this.startHeight) * easedProgress;
  }

  getEasingProgress(progress) {
    switch (this.easing) {
      case 'linear':
        return progress;
      case 'ease-in':
        return progress * progress;
      case 'ease-out':
        return 1 - (1 - progress) * (1 - progress);
      case 'ease-in-out':
        return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      default:
        return progress;
    }
  }

  isComplete(currentTime) {
    return currentTime - this.startTime >= this.duration;
  }
}

export function createHeightAnimation(config) {
  return new HeightAnimation(config);
}
