import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
    // Manually add input, output, and eventemitter to 
    //      the first import statement
    // This component will manage a single instance of Pet
    // So we need an instance of pet
    //      For initial testing, we might want to fill 
    //      ThePet with some actual temporary data 
    // THree operations: 
    // View the pet "R" 
    //      Also include a button to switch to edit mode
    //      and a button to delete (but don't code them yet.)
    // Edit the pet 
    //      To make it editable, add a bool for editMode 
    //      Make two sets of controls, one for view mode 
    //      and one for edit mode, and make them toggle-able
    //      Get the edit button working to switch to edit mode 
    //      Also need variables to bind the edit boxes to. 
    //      Bind these variables to the controls. 
    //      Remember you two sets of brackets, square and round. 
    // 
    // delete the pet 
    //      Create an event emitter
    //      when the delete button is clicked
    // there won't be a "Create" part of CRUD

// This is created just to make the compiler happy. 
// This is going to get replaced by the instance that we created. 
    @Input()  ThePet: Pet = {
        name: 'Mitten', 
        species: 'Cat', 
        born: 1980
    }

  // editMode is used to control when parts of the UI
  // Are showing or are hidden. Variables like this 
  // are called part of the "ViewModel". This is a model 
  // or data for manipulating the "view". This data
  // does not get stored in the database 

   


    editMode: boolean = false; 
    editName: string = ''; 
    editSpecies: string = ''; 
    editBorn: number = 0; 

// Here's the event emitter. The event will be 
// called 'delete' because that makes some sense. 


    @Output() delete: EventEmitter<Pet> = new EventEmitter<Pet>();


  constructor() { }

  ngOnInit(): void {
  }


  goToEditMode(){
    this.editMode = true; 
    this.editName = this.ThePet.name; 
    this.editSpecies = this.ThePet.species; 
    this.editBorn = this.ThePet.born; 
  }

  cancel(){
    // Cancel is easy. Just go back to non-edit mode 
    this.editMode = false; 
  }

  save() {
    // Two things: Save the edit boxes into the object
    // Go back to non-edit mode
    this.ThePet.name = this.editName; 
    this.ThePet.species = this.editSpecies; 
    this.ThePet.born = this.editBorn; 
    this.editMode = false; 
  }

  deleteName(){
    // Send the message! Send out the object with it. 
    this.delete.emit(this.ThePet); 
  }


}
