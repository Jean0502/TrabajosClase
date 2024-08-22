import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Presentacion';
  Precentacion ="Hola a todos, bienvenidos a mi pagina web";
  nombre = "Jean Carlos Cardenas Estor";
  comida = "Pizza";
  heroe = "iron man";
  
}
