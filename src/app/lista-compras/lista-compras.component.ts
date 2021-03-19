import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaService } from 'src/app/services/lista.service';
import { Lista } from '../lista';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent implements OnInit {

  lista: Lista[] = [];

  displayedColumns:any[] = ['quantidade', 'produto', 'marca'];
  dataSource = this.lista;

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {

    this.listaService.list().subscribe(dados => this.lista = dados);  
  }

  
}
