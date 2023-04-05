import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.scss']
})
export class MainGameComponent implements OnInit {
  errMsg: boolean = false;
  firstUser: any = {
    name: '',
    value: 0,
    valueToMagic: 0,
  };

  secondUser: any = {
    name: '',
    value: 0,
    valueToMagic: 0,
  };
  charsValues: any = [
    { char: 'ا', value: 1 },
    { char: 'أ', value: 1 },
    { char: 'إ', value: 1 },
    { char: 'آ', value: 1 },
    { char: 'ء', value: 1 },
    { char: 'ؤ', value: 1 },
    { char: 'ئ', value: 1 },
    { char: 'ى', value: 1 },
    { char: 'ب', value: 2 },
    { char: 'ج', value: 3 },
    { char: 'د', value: 4 },
    { char: 'ه', value: 5 },
    { char: 'ة', value: 5 },
    { char: 'و', value: 6 },
    { char: 'ز', value: 7 },
    { char: 'ح', value: 8 },
    { char: 'ط', value: 9 },
    { char: 'ي', value: 10 },
    { char: 'ك', value: 20 },
    { char: 'ل', value: 30 },
    { char: 'م', value: 40 },
    { char: 'ن', value: 50 },
    { char: 'س', value: 60 },
    { char: 'ع', value: 70 },
    { char: 'ف', value: 80 },
    { char: 'ص', value: 90 },
    { char: 'ق', value: 100 },
    { char: 'ر', value: 200 },
    { char: 'ش', value: 300 },
    { char: 'ت', value: 400 },
    { char: 'ث', value: 500 },
    { char: 'خ', value: 600 },
    { char: 'ذ', value: 700 },
    { char: 'ض', value: 800 },
    { char: 'ظ', value: 900 },
    { char: 'غ', value: 1000 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  calcNameValue(user: number) {
    if(user === 1) {
    
    this.firstUser.value = 0;
    for(let i=0;i<this.firstUser.name.length;i++) {
      if(!this.charsValues.find(( char:any )=> char.char === this.firstUser.name[i])) {
        this.errMsg = true;
        setTimeout(() => {
          this.errMsg = false;
        }, 3000);
        return;
      }
      this.firstUser.value += this.charsValues.find(( char:any )=> char.char === this.firstUser.name[i]).value;
    }
  } else {
    this.secondUser.value = 0;
    for(let i=0;i<this.secondUser.name.length;i++) {
      if(!this.charsValues.find(( char:any )=> char.char === this.secondUser.name[i])) {
        this.errMsg = true;
        setTimeout(() => {
          this.errMsg = false;
        }, 3000);
        return;
      }
      this.secondUser.value += this.charsValues.find(( char:any )=> char.char === this.secondUser.name[i]).value;
    }
  }
  this.culcToMagic(user);
}

culcToMagic(user: number) {
  if(user === 1) {
    this.firstUser.valueToMagic = 0;
    this.firstUser.valueToMagic = this.firstUser.value % 9;
    if(this.firstUser.valueToMagic === 0) {
      this.firstUser.valueToMagic = 9;
    }
  } else {
    this.secondUser.valueToMagic = 0;
    this.secondUser.valueToMagic = this.secondUser.value % 9;
    if(this.secondUser.valueToMagic === 0) {
      this.secondUser.valueToMagic = 9;
    }
  }
}

}
