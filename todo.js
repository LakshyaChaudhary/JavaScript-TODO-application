
var addButton = document.getElementById('add')

addButton.addEventListener('click', () => {

    var ul = document.getElementById('list');

    var input = document.getElementById('input')
    var textval = input.value;
    // console.log(textval);

    if (textval == '') {
        return false;
    }
    

    var mylabel = document.createElement('label');
    mylabel.innerHTML = textval;
    // console.log(mylabel);
    

    var myinput = document.createElement('input');
    myinput.setAttribute('type','checkbox')
    myinput.setAttribute('id','check')
    // console.log(myinput);

    var mylist = document.createElement('li')
    mylist.setAttribute('class','mycheck')
    mylist.appendChild(myinput);
    mylist.appendChild(mylabel);

    // console.log(mylist);

    ul.insertBefore(mylist, ul.childNodes[0]);

    setTimeout(() => {
        mylist.className = 'visual'
    }, 2);
    
    input.value = '';

})





var removeButton = document.getElementById('remove');

removeButton.addEventListener('click', () => {

    var ul = document.getElementById('list');

    var l = ul.children;

    for (let index = 0; index < l.length; index++) {

        while( l[index] && l[index].children[0].checked){

            ul.removeChild(l[index])

        }
        
    }

})