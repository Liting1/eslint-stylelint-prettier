/** @format */

module.exports = {
	extends: ['stylelint-config-prettier', 'stylelint-config-recess-order', 'stylelint-config-standard'],
	plugins: ['stylelint-prettier', 'stylelint-order'],
	rules: {
		indentation: 2,
		'order/properties-order': ['never'],
		'max-nesting-depth': 4,
	},
};
