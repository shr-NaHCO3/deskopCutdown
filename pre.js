
let ipcr = require('electron').ipcRenderer;

window.addEventListener('DOMContentLoaded', function(){
    let dowm = document.querySelector('#down')
    if(down){
        down.addEventListener('click', ()=>{
            ipcr.send('down')
        })
    }   

    // let up = document.querySelector('#up')
    // if(up){
    //     up.addEventListener('click', ()=>{
    //         ipcr.send('up')
    //     })
    // } 

    let close = document.querySelector('#close')
    if(close){
        close.addEventListener('click', ()=>{
            ipcr.send('close')
        })
    } 

    // this.setInterval(()=>{
    //     let dw = new Date().getHours();
    //     if(dw >= 6){
    //         ipcr.send('up');
    //     }
    // }, 1200*1000)

    let gw = this.document.querySelector('#githubW')
    if(gw){
        gw.addEventListener('click', ()=>{
            this.window.open('https://github.com/shr-NaHCO3/deskopCutdown')
        })
    }

    let ew = this.document.querySelector('#electronW')
    if(ew){
        ew.addEventListener('click', ()=>{
            this.window.open('https://electronjs.org')
        })
    }

    

})
