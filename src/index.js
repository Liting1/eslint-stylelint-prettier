/** @format */

module.exports = {
	env: {
		browser: true, // 浏览器环境
		node: true, // node环境
		es6: true, // es6 环境
	},
	extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'plugin:jsdoc/recommended', 'prettier'],
	plugins: ['jsdoc', 'react', 'jsx-a11y', 'import', 'prettier', '@typescript-eslint'],
	parserOptions: {
		node: true,
		ecmaVersion: 11,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	parser: '@typescript-eslint/parser', // 定义ESLint的解析器
	globals: {
		it: 'writable',
		Context: 'writable',
		Next: 'writable',
		wx: 'readonly',
	},
	rules: {
		// https://eslint.bootcss.com/docs/rules/ 基本规则参考文档地址
		'no-console': 'off', // 允许使用 console
		radix: 'off', // parseInt方法不强制使用第二个参数
		'linebreak-style': ['error', 'unix'], // 强制使用Linux的LF换行符
		'guard-for-in': 'off', // 关闭要求 for-in 循环中有一个 if 语句
		'no-return-await': 'off', // 允许直接返回 await 结果
		'prefer-promise-reject-errors': 'off',
		'no-continue': 'off', // 允许使用 continue
		'spaced-comment': ['error', 'always'], // 注释必须有空格
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForOfStatement',
				message: '不允许使用 for of  语法',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '不允许使用 with 语法',
			},
		],
		'new-cap': 'error', // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
		camelcase: [
			'warn',
			{
				// 强制使用骆驼拼写法命名约定
				properties: 'always',
			},
		],
		'max-params': ['error', 4], // 函数最多四个参数
		'no-underscore-dangle': 'off', // 关闭标识符不能以_开头或结尾
		'no-nested-ternary': 'error', // 禁止使用嵌套的三元表达式,避免代码难以理解
		'no-useless-constructor': 'error', // 关闭禁止不必要的构造函数
		'no-plusplus': 'off', // 关闭禁止使用++，--
		'no-unreachable': 'error', // 禁止有不能执行的代码
		'no-control-regex': 'off', // 关闭禁止在正则表达式中使用控制字符
		'class-methods-use-this': 'off', // 关闭强制类方法使用 this
		'no-use-before-define': 'off', // 关闭未定义前不能使用
		'no-shadow': 'error', // 关闭外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
		'no-extra-semi': 'error', // 禁止多余的分号
		eqeqeq: ['error', 'always'], // 要求使用 === 和 !==
		'jsx-quotes': ['error', 'prefer-double'], // 强制在 JSX 属性中一致地使用双引号

		// 相关文档地址：https://www.npmjs.com/package/eslint-plugin-react reactEslint配置参考地址
		'react/no-multi-comp': [
			'error',
			{
				// 禁止单个文件有多个组件定义, 允许多个无状态组件
				ignoreStateless: true,
			},
		],
		'react/no-array-index-key': 'warn', // 禁止使用数据索引作为元素的key值
		'react/jsx-pascal-case': ['error'], // 为用户定义的 JSX 组件强制使用 PascalCase
		'react/no-unknown-property': [
			'error',
			{
				// 禁止使用未知的DOM属性
				ignore: ['crossOrigin'],
			},
		],
		'react/jsx-filename-extension': [
			'error',
			{
				// 限制可能包含JSX的文件扩展名
				extensions: ['.tsx', '.jsx', '.js'],
			},
		],
		'react/prop-types': 'error', // 防止React组件定义中缺少道具验证
		'react/static-property-placement': 'off', // 不限制静态属性书写位置
		'react/destructuring-assignment': 'off', // 关闭执行支持、状态和上下文的解构赋值的一致使用,
		'react/prefer-stateless-function': 'off', // 关闭强制将无状态组件编写为纯函数,

		// 相关文档地址：https://www.npmjs.com/package/eslint-plugin-import
		'import/no-unresolved': [
			'error',
			{
				// 没有找到对应模块不报错
				ignore: ['(png|jpg|jpeg|gif|svg)$'],
			},
		],
		'import/extensions': [
			// 允许导入的文件省略后缀
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/prefer-default-export': 'off', // 关闭单个导出时必须使用默认导出

		// 相关文档地址：https://www.npmjs.com/package/eslint-plugin-jsx-a11y
		'jsx-a11y/alt-text': 'error', // 强制要求可选文本的所有元素都具有有意义的信息，以便传回给最终用户。
		'jsx-a11y/click-events-have-key-events': 'off', // 关闭强制一个可单击的非交互元素至少有一个键盘事件监听器。
		'jsx-a11y/no-static-element-interactions': 'off', // 关闭强制要求有交互操作的静态标签设置role属性
		'jsx-a11y/no-noninteractive-element-interactions': 'off', // 关闭强制要求非交互语义标签(main,hX,ul,ol,liarea)不包含交互事件(onClick等)

		// 相关文档地址：https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
		'@typescript-eslint/no-unused-vars': 'error', // 不允许未使用的变量
		'@typescript-eslint/explicit-member-accessibility': 'off', // 关闭要求类属性和方法上的显式可访问性修饰符
		'@typescript-eslint/no-object-literal-type-assertion': 'off', // 关闭禁止对象字面值出现在类型断言表达式中(来自TSLint的no-object-literal-type-assertion)
		'@typescript-eslint/explicit-function-return-type': 'off', // 关闭要求函数和类方法的显式返回类型
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭在导出的函数和类的公共类方法上要求显式的返回和参数类型
		'@typescript-eslint/no-use-before-define': ['error'], // 禁止在定义变量之前使用变量
		'@typescript-eslint/no-shadow': ['error'], // 禁止变量声明隐藏在外部作用域中声明的变量
		'@typescript-eslint/no-var-requires': 0, // 除了在import语句中，禁止使用require语句

		// 注释规则 https://www.npmjs.com/package/eslint-plugin-jsdoc
		'jsdoc/require-jsdoc': [
			'error',
			{
				contexts: [
					// 排除一些常用声明周期函数
					'MethodDefinition:not([key.name="componentDidMount"]):not([key.name="render"]):not([key.name="constructor"]):not([key.name="componentDidUpdate"]):not([key.name="shouldComponentUpdate"])',
				],
				require: {
					FunctionDeclaration: true,
					ClassDeclaration: true, // 类及其方法注释
					ArrowFunctionExpression: true, // 箭头函数也需要注释
					ClassExpression: true,
					FunctionExpression: true, // 普通函数注释
				},
			},
		],
		'jsdoc/check-tag-names': [
			'error',
			{
				// 防止与 prettier 冲突
				definedTags: ['format'],
			},
		],
		'jsdoc/require-param': 'error',
		'jsdoc/require-param-description': 'error',
		'jsdoc/require-param-name': 'error',
		'jsdoc/require-param-type': 'error', // 函数的类型
		'jsdoc/require-returns': 'error', // 函数的返回值
		'jsdoc/require-description': 'error',

		'prettier/prettier': ['error'],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
			},
		},
		'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
		jsdoc: {
			structuredTags: {
				format: {
					type: false,
				},
			},
		},
	},
};
