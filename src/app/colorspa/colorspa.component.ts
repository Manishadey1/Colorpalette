// import { Component, OnInit } from '@angular/core';
// import { ColorModel } from '../models/color-model';
// import { ColorService } from '../services/color.service';

// @Component({
//   selector: 'app-colorspa',
//   templateUrl: './colorspa.component.html',
//   styleUrls: ['./colorspa.component.scss']
// })
// export class ColorspaComponent implements OnInit {
//   color!:  ColorModel

//    constructor(private colorService: ColorService) { }

//   ngOnInit(): void {

//     this.fetchNewColor();
//   }

//   refresh(){
//     this.fetchNewColor();
//   }

//   fetchNewColor(){
//     this.colorService.getRandomColor().subscribe((data)=>{
//       if(data){
//         console.log(data);
//         this.color = new ColorModel(data.id, data.uid , data.hex_value , data.color_name)
//       }
//     })
//   }
// }

import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icolor } from '../interfaces/icolor';
import { ColorModel } from '../models/color-model';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-colorspa',
  templateUrl: './colorspa.component.html',
  styleUrls: ['./colorspa.component.scss']
})
export class ColorspaComponent implements OnInit {
  colorData: ColorModel[]
  logId = 0
  users : any
  time: any;
  execCommand: string | undefined;
  constructor(public colorService: ColorService,
   
    private aRoute: ActivatedRoute) {
    this.colorData = new Array<ColorModel>()
    this.aRoute.data.subscribe(data => {
      this.colorData = (data[0] as Icolor[]).map( cM => new ColorModel(cM.id, cM.uid, cM.hex_value, cM.color_name))
    })
    setInterval(() => {  
      this.todaysDate = new Date();  
    }, 1);  
  }
 
  ngOnInit(): void {
    this.fetchNewColor();
    this.copyCurrentTime(this.time);
  }
  
  fetchNewColor() {
    this.colorService.getRandomColor<Icolor[]>(5).subscribe(data => {
      if (data) {
        this.colorData = data.map( cM => new ColorModel(cM.id, cM.uid, cM.hex_value, cM.color_name))
          this.colorData = data;
        localStorage.setItem('data', JSON.stringify(this.colorData));
        JSON.parse(localStorage.getItem('data') || '[]');
console.log('data', data);
this.users =data
        // this.colorData = [...data ]
     } 
  // else {
  //       localStorage.setItem('user', null);
  //       // JSON.parse(localStorage.getItem('user'));
  //     }
  //     }
     })
   }

    refresh(){
    this.fetchNewColor();
console.log(this.todaysDate);  
  }

  onKeypress(event:any){
    console.log("event",event);
    if (event.key === 'Tab') {
      console.log("is clicked");
    }

    // if (event.key === 'c') {
    //   console.log("c is clicked");
    //   this.copyCurrentTime(this.time);
    // // this.fetchNewColor();

    // }

  }
  


  todaysDate: Date = new Date(); 
 textMessage:any; 
  msgHideAndShow:boolean=false; 
  display = false 
  
  textMessageFunc( msgText: any) {
    this.textMessage=msgText+" Copied to Clipboard";  
    this.msgHideAndShow=true;  
    setTimeout(() => {  
      this.textMessage="";  
      this.msgHideAndShow=false;  
    }, 1000);  
  }

  copyCurrentTime(time: { select: () => void; setSelectionRange: (arg0: number, arg1: number) => void; }) {  
   console.log("button is clicked", time );
    time.select();  
    console.log("time.select()",time.select());
    
    document.execCommand('copy'); 
    console.log("document.execCommand('copy')",document.execCommand('copy'));
     
    time.setSelectionRange(0, 0);  
    console.log(" time.setSelectionRange(0, 0)",  time.setSelectionRange(0, 0));
    
    // this.textMessageFunc('hex value');  
    this.display=true
    setTimeout(() => {  
      this.display=false
      // this.time.select.show(this.textMessageFunc())
      // alert( this.execCommand +"Copied to Clipboard")
      // console.log(this.users.hex_value);
      
    }, 1000);  
  }  

   
keydown(event: { stopImmediatePropagation: () => void; }) { 
  event.stopImmediatePropagation(); 
} 

}
