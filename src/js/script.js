let addressMenu = document.querySelector('.address__menu');
let firstPanel = document.querySelector('.firstNavPanel__panel');
let firstPanelAlter = document.querySelector('.firstNavPanel__panelAlter');
let secondPanel = document.querySelector('.secondNavPanel__panel');
let secondPanelAlter = document.querySelector('.secondNavPanel__panelAlter');
let catalog = document.querySelector('.firstNavPanel__catalog');

addressMenu.onclick = function(){
    firstPanel.classList.toggle('firstNavPanel__panelAlter');
    secondPanel.classList.remove('secondNavPanel__panelAlter');
};
catalog.onclick = function(){
    secondPanel.classList.toggle('secondNavPanel__panelAlter');
};

