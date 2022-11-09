import { Injectable } from '@angular/core';
import { Pet } from './pet';

// "injectable" just means that we can share it
// with other components in our app. the 
// way we share it is nothing short of bizarre, 
// and we'll see it when we add it to the 
// PetListComponent class. 
//Don't read more into it! it's just a class
// that contains a list, and a get function
// that returns the list. THAT'S it. 
// ....almost
// One caveat: Angular makes the one instance for us. 
// We don't have to make an instance. Angular makes
// one instance and only one, and will han d that
// instance over to any component that needs it. 
// In other words: we don't need to make an instance of it. 
// Angular will. 

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

  // Let's add a "getter" so anyone who has access
  // to an instance of this class can easily get
  // the list from it. 
  
  get(): Pet[]{
    return this.TheList; 
  }
}
