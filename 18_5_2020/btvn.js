var trending = new Array();
var oj1 = new Object();

div = document.querySelector('.listing-layout')

//phần tử thứ nhất
item1 = div.getElementsByTagName('article')[0]
//text
text = item1.innerText 
oj1.text= text 
//img 
oj1img = new Object() ;
src1 = item1.getElementsByTagName('img')[0]
src2 = item1.getElementsByTagName('img')[1]
oj1img.img1 = src1.src 
oj1img.img2 = src2.src
oj1.src = oj1img
//the a 
oj1a = new Object();
a1 = item1.getElementsByTagName('a')[0]
a2 = item1.getElementsByTagName('a')[1]
oj1a.link1= a1.href
oj1a.link2= a2.href
oj1.link=oj1a
// add object 1 vao array trending
trending[0]= oj1
// phan tu thu 2 
oj2 = new Object();
item2 = div.getElementsByTagName('article')[1]
text = item2.innerText 
oj2.text= text 
oj2img = new Object() ;
src1 = item2.getElementsByTagName('img')[0]
src2 = item2.getElementsByTagName('img')[1]
oj2img.img1 = src1.src 
oj2img.img2 = src2.src 
oj2.src = oj2img
oj2a = new Object();
a1 = item2.getElementsByTagName('a')[0]
a2 = item2.getElementsByTagName('a')[1]
oj2a.link1= a1.href
oj2a.link2= a2.href
oj2.link=oj2a
trendin[1]= oj2
//phần tử thứ 3
oj3 = new Object();
item3 = div.getElementsByTagName('article')[2]
text = item3.innerText 
oj3.text= text 
oj3img = new Object() ;
src1 = item3.getElementsByTagName('img')[0]
src2 = item3.getElementsByTagName('img')[1]
oj3img.img1 = src1.src
oj3img.img2 = src2.src
oj3.src = oj2img
oj3a = new Object();
a1 = item3.getElementsByTagName('a')[0]
a2 = item3.getElementsByTagName('a')[1]
oj3a.link1= a1.href
oj3a.link2= a2.href
oj3.link=oj3a
trending[2]= oj3
//phần tử thứ 4
oj4 = new Object();
item4 = div.getElementsByTagName('article')[3]
text = item4.innerText 
oj4.text= text 
oj4img = new Object() ;
src1 = item4.getElementsByTagName('img')[0]
src2 = item4.getElementsByTagName('img')[1]
oj4img.img1 = src1.src
oj4img.img2 = src2.src
oj4.src = oj4img
oj4a = new Object();
a1 = item4.getElementsByTagName('a')[0]
a2 = item4.getElementsByTagName('a')[1]
oj4a.link1= a1.href
oj4a.link2= a2.href
oj4.link=oj2a
trending[3]= oj4
//phần tử thứ 5
oj5 = new Object();
item5 = div.getElementsByTagName('article')[4]
text = item5.innerText 
oj5.text= text 
oj5img = new Object() ;
src1 = item5.getElementsByTagName('img')[0]
src2 = item5.getElementsByTagName('img')[1]
oj5img.img1 = src1.src
oj5img.img2 = src2.src
oj5.src = oj5img
oj5a = new Object();
a1 = item5.getElementsByTagName('a')[0]
a2 = item5.getElementsByTagName('a')[1]
oj5a.link1= a1.href
oj5a.link2= a2.href
oj5.link=oj5a
trending[4]= oj5

// wapper
var wapper = new Array();
var giaoduc= new Object();
item1 = document.getElementById('giao-duc')
text = item1.innerText
giaoduc.text= text
link = item1.getElementsByTagName('img')








const trending = document.querySelector('[data-content="newstrending"]')
const articles = trending.getElementsByTagName('article')

const trendingData = [];

for(let i = 0; i < articles.length; i++) {
  const article = articles[i]
  const img = article.querySelector('img')
  const src = img.getAttribute('src')
  const title = article.innerHTML
  const tagA = article.querySelector('a')
  const href = tagA.getAttribute('href')

  const articleObj ={
    src: src,
    title: title,
    href: href,
  }
  trendingData.push(articleObj);
}
console.log(trendingData);

let  i= 1 
const myLoop = setInterval(function(){
    console.log(i)
    i++   
},20)
setTimeout(function(){
        clearInterval(myLoop)
},2000)

function sumArrow (a,b){
    return a + b ; 
}
const sumArrow = (a,b) => a+b 
const sumArrow = mess => console.log(mess)



function hello() {
    let name = 'nam' 
    if(true) {
        console.log('hello'+name)
    }
}

function hello() {
    if(true) {
        var name = 'nam' 
    }
    console.log('hello'+name)
}

const person = {name : 'nam'}
person.name = 'hoa'