export enum ROUTES {
  ALL = '*',
  HOME = '/',
  LOGIN = '/login/',
  NOT_FOUND = '/not-found/',
  FAQS = '/my-account/support/faqs/',
  CATEGORY = '/category/',
  EXPLORE = '/explore/',
  EXPLORE_CATEGORY = '/explore/:type',
  PROFILE = '/profile/',
  DESIGNER_SIGNUP = '/designer-signup/',
  DESIGNER_HOME = '/designer-home/',
  CAPTURE_IMAGE = '/capture-image',
  MEASUREMENT = '/measurement',
  OUTFIT_DETAILS = '/outfit-details',
  STYLE_EDITOR = '/style-editor',
  AI_ENHANCER = '/ai-enhancer'
}

export const PUBLIC_ROUTES_REDIRECT = [
  {
    path: '',
    to: ''
  }
];
