//var a=[1000,2000,2018,2909,3000,4000,4210,4390,5000];
var a=[];
var b=4500;
var c=2900;

for(var i=0;i<5000;i++){
	a.push(i);
}

function halfMethod(arr,aim,start,end,lastStart,lastEnd){
    if(start>end)
        return -1;
    if(lastStart>-1&&lastEnd>-1)
        return Math.round((lastStart+lastEnd)/2);
    else{
        var mid=Math.round((start+end)/2);
        if(aim==arr[mid])
            return halfMethod(arr,aim,mid,mid,mid,mid);
        else if(aim<arr[mid])
            return halfMethod(arr,aim,start,mid,lastStart,mid);
        else if(aim>arr[mid])
            return halfMethod(arr,aim,mid,end,mid,lastEnd);
    }
}
console.time('halfMethod');
console.log('目标位置', halfMethod(a,b,0,a.length,-1,-1));
console.timeEnd('halfMethod');

    
function commonFind(arr,aim){
    var left=-1,right=-1;
    for(var i=0;i<arr.length;i++){
        if(aim>arr[i])
            left=i;
        if(aim<arr[i])
            right=i;
        if(aim==arr[i])
            left=right=i;
        if(right>-1)
        	    return Math.round((left+right)/2);
    }
}

console.time('commonFind');
console.log('目标位置',commonFind(a,b));
console.timeEnd('commonFind');



function commonFindElement(arr,aim){
    var rtn=-1;
    for(var i=0;i<arr.length;i++)
        if(aim==arr[i])
            rtn=i;
    return rtn;
}



console.time('commonFindElement');
console.log('目标元素',commonFindElement(a,c));
console.timeEnd('commonFindElement');


function splitFind(arr,aim,start,end){
    if(start>end)
        return -1;
    var mid=Math.round((start+end)/2);
    if(arr[mid]==aim)
        return mid;
    else if(arr[mid]>aim)
        return splitFind(arr,aim,start,mid);
    else if(arr[mid]<aim)
        return splitFind(arr,aim,mid,end);
    else
        return -1;
}
console.time('splitFind');
console.log('目标元素',splitFind(a,c,0,a.length));
console.timeEnd('splitFind');
