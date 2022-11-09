import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {

  // We built pet-detail first. Now lets build 
  // pet-list. 

  // we will have a list of pets. 
  // this component will display the list, 
  // with each pet using the pet-detail component. 
  // we will have a form for adding a pet
  // we will handle the delete event that comes 
  // from the pet-detail component 

  // we'll create a list and temporarily put 
  // test data in it. 
  // working for displaying it, we will remove 
  // the test data. 

  // Then we'll add the view for displaying them. 
  // The view will be a for loop that goes through 
  // the list and sends each individual one into 
  // a pet-detail component. (that's why the pet-detail
  // component needed @Input.)
  // FOr the list, i recommend ng-container


  //The list is now stored as a service in the service file
  // TheList: Pet []= [

  //   // // After testing, lets remove the test data. 
  //   // {name:'muffin', species:'cat', born:1979}, 
  //   // {name: 'Donald Duck', species: 'bird', born: 2007}
  // ]

  // For the add: 
  //    We create the form 
  //    We make variables for each input box and bind them 
  //    We include an "add" button whose event handler
  //    creates a new Pet and adds it to the list. 

  newName: string = '';
  newSpecies: string = '';
  newBorn: number = 0; 

// Lets have Angular give us the one instance
// Of the pet list from the Pets Service
// We are injecting this from our PetsService. 
// So we now have an instance of PetsService stored
// in a public member variable called "PetSrv"
// We can access it using this.PetSrv
  constructor(public PetSrv: PetsService ) { }

  ngOnInit(): void {
  }

  // add(){
  //     // Create a new Pet object and add it to the list
  //     // Then clear out the input boxes
  //     this.TheList.push({
  //       name: this.newName, 
  //       species: this.newSpecies, 
  //       born: this.newBorn
  //     }); 
  //     this.newName = ''; 
  //     this.newSpecies = '';
  //     this.newBorn = 0;

  // }

  add(){
    // We have to use the get method to get the information from PetSrv
    this.PetSrv.get().push({
      name: this.newName, 
      species: this.newSpecies, 
      born: this.newBorn
    }); 
    this.newName = ''; 
    this.newSpecies = '';
    this.newBorn = 0;

}

  // deletePet(whichPet: Pet){
  //   for (let i = 0; i < this.TheList.length; i++){
  //     if (this.TheList[i] == whichPet){
  //       // remove from the list 
  //       this.TheList.splice(i, 1); 
  //       return;
  //     }
  //   }
  // }

  deletePet(whichPet: Pet){
    for (let i = 0; i < this.PetSrv.get().length; i++){
      if (this.PetSrv.get()[i] == whichPet){
        // remove from the list 
        this.PetSrv.get().splice(i, 1); 
        return;
      }
    }
  }

}
