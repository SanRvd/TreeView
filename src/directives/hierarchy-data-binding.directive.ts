import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'HierarchyDataBinding',
  inputs:['data','filter']
})
export class HierarchyDataBindingDirective {

  private data:any[]=[]; 
  private filter:string=""; 

  constructor() { 
    
  }

}
