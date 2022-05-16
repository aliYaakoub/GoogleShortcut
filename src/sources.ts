import { SourceType } from "./types";

export const sources: SourceType[] = [
  {
    id: 'google',
    label: 'Search Google',
    link: 'https://www.google.com/search?q='
  },
  {
    id: 'stackOverflow',
    label: 'Search Stack Overflow',
    link: 'https://stackoverflow.com/search?q='
  },
  {
    id: 'mozillaDocs',
    label: 'Search Mozilla Docs',
    link: 'https://developer.mozilla.org/en-US/search?q='
  },
  {
    id: 'youtube',
    label: 'Search Youtube',
    link: 'https://www.youtube.com/results?search_query='
  },
];