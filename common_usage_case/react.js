function getArticleTem() {
  //简单传递
  const clickHandler = () => {
    console.log('')
  }
  //事件参数e，e可以被console接收
  const clickHandler = (e) => {
    console.log('',e)
  }
  return(
  <div className = 'getArticleTem'>
  <button onClick = {clickHandler}></button>
  {
    articleType === 1 ? <span>Loading...</span> :
    articleType === 2 ? <span>Error occurred</span> :
    articleType === 3 ? <span>Operation successful</span> :
    <span>Unknown status</span>
  }
  </div>
  )
  
  //形参传递实参 : 利用箭头函数的形式引用
  const clickHandler = (name) => {
    console.log('',name)
  }
  return(<button onClick = {() => clickHandler('jack')}> clickme </button>)
  
  
  //同时传递事件对象和自定义参数
  const clickHandler = (name , e) => {
    console.log('',name , e)
  }
  return(<button onClick = {(e) => clickHandler('jack' ,e)}> clickme </button>)
  
  }
  