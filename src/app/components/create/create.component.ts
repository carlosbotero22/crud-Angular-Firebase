import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
//importamos los modulos
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  public crudForm:FormGroup

  constructor(
    public crudService: CrudService,
    public formBuilder: FormBuilder,
    public router: Router
  ){
    this.crudForm = this.formBuilder.group({
      title : [''],
      content : [''],
      author : [''],
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.crudService.createCrud(this.crudForm.value)
    this.router.navigate( [''])
  }

}
