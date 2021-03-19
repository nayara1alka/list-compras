import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaService } from 'src/app/services/lista.service';
import { Imagens } from '../imagens';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  images$?: Observable<Imagens[]>;

  constructor(private listaService: ListaService) { }

  ngOnInit(): void {

    this.images$ = this.listaService.images();

  }

}
