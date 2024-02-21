import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  session: { id: number, name: string } | null = null;
  category:string='';
  formstatus:string='Add ';
  formcategory:string=' ';
  categories: { id: number, name: string }[] = [];
  isEditing: boolean = false;


  saveData(){

    const data = { id: this.categories.length + 1, name: this.category };
    this.categories.push(data);
    localStorage.setItem('categories', JSON.stringify(this.categories));
    this.category = '';

  }
 

  loaddata(){
    const data = localStorage.getItem('categories');
    if (data != null) {
      this.categories = JSON.parse(data);
    }
  }

  
  onEdit(name: string) {
    this.formcategory = name;
    this.formstatus = 'Edit';
    this.isEditing=true;
  }
  constructor(private cdr: ChangeDetectorRef) { }
  // onUpdate() {
  //   const index = this.categories.findIndex(category => category.name === this.formcategory);
  //   if (index !== -1) {
  //     this.categories[index].name = this.formcategory;
  //     this.formcategory = '';
  //     this.cdr.detectChanges(); 
  //   }
  // }
  onUpdate(name:string) {
    const index = this.categories.findIndex(category => category.name === this.formcategory);
    if (index !== -1) {
      // Assuming you have a new name in some variable, let's call it this.formcategory
      this.categories[index].name = this.category; // You can uncomment this line if you want to update the name
      this.formcategory = '';
      this.formstatus = 'Add '; // Reset form status to 'Add'
      this.isEditing = false;
      this.cdr.detectChanges();
    }
  }
  

  // onUpdate() {
  //   const index = this.categories.findIndex(category => category.name === this.formcategory);
    
  //   if (index !== -1) {
  //     // Assuming you have a new name in some variable, let's call it this.newCategoryName
  //     this.categories[index].name = this.formcategory;
      
  //     // Clear the formcategory and reset the formstatus
  //     this.formcategory = '';
  //     this.formstatus = '';
      
  //     // Optionally, you can reset other form-related variables or flags
  //     this.isEditing = false;
  
  //     // Trigger change detection manually
  //     this.cdr.detectChanges();
  //   }
  // }
  

  
onDelete(){
  const index = this.categories.findIndex(category => category.name === this.formcategory);

  if (index !== -1) {
    this.categories.splice(index, 1); 
    this.formcategory = '';
}
}

}
  
  

  

