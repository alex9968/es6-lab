//目标对象,需要通知发布的事情
function Subject() {
  //需要通知的对象列表
  this.observers = new ObserverList();
  //可以添加，删除通知名单
}

//观察者列表
function ObserverList() {
  this.observerList = []
}

//观察者
function Observer() {
  this.update = function() {}
}

ObserverList.prototype.add = function(obj){
  return this.ObserverList.push(obj)
}

ObserverList.prototype.count = function() {
  return this.ObserverList.length
}
ObserverList.prototype.get = function(index) {
  if(index > -1 && index < this.observerList.length){
    return this.observerList[index]
  }
}

ObserverList.prototype.indexOf = function(obj, startIndex) {
  var i = startIndex
  while(i < this.observerList.length){
    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i;
      }
      i++;
    }
    return -1;
  }
}

Subject.prototype.addObsrver = function(observer){
  this.observers.add(observer)
}
Subject.prototype.removeObserver = function(observer){
  this.observers.remoteAt(this.observers.indexOf(observer,0))
}

Subject.prototype.notify = function(context){
  var observerCount = this.observers.count()
  for(var i =0; i< observerCount; i++){
    this.observers.get(i).update(context)
  }
}


