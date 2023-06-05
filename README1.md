### 配置遇到的坑
一 初始化项目时安装好prettier跟eslint各种插件后，vscode的setting也配置好editor.codeActionsOnSave为true了
但是保存自动格式化代码死活不生效。后面经过搜索得知，vite项目初始化的使用package.json文件里面的type属性为
module，此时所有js文件使用的时ESM规范，不支持commonjs规范，要使.eslintrc文件能被识别，需要改成xxx.cjs后
缀才可以。虽然可以设置type:commonjs使.eslintrc.js文件生效，但是保存文件不会自动格式化，而是得使用npm run
prettier命令才会使代码格式化。为避免遇到这个问题：1 新建eslintrc配置时使用 npx eslit --init命令，自动构
建好.eslintrc.cjs文件 2 使用新版本vite时记得使用.cjs的后缀。（搜索关键字：eslint的配置文件为什么要以.cjs结尾）

二 初始化项目生成的tsconfig.node.json文件是针对vite.config.ts文件配置的。如果moduleResolution属性不设为node,
就会导致vite.config.ts中有些插件的引用找不到。