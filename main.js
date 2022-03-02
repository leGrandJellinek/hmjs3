var a = +prompt('Введите первое число')
var b = +prompt('Введите второе число')
var c = +prompt('Введите третье число')

if( a > b && a < c || a > c && a < b){
    alert('Ваше среднее число ' + a)
}else if( b > a && b < c || b < a && b > c){
    alert('Ваше среднее число ' + b)
}else if( c > a && c < b || c < a && c > b){
    alert('Ваше среднее число ' + c)
}else{
    alert('Значит этот случай я не рассмотрел)')
}