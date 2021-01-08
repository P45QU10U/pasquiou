// Typography

// backgroundColors
export const mainBgColor = 'bg-indigo-500'
export const mainBgColorHover = 'bg-indigo-600'
export const mainTextColor = 'text-white'
export const mainTextColorHover = 'text-white'

export const secBgColor = 'bg-indigo-300'
export const secBgColorHover = 'bg-indigo-300'
export const secTextColor = 'text-gray-400'
export const secTextColorHover = 'text-white'

export const maxWidthSections = ['max-w-sm', 'md:max-w-2xl', 'lg:max-w-4xl', 'mx-auto', 'w-xl', 'md:w-2xl']

// Sizes
export const sizes = {}

// Buttons
export const buttonpurposes = {
  primary: `${mainBgColor} hover:${mainBgColorHover} ${mainTextColor} hover:${mainTextColorHover} font-bold rounded uppercase`,
  secondary: `${secBgColor} hover:${secBgColorHover} text-white font-bold rounded`,
  basic: 'bg-white hover:bg-gray-700 text-gray-700 font-bold rounded',
  delete: 'bg-red-300 hover:bg-red-500 text-white font-bold rounded',
}

export const buttonsizes = {
  sm: 'py-2 px-4 text-xs',
  lg: 'py-3 px-6 text-lg',
}
