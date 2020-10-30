//冒泡排序
//最坏时间复杂度为 O(n²),假设有5个数，循环次数为 4 + 3 + 2 + 1，即n(n+1)/2次（n+1为元素个数）
function bubbleSort(arr) {
	//保证输入类型，且数组长度不小于1
	if(!Array.isArray(arr) || arr.length < 1) {
		return
	}

	//交换数组两个元素的值
	let swap = (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	for(var i = 0; i< arr.length -1; i++){
		var flag = true; //定义此轮循环是否发生调序操作

		//开始一轮冒泡, j < arr.length -1 -i 末尾元素是已经完成的冒泡轮次产生的固定值，不需要重新比了
		for(var j = 0; j < arr.length -1 -i; j++){

			if(arr[j] > arr[j+1]){
				swap(arr, j,j+1)
				flag = false;
			}

		}
		//当这轮冒泡没对改变过元素顺序,那就说明排好了,即可以结束循环了
		if(flag){
			break;
		}
	}




}

//插入排序
//最坏时间复杂度为 O(n²) 假设有5个数，则循环次数为  1 + 2 + 3 + 4
function insertSort(arr) {
	//保证输入类型，且数组长度不小于1
	if(!Array.isArray(arr) || arr.length < 1) {
		return
	}

	//交换数组两个元素的值
	let swap = (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	for(var i = 1; i< arr.length; i++) {
		var j =i;

		//向前去比较，当还有前一个元素且当前元素还是小于前一个元素时交换一下。 j变小，但arr[j]的值一直没变
		while(j-1 >= 0 && arr[j] < arr[j - 1]){
			 swap(arr,j,j-1);
                j--;
		}

	}

}

//实现indexOf方法,取出第一个相同值的下标
function indexOf(arr, val){
	if(!Array.isArray(arr)){
		return
	} 

	for(let i =0; i< arr.length; i++){
		if(arr[i] === val){
			return i
		}
	}

	return -1
}

//选择排序
function selectorSort(arr) {
	//保证输入类型为数组
	if(!Array.isArray(arr)){
		return
	} 

	//交换数组两个元素的值
	let swap = (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	//坑位号循环
	for(var i = 0; i< arr.length-1; i++){
		var min  = i; //当前位置的最小数的下标，默认就是原位置数的下标

		//当前坑位下所需的最小元素下标
		for(var j = i+1; j < arr.length; j++){
			if(arr[j] < arr[min]){
				min = j
			}
		}

		//如果下标变了，则换位
		if(min !== i){
			swap(arr,min,i)
		}
	}
}


//数组去重
function unique(arr){
	//保证输入类型为数组
	if(!Array.isArray(arr)){
		return
	} 

	return arr.reduce((pre, cur, index, arr) => {
		if(!pre.includes(cur)){
			return pre.concat(cur)
		}else {
			return pre
		}
	}, [])
}
