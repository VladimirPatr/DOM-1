'use strict';

const itemsWrapper = document.querySelector('.items'); //обертка всех карточек
const itemsList = document.querySelectorAll('.item'); //массив всех карточек 
const itemsListH2 = document.querySelectorAll('.item h2'); //массив всех h2
const propsItemWrapper = document.querySelectorAll('.props__list'); //обертка элементов списка ol

//массивы элементов списка в каждой карточке
const propsItemsOne = document.querySelectorAll('.item_one li');
const propsItemsTwo = document.querySelectorAll('.item_two li');
const propsItemsThree = document.querySelectorAll('.item_three li');
const propsItemsFour = document.querySelectorAll('.item_four li');
const propsItemsFive = document.querySelectorAll('.item_five li');
const propsItemsSix = document.querySelectorAll('.item_six li');


//удаление всех карточек
itemsList.forEach(element => {
    element.remove();
    }  
)
//функция добавления карточки в обертку
const addItems = (item)=>{
   return itemsWrapper.append(item);
}

//вставка карточек в правильном порядке
addItems(itemsList[1]);
addItems(itemsList[2]);
addItems(itemsList[3]);
addItems(itemsList[0]);
addItems(itemsList[4]);
addItems(itemsList[5]);

//удаление всех h2
itemsListH2.forEach(element => {
    element.remove();
    }  
);

//функция вставки заголовков h2
const pushH2 = (item1, item2)=>{
    return propsItemWrapper[item1].before(itemsListH2[item2]);
 };

 //вставка заголовкаов в правильном порядке
 pushH2(0,0);
 pushH2(1,1);
 pushH2(2,4);
 pushH2(3,3);
 pushH2(4,5);
 pushH2(5,2);

 //замена элементов списков

propsItemsFour[2].after(propsItemsTwo[3]);

propsItemsTwo[8].after(propsItemsSix[9]);
propsItemsTwo[8].after(propsItemsSix[8]);


itemsListH2[5].after(propsItemWrapper[3]);
itemsListH2[3].after(propsItemWrapper[4]);
