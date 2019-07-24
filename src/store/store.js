const STORAGE_KEY = 'tabale-vue.js' //名字随便起
export default {//向外输出，以便组件接受
  fecth(){//定义获取数据的方法
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)
    || '[]')
  },
  save(items){//定义保存数据的方法
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))

  }
}
//getItem和setItem是window.localStorage的获取和保存数据的方法
//用JSON.stringify和JSON.parse把数据转成字符串和解析，方便写入tabledata
