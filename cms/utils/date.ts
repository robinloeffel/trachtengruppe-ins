export const formatDate = (dateFromSanity: string) => new Intl.DateTimeFormat("de-ch", {
  dateStyle: "short"
}).format(new Date(dateFromSanity));
