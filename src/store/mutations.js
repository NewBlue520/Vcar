import fs from 'fs'
console.log(fs);
const CREATE_FAIL = 'CREATE_FAIL';

export default {
  [CREATE_FAIL](){
    alert(1111);
   /* fs.mkdir('/file', (err) => {
      if (err) return err;
      console.log('创建目录');
    })*/
  }
};
