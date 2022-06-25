/* eslint-disable */

export class Stack<T> {
  private data: T[] = []
  private top: number = 0

  constructor() {}

  public push(item: T) {
    this.data[this.top] = item
    this.top = this.top + 1
  }

  public length() {
    return this.top
  }

  public peek(offset?: number): T | undefined {
    const delta = offset ? offset + 1 : 1
    const index = this.top - delta

    if (index < 0) return
    return this.data[index]
  }

  public clear(): void {
    this.data.length = this.top = 0
  }

  public pop(): T | undefined {
    if (this.top === 0) return

    this.top = this.top - 1
    return this.data.pop()
  }

  public getAll(): T[] {
    return this.data
  }
}
