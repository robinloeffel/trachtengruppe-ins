export const truncate = (text: string, limit = 60) => (
  text.length > limit ? `${text.slice(0, limit)}...` : text
);
