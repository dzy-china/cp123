const download = require("download-git-repo");
const rimraf = require("rimraf");
const ora = require('ora');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const templateReplace = require('./step3.template-replace');

 /* 下载github仓库 */
 const download_fn = (projectType, projectName = "test")=>{

  // 启动下载状态
  const spinner = ora('正在下载···').start();

     // 1.下载之前先删除同名目录
    rimraf.sync(projectName, {}); 

    // 设置项目类型以及项目对应github下载地址
    const projectTypeMap = {
      "vite-vue-starter":"github:dzy-china/vite-vue-starter#main",
      "vite-vue-electron-starter":"github:dzy-china/vite-vue-electron-starter#main",
    }

    // 2.下载 github仓库到本地
    download(
      projectTypeMap[projectType], 
        projectName,
        { clone: true },
        function (err) {
          // 下载错误打印错误信息，并停止执行
          if(err){
            spinner.fail('下载失败！');
            return;
          }

          // 模板变量替换
          templateReplace(projectName)
         
          // 下载成功提示
          spinner.succeed('下载成功！');

          // 执行完毕
          console.log(logSymbols.success, chalk.green('恭喜，祝您使用愉快！'));
        }
      );
 }

 module.exports = download_fn