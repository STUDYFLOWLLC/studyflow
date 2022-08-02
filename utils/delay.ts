/* eslint-disable no-promise-executor-return */

export default function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms))
}
