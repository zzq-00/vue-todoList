const vm = new Vue({
	el:'#app',	
	data:{
		todos:[
			{id:1,name:'zz',done:false},
			{id:2,name:'wt',done:false},
		],
		Newtodos:[],
		txt:'',
		id:2,
		currentEdit:null,
	},
	methods:{
		// 点击回车发送内容
		send(){
			console.log(123);
			
			let txt = this.txt.trim();
			if (!txt.length) {
				return
			};
			// console.log("点击发送");
			this.todos.unshift(
				{id:++this.id,name:this.txt,done:false},
			)	
			// 清空文本
			this.txt = " ";	
			this.Newtodos = this.todos;	
		},

		// 点击x删除当前项
		del(index){
			this.todos.splice(index,1);
		},

		// 清除所有已完成项
		clearAllDone(){
			console.log(111);
			
			for (let i = 0; i < this.todos.length; i++) {
				if (this.todos[i].done) {
					this.todos.splice(i,1);
					i--;
				}				
			}
		},

		// 全选反选
		onClickedAllChange(e){
			// console.log(e.target.checked);
			const status = e.target.checked
			// console.log(status);
			this.todos.forEach((item,index)=>{
				item.done = status
			});
			
		},

		// 编辑--回车保存
		onSaveData(e){
			// console.log(e.target.value);
			this.currentEdit.name = e.target.value;
			this.currentEdit = null;			
		},
		
		// 显示全部
		onShowAll(){
			this.todos = this.Newtodos
		},

		// 显示未完成项
		onShowDown(){
			const arr1 = this.Newtodos.filter(function(item,index){
				return item.done ==false
			})
			this.todos = arr1
		},

		// 显示已完成项
		onShowSucc(){
			const arr2 = this.Newtodos.filter(function(item,index){
				return item.done == true
			})
			this.todos = arr2
		},
	},
	computed:{
		// 显示隐藏清除按钮
		isOnlyone(){
			return this.todos.some(function(item,index){
				return item.done
			})
			// return res
		},

		// 计算未完成条数
		unDoneCount(){
			// const arr = this.todos.filter(function(item,index){
			// 	return item.done === false
			// })
			// return arr.length;

			return this.todos.filter(t => !t.done).length //简写
		},

		// 全选高亮
		isAllchecked(){			
			const res = this.todos.every((item,index)=>{
				return item.done ==true
			})
			// console.log(res);			
			return res;			
		}



	}

})
	
