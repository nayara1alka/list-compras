import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaService } from 'src/app/services/lista.service';
import { ModalComponent } from '../shared/modal/modal.component'
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form?: FormGroup;

  constructor(private formBuilder: FormBuilder, private listaService: ListaService,
    public dialog: MatDialog ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      quantidade:[null,Validators.required],
      produto:[null,Validators.required],
      marca:[null,Validators.required] 
    })
  }

  onSubmit(){
    if(this.form?.valid){
      this.listaService.criar(this.form?.value).subscribe(
        sucess => {
        this.openDialog();
        this.resetar();
        },
        error => console.error('erro')
      )
    }
    }

    resetar(){
      this.form?.reset();
    }

    openDialog() {
      this.dialog.open(ModalComponent);
    }

}