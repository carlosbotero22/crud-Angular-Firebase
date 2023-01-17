import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  public editForm: FormGroup
  crudRef:any
  constructor(
    public crudService: CrudService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
    
  ){
    this.editForm= this.formBuilder.group({
      title: [''],
      content: [''],
      author: ['']
    })
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.crudService.getCrudById(id).subscribe(res => {
      this.crudRef = res
      this.editForm = this.formBuilder.group({
        title: [this.crudRef.title],
        content: [this.crudRef.content],
        author: [this.crudRef.author],
      })
    })
  }

  onSubmit(){
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.crudService.updateCrud(this.editForm.value, id)
    this.router.navigate([''])
  }

}
