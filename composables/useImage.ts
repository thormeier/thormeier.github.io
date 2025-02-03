export function useImage(path: string): string {
  if (path.startsWith('http')) {
    return path
  }

  const assets = import.meta.glob('~/assets/images/**/*', {
    eager: true,
    import: 'default',
  })
  // @ts-expect-error: wrong type info
  return assets[`/assets/images/${path}`]
}
