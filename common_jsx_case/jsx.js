//jsx 使用js 功能的高频场景 { }只能识别表达式，语句（if/switch/variable declear）不可以

// function App(){
// 	return (
// 		<div className = "App">
// 		 this is App 
// 		 {使用引号传递字符串}
// 		 {'This is string content'}
// 		</div>
// 	)
// }

// const variable = 100

// function App(){
// 	return (
// 		<div className = "App">
// 		 this is App 
// 		 {/* 识别js变量 */}
// 		 {variable}
// 		</div>
// 	)
// }


// function getName(){
// 	return 'jack'
// }

// function App(){
// 	return (
// 		<div className = "App">
// 		 this is App 
// 		 {/* function调用 */}
// 		 {getName()}
// 		 {/* build-in methods 调用 */}
// 		 {new Date().getDate()}
// 		</div>
// 	)
// }

// function App(){
// 	return (
// 		{/* inside style 应用 */}
// 		<div className = "App" style={{color: "red"}}>
// 		 this is App 
// 		</div>
// 	)
// }