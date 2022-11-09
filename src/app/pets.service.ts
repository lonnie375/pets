import { Injectable } from '@angular/core';
import { Pet } from './pet';

// "injectable" just means that we can share it
// with other components in our app. the 
// way we share it is nothing short of bizarre, 
// and we'll see it when we add it to the 
// PetListComponent class. 

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  // Copied this over so that we can se this as an example. 
  TheList: Pet  [] =[
    {name:'muffin', species:'cat', born:1979}, 
    {name: 'Donald Duck', species: 'bird', born: 2007}
  ];

  constructor() { }
}
