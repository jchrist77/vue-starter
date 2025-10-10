export class CounterService {
  count: number = 0

  constructor(_count: number = 0) {
    this.count = _count
  }

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }

  reset() {
    this.count = 0
  }
}
