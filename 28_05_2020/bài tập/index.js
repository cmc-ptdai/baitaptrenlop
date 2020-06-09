
var giohang = [] ;
function add(isAdd) {
    const a= window.document.getElementById(isAdd).children;
    const ten = a.querySelector('.card-title').innerText;
    const gia = a.querySelector('.card-text').innerText;
    const producOj = {
        name : ten ,
        gia : gia ,
        soluong : 1 
    }     
    if (giohang.length == 0) {
        giohang.push = producOj 
    }
    else {
        for (let i= 0 ; i < giohang.length ; i ++) {
            if(giohang[i].name == producOj.name) {
                producOj.soluong = producOj.soluong +1 ;
            }
            else {
            isAdd.gia = text ;
            isAdd.tensp = text2 ;
            isAdd.soluong = 1 ;
            }
        }
        giohang.push = isAdd ;
    }
}