import { Component } from '@angular/core';
import { Donuts, Result } from '../donuts';
import { DonutsService } from '../donuts.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {

  donuts:Donuts = {} as Donuts;
  allDonuts:Result[]= 
    this.getResults()
  ;
  
  constructor(private donutsList:DonutsService){
  }
  
  getDonuts():void{
    this.donutsList.getAllDonuts().subscribe(
      (result) => {

        this.donuts = result;
        this.allDonuts = result.results;
        // result.results.forEach(element => {
        //   this.allDonuts.push(element)
        // });



        // this.allDonuts.push(result.results);
        // this.donuts.results.forEach((element: Result) => {
        //   this.allDonuts.push(element)
        // });
      }
    )
  };

  getResults():Result[]{
    return this.allDonuts = this.donuts.results;
  }

}
