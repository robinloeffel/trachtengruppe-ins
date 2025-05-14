export const dateTimeLong = (dateFromSanity: string) => new Intl.DateTimeFormat("de-ch", {
  dateStyle: "full",
  timeStyle: "short"
}).format(new Date(dateFromSanity));

export const dateTimeShort = (dateFromSanity: string) => new Intl.DateTimeFormat("de-ch", {
  dateStyle: "short",
  timeStyle: "short"
}).format(new Date(dateFromSanity));
