export enum ROUTES {
  ALL = '*',
  HOME = '/',
  LOGIN = '/login/',
  NOT_FOUND = '/not-found/',
  FAQS = '/my-account/support/faqs/',
  CATEGORY = '/category',
  EXPLORE = '/explore',
  PROFILE = '/profile/',
  DESIGNER_HOME = '/designer/',
  CAPTURE_IMAGE = 'capture-image',
}

export const PUBLIC_ROUTES_REDIRECT = [
  {
    path: '',
    to: ''
  }
];
