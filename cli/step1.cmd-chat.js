
const inquirer = require('inquirer');
const download = require('./step2.download-github');

 /* 命令行交互 */
const cmd_fn = ()=>{

    const questions = [
        {
          type: 'list',
          name: 'projectType',
          message: '选择项目模板类型?',
          choices: ['vite-vue-starter', 'vite-vue-electron-starter']
        },
        {
          type: 'input',
          name: 'projectName',
          default:'test',
          message: '填写项目名：'
        }
      ];
    
      inquirer.prompt(questions)
      .then(answers => { //answers数据结构参考： { projectName: '用户输入值' }
    
       const projectType = answers.projectType;
       const projectName = answers.projectName;
    
        // 下载资源
        download(projectType, projectName)
    
      });

}

module.exports = cmd_fn

