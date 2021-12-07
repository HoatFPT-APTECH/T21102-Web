alert("ban co 50k va co 5 luot quay");
function check(var arr[5][6],var i,var j){
    var flag=0;
    for( var j=1;j<=;j++){
        if(arr[i][j]<0&& arr[i][j]>45){
            flag=1;
        }
    }
    if (flag=1) return false;
    else return true;
}
function sort(var arr[][6],var i,var j){

    for(var m=1;m<6;m++){
        var n=m-1;
        var gtkt=arr[i][m];
        for(;n>=0&&gtkt<arr[i][n];n--){
            arr[i][n+1]=arr[i][n];
        }
        arr[i][n+1]=gtkt;
    }
}


