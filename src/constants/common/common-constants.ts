export const emailCheckRegex = new RegExp('^((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$');
export const passwordCheckRegex = new RegExp('^((?=\\S*?[A-Z])(?=\\S*?[a-zA-Z])(?=\\S*?[0-9]).{8,})\\S$');

export const baseURL = 'https://marathon-api.clevertec.ru';
