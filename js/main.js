const leftbutton=document.querySelectorAll('.left  li');
const rightbutton=document.querySelectorAll('.right  li');
leftbutton.forEach(item=>console.log(item.textContent));
fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB').then(r=>r.json()).then(data=>{
    console.log(data);
}
)