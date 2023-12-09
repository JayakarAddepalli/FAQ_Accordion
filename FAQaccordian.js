if(window.screen.availWidth >768){
    let button1 = document.getElementById('button1');
    let cb1 = 0;

    let contentacc1 = document.getElementById('par1');
    // console.log(contentacc1.textContent);

    // console.log(button1.setAttribute('src','./assets/images/icon-minus.svg'));


    let button2 = document.getElementById('button2');
    let cb2 = 0;

    let contentacc2 = document.getElementById('par2');


    let button3 = document.getElementById('button3');
    let cb3 = 0;

    let contentacc3 = document.getElementById('par3');



    let button4 = document.getElementById('button4');
    let cb4 = 0;

    let contentacc4 = document.getElementById('par4');



    button1.addEventListener('click',()=>{
        cb2 = 0
        cb3 = 0
        cb4 = 0

        cb1 += 1;
        // console.log(cb1);

        if(cb1%2!=0){
            button1.setAttribute('src','./assets/images/icon-minus.svg')
            contentacc1.style.display = 'block'
        }
        else{
            button1.setAttribute('src','./assets/images/icon-plus.svg')
            contentacc1.style.display = 'none'

        }
        button2.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc2.style.display ='none';

        button3.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc3.style.display = 'none';

        button4.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc4.style.display = 'none';

    })



    button2.addEventListener('click',()=>{
        cb1 = 0
        cb3 = 0
        cb4 = 0


        cb2 += 1;
        if(cb2%2!=0){
            button2.setAttribute('src','./assets/images/icon-minus.svg')
            contentacc2.style.display = 'block'
        }
        else{
            button2.setAttribute('src','./assets/images/icon-plus.svg')
            contentacc2.style.display = 'none'

        }

        button1.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc1.style.display ='none';

        button3.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc3.style.display = 'none';

        button4.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc4.style.display = 'none';
    })



    button3.addEventListener('click',()=>{
        cb1 = 0
        cb2 = 0
        cb4 = 0


        cb3 += 1;
        if(cb3%2!=0){
            button3.setAttribute('src','./assets/images/icon-minus.svg')
            contentacc3.style.display = 'block'
        }
        else{
            button3.setAttribute('src','./assets/images/icon-plus.svg')
            contentacc3.style.display = 'none'

        }

        button2.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc2.style.display ='none';

        button1.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc1.style.display = 'none';

        button4.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc4.style.display = 'none';
    })



    button4.addEventListener('click',()=>{
        cb1 = 0
        cb2 = 0
        cb3 = 0

        cb4 += 1;
        if(cb4%2!=0){
            button4.setAttribute('src','./assets/images/icon-minus.svg')
            contentacc4.style.display = 'block'
        }
        else{
            button4.setAttribute('src','./assets/images/icon-plus.svg')
            contentacc4.style.display = 'none'

        }

        button2.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc2.style.display ='none';

        button3.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc3.style.display = 'none';

        button1.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc1.style.display = 'none';
    })


}


else if(window.screen.availWidth <= 768){
    // console.log('object');
    let button1 = document.getElementById('butn1');
    let cb1 = 0;
    console.log(button1);

    let contentacc1 = document.getElementById('para1');
    // console.log(contentacc1.textContent);

    // console.log(button1.setAttribute('src','./assets/images/icon-minus.svg'));


    let button2 = document.getElementById('butn2');
    let cb2 = 0;

    let contentacc2 = document.getElementById('para2');


    let button3 = document.getElementById('butn3');
    let cb3 = 0;

    let contentacc3 = document.getElementById('para3');



    let button4 = document.getElementById('butn4');
    let cb4 = 0;

    let contentacc4 = document.getElementById('para4');



    button1.addEventListener('click',()=>{
        console.log('work');

        cb2 = 0
        cb3 = 0
        cb4 = 0

        cb1 += 1;
        if(cb1%2!=0){
            button1.setAttribute('src','./assets/images/icon-minus.svg')
            contentacc1.style.display = 'block'
            
        }
        else{
            button1.setAttribute('src','./assets/images/icon-plus.svg')
            contentacc1.style.display = 'none'

        }
        button2.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc2.style.display ='none';

        button3.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc3.style.display = 'none';

        button4.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc4.style.display = 'none';

    })



    button2.addEventListener('click',()=>{

        cb1 = 0
        cb3 = 0
        cb4 = 0

        cb2 += 1;
        if(cb2%2!=0){
            button2.setAttribute('src','./assets/images/icon-minus.svg')
            contentacc2.style.display = 'block'
        }
        else{
            button2.setAttribute('src','./assets/images/icon-plus.svg')
            contentacc2.style.display = 'none'

        }

        button1.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc1.style.display ='none';

        button3.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc3.style.display = 'none';

        button4.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc4.style.display = 'none';
    })



    button3.addEventListener('click',()=>{


        cb2 = 0
        cb1 = 0
        cb4 = 0

        cb3 += 1;
        if(cb3%2!=0){
            button3.setAttribute('src','./assets/images/icon-minus.svg')
            contentacc3.style.display = 'block'
        }
        else{
            button3.setAttribute('src','./assets/images/icon-plus.svg')
            contentacc3.style.display = 'none'

        }

        button2.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc2.style.display ='none';

        button1.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc1.style.display = 'none';

        button4.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc4.style.display = 'none';
    })



    button4.addEventListener('click',()=>{
        cb1 = 0
        cb2 = 0
        cb3 = 0

        cb4 += 1;
        if(cb4%2!=0){
            button4.setAttribute('src','./assets/images/icon-minus.svg')
            contentacc4.style.display = 'block'
        }
        else{
            button4.setAttribute('src','./assets/images/icon-plus.svg')
            contentacc4.style.display = 'none'

        }

        button2.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc2.style.display ='none';

        button3.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc3.style.display = 'none';

        button1.setAttribute('src','./assets/images/icon-plus.svg');
        contentacc1.style.display = 'none';
    })


}