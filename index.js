function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector(".target")
}
function increaseRankBy(n) {
  var lis=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0;i<lis.length;i++) {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}

function deepestChild(){
  let current = document.getElementById('grand-node')
  let next = []
  let criteriaFN = n => n > 5
  
   while (current) {
    if (criteriaFn(current)) {
      return current
    }
     if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
  
  
}

