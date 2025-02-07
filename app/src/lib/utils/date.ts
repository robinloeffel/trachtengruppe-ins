export const formatFullDate = (dateFromSanity: string) => new Intl.DateTimeFormat("de-ch", {
	weekday: "long",
	day: "2-digit",
	month: "short",
	year: "numeric",
	hour: "numeric",
	minute: "numeric"
}).format(new Date(dateFromSanity));

export const formatDate = (dateFromSanity: string) => new Intl.DateTimeFormat("de-ch", {
	day: "2-digit",
	month: "2-digit",
	year: "numeric"
}).format(new Date(dateFromSanity));

export const formatTime = (dateFromSanity: string) => new Intl.DateTimeFormat("de-ch", {
	hour: "numeric",
	minute: "numeric"
}).format(new Date(dateFromSanity));
