export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'custom-property-pattern': null,
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'custom-property-empty-line-before': null,
    'order/properties-order': [
      [
        {
          groupName: 'Позиционирование',
          properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index'],
        },
        {
          groupName: 'Блочная модель',
          properties: [
            'display',
            'float',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'padding',
          ],
        },
        {
          groupName: 'Типографика',
          properties: [
            'font',
            'font-style',
            'font-size',
            'line-height',
            'font-family',
            'text-align',
            'font-weight',
            'letter-spacing',
            'text-transform',
            'text-decoration',
            'white-space',
          ],
        },
        {
          groupName: 'Оформление',
          properties: [
            'color',
            'background-color',
            'background',
            'background-image',
            'background-position',
            'background-size',
            'border',
            'border-radius',
            'opacity',
            'box-shadow',
          ],
        },
        {
          groupName: 'Анимация',
          properties: [
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
          ],
        },
      ],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
}
