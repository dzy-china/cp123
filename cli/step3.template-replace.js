
const handlebars = require('handlebars');
const fs = require("fs")


 /* 模板变量替换 */
 const template_replace_fn = (tpl_var)=>{
 
    // 定义待替换变量的模板文件路径
    const template_file_path = `${tpl_var}/package.json`

    // 同步读取
    let str_template = fs.readFileSync(template_file_path,"utf-8");
    const replace_key_data = { name: tpl_var }
    const new_str = handlebars.compile(str_template)(replace_key_data); 

    // 同步写入
    fs.writeFileSync(template_file_path, new_str);

 }

 module.exports = template_replace_fn