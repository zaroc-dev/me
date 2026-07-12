const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
};
