import { Injectable } from '@angular/core';

//importamos los modulos para la DB con firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//importamos el modelo
import { Crud } from './crud.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private angularFirestore: AngularFirestore) { }

  //creamos los metodos para el CRUD
  getCruds(){//para ver todos los documentos
     return this.angularFirestore
           .collection("crud")
           .snapshotChanges()
  }

  getCrudById(id){//ver 1 solo documento
    return this.angularFirestore
       .collection("crud")
       .doc(id)
       .valueChanges()
  }

  createCrud(crud: Crud){//para crear
    return new Promise<any> ((resolve, reject ) => {
      this.angularFirestore
      .collection("crud")
      .add(crud)
      .then( (Response) => {
        console.log(Response)
      },
      (error) => {
        reject(error)
      })
    })
  }

  updateCrud(crud: Crud, id){//para actualizar
    return this.angularFirestore
      .collection("crud")
      .doc(id)
      .update({
        title: crud.title,
        content: crud.content,
        author: crud.author
      });
  }

  deleteCrud(Crud){//para eliminar
    return this.angularFirestore
      .collection("crud")
      .doc(Crud.id)
      .delete();
  }
}
