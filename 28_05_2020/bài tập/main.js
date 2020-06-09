const card = {} ;
function add(event) {
    console.log(event)
    const btn = event.target ;
    const cardBody = btn.parentNode;
    const name = cardBody.querySelector('h5').innerHTML ;
    let price = cardBody.querySelector('p').innerHTML ;
    price = price.replace(/,/g,'')
    price = price.replace(' vnd','')
    price = Number(price) 
    const id = btn.getAttribute('data-id')
    let product = {
        id : id,
        name : name,
        price : price ,
        total : 1
    }
    if(card[id]){
        const curentPoductIncart = card[id]
        curentPoductIncart.total ++ 
    }
    else {
        card[id]=product;
    }




    //hiển thị vàok ol
    render()
    console.log(card);
}
function render() {
    const ol = document.getElementById('card-list')
    let html = ''
    let totalprice = 0
    for (let key in card) {
        if(card.hasOwnProperty(key)){
            const curentPoductIncart = card[key]
            const total =curentPoductIncart.total * curentPoductIncart.price
            totalprice += total
            // html += '<li>' + curentPoductIncart.name + ' so luong :' +  soluong + '</li>'
            html += `
                <li>
                <p>Id : ${curentPoductIncart.id}</p>
                <p>Tên sản  : ${curentPoductIncart.name}</p>
                <p>Tên Giá : ${curentPoductIncart.price}</p>
                <p>Tên Số lượng : ${curentPoductIncart.total}</p>
                <input onchange="updateTotal(event,'${curentPoductIncart.id})'" value = "${curentPoductIncart.total}">
                <button onclick="tang('${curentPoductIncart.id}')">Tăng</button>
                <button onclick="giam('${curentPoductIncart.id}')">Giảm</button>
                <button onclick="deleteProduct('${curentPoductIncart.id}')">Xóa</button>
                <p>Tổng tiền :${total} </p>
                <hr>
                </li> 
            `
        }
    }
    html += `
    <hr>
    <strong>
    <p>tông tiền là : ${totalprice}</p>
    </strong>
    `
    ol.innerHTML = html ;
}
function deleteProduct(id) {
    if(card[id]){
        const resut = confirm('bạn có muốn xóa nó không')
        if(resut){
            delete card[id]
        }
    }
    render()
}
function tang(id){
    const product = card[id] ;
    product.total ++ 
    render()
}
function giam(id) {
    const product = card[id]
    product.total --
    if (product.total <0) {
        deleteProduct(id)
    }else{
        render()
    }
}
function updateTotal(event , id) {
    const value = event.target.value
    card[id].total = value
    render()
}