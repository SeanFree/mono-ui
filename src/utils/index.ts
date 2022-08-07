export const { max, min, random } = Math

export const clamp = (n: number, mn: number, mx: number): number =>
  min(max(n, mn), mx)

export const norm = (n: number, mn: number, mx: number): number =>
  (n - mn) / (mx - mn)

export const pad = (
  v: number | string,
  n: number,
  c: number | string
): string => `${c.toString().repeat(n)}${v}`.slice(-n)

export const hhmmss = (s: number): string => {
  const m = (s / 60) | 0
  const h = (m / 60) | 0
  const HH = h ? `${pad(h, 2, '0')}:` : ''
  const MM = pad((s / 60) | 0, h || m >= 10 ? 2 : 1, '0')
  const SS = pad(s % 60 | 0, 2, '0')

  return `${HH}${MM}:${SS}`
}

type ClassConfig = {
  [className: string]: boolean
}

export const classNames = (classConfig: ClassConfig | string[]) => {
  if (Array.isArray(classConfig)) {
    return classConfig.join(' ')
  } else {
    return Object.entries(classConfig)
      .reduce(
        (classList, [className, condition]) =>
          `${classList}${condition ? ` ${className}` : ''}`,
        ''
      )
      .trim()
  }
}

export const noop = (): void => {}

export const nearestMultiple = (n: number, d: number): number => n - (n % d)

export const uniqueId = (): string =>
  (new Date().valueOf() + random()).toString(16)
