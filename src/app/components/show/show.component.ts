import { Component, OnInit } from '@angular/core';

//importar el modelo
import { Crud } from 'src/app/crud.model';
//importamos el servicio
import { CrudService } from 'src/app/crud.service';



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  Cruds: Crud[]

  constructor(private crudService: CrudService){}

  ngOnInit(): void {
    //console.log('hola');
    this.crudService.getCruds().subscribe((res) => {
      this.Cruds = res.map( (e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Crud)
        }
      });
    });
  }

  deleteRow = (crud) => this.crudService.deleteCrud(crud);
}
