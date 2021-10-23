var app=new Vue({
    el: '#light1',
    data:{
        time:10,
        timeYellow:3,
        timeGreen:15,
        isRedActive:true,
        isYellowActive:false,
        isGreenActive:false,
        isBlinkRed:false,
        isBlinkYellow:false,
        isBlinkGreen:false
        // active:'red'
    // },methods:{
    //     yellowActive: function (){
    //         setInterval(function (){
    //             this.isRedActive=false
    //             this.isYellowActive=true
    //             this.timeYellow--
    //         },1000)
    //     }
    }
});

redActive()

function redActive(){
let redActive=
    setInterval(function (){
     app.isRedActive=true
     app.isYellowActive=false
        app.isBlinkYellow=false
        document.getElementById('r').style.opacity='1'
        document.getElementById('y').style.opacity='0.5'
        document.getElementById('y').style.backgroundColor='yellow'
        document.getElementById('g').style.opacity='0.5'
        document.getElementById('g').style.backgroundColor='green'

    app.time--;
        if (app.time<4){
            app.isBlinkRed=true
        }
    if (app.time<1){
        clearInterval(redActive)
        app.timeYellow=4
        YellowActive()
    }
},1000)}

function YellowActive (){
         let YellowActive=setInterval(function (){
             app.isRedActive=false
             app.isBlinkRed=false
             app.isYellowActive=true
             document.getElementById('y').style.opacity='1'
             document.getElementById('r').style.opacity='0.5'
             document.getElementById('r').style.backgroundColor='red'
             document.getElementById('g').style.opacity='0.5'
             document.getElementById('g').style.backgroundColor='green'
             // document.getElementById('time').innerHTML='${{timeYellow}}'
             app.timeYellow--
             if(app.time<4){
                 app.isBlinkYellow=true
             }
             if (app.timeYellow<1){
                 clearInterval(YellowActive)
                 app.time=10
                 GreenActive()
             }
        },1000)}

function GreenActive(){
    let GreenActive=setInterval(function (){
        document.getElementById('y').style.opacity='0.5'
        document.getElementById('g').style.opacity='1'
        app.isYellowActive=false
        app.isBlinkYellow=false
        app.isGreenActive=true
        app.timeGreen--
        if(app.timeGreen<4){
            app.isBlinkGreen=true
        }
        if (app.timeGreen<1){
            clearInterval(GreenActive)
            app.timeYellow=4
            yellowOne()
        }
    },1000)
}

function yellowOne(){
    let yellowOne=setInterval(function (){
        document.getElementById('y').style.opacity='1'
        document.getElementById('g').style.opacity='0.5'
        app.isYellowActive=true
        app.isBlinkGreen=false
        app.isGreenActive=false
        app.timeYellow--
        if(app.timeYellow<4){
            app.isBlinkYellow=true
        }
        if (app.timeYellow<1){
            clearInterval(yellowOne)
            app.timeGreen=15
            redActive()
        }
    },1000)
}


//     setInterval(function(){
//         if (app.time<1){
//             app.active=app.active=='red'?'green':'red';
//             app.time=10;
//         }
//         app.time--;
// },1000);



// setInterval(function (){
//     if (app.time<1){
//         if(app.active=='red'){
//             app.active='green'
//         }else {
//             app.active='red'
//         }app.time=10
//     }app.time--
// },1000)
