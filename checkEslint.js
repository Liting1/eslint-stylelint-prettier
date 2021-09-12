/** @format */

const shell = require('shelljs');

let pass = 0;
// 检查是否有安装 git
if (!shell.which('git')) {
	shell.echo('Sorry, this script requires git');
	shell.exit(1);
}
// 获取暂存区的所有文件名，过滤掉删除的文件
const res = shell.exec('git diff --cached --diff-filter=d --name-only');
// 筛选出需要的文件
const fileList = res.grep('.*.(js|jsx|ts|tsx|css|less|scss|sass)$').split('\n');
const styleArr = [], scriptArr = [];
// 将所有文件分为 样式文件和脚本文件
fileList.forEach(file => {
	if(/\.(less|css|scss|sass)$/.test(file)){
		styleArr.push(file);
	}
	if(/\.(js|jsx|ts|tsx)$/.test(file)) {
		scriptArr.push(file);
	}
});

// 如果有样式文件则进行 stylelint 校验
if(styleArr.length) {
	const script = styleArr.length === 1 ? styleArr.join() : `{${styleArr.join()}}`;
	const styleError = shell.exec(`stylelint --config .stylelintrc.js ${script}`);
	if(styleError.stdout) {
		pass = 1;
	}
}

// 如果有脚本文件则进行 eslint 校验
if(scriptArr.length) {
	const script = scriptArr.length === 1 ? scriptArr.join() : `{${scriptArr.join()}}`;
	const scriptError = shell.exec(`eslint --config .eslintrc.js ${script}`);
	if(scriptError.stdout) {
		pass = 1;
	}
}

console.log(styleArr, scriptArr);
// 如果校验不通过则退出程序
if(pass) {
	shell.exit(1);
}
