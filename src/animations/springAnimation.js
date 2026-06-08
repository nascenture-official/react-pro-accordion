export class SpringAnimation {
  constructor(options = {}) {
    this.stiffness = options.stiffness || 170;
    this.damping = options.damping || 26;
    this.mass = options.mass || 1;
    this.velocity = options.velocity || 0;
  }

  calculate(initialValue, targetValue, currentValue, timeDelta) {
    const displacement = currentValue - targetValue;
    const springForce = -this.stiffness * displacement;
    const dampingForce = -this.damping * this.velocity;
    const acceleration = (springForce + dampingForce) / this.mass;

    this.velocity += acceleration * timeDelta;
    const newValue = currentValue + this.velocity * timeDelta;

    return {
      value: newValue,
      velocity: this.velocity,
      isSettled: Math.abs(displacement) < 0.01 && Math.abs(this.velocity) < 0.01,
    };
  }

  reset() {
    this.velocity = 0;
  }
}

export function createSpringAnimation(config) {
  return new SpringAnimation(config);
}
