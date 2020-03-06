
export function remToPx(rem: number): number {
  return rem * parseFloat(document.documentElement.style.fontSize || '100');
}


export default {
  remToPx,
}
