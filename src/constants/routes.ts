export enum ROUTES {
  ALL = '*',
  HOME = '/',
  LOGIN = '/login/',
  NOT_FOUND = '/not-found/',
  FAQS = '/my-account/support/faqs/',
  CATEGORY = '/category/',
  EXPLORE = '/explore/',
  EXPLORE_CATEGORY = '/explore/:type',
  EXPLORE_SEARCH = '/explore_s/:search',
  PROFILE = '/profile/',
  DESIGNER_SIGNUP = '/designer-signup/',
  DESIGNER_HOME = '/designer-home/',
  CAPTURE_IMAGE = '/capture-image',
  MEASUREMENT = '/measurement',
  OUTFIT_DETAILS = '/outfit-details/:id',
  AI_ENHANCER = '/ai-enhancer',
  CHECKOUT = '/checkout',
  STYLE_EDITOR='/style-editor',
  MEASUREMENT_DETAILS = '/measurement-details',
  DESIGN_PREVIEW = '/designer-home/design-preview',
  DESIGN_VARIATIONS = '/designer-home/design-preview/101/design-variations',
  DESIGN_PROMPT = '/designer-home/design-prompt',
}

export const PUBLIC_ROUTES_REDIRECT = [
  {
    path: '',
    to: ''
  }
];
