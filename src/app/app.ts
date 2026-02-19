import { Component, signal } from '@angular/core';
import { EditorFiltro } from './editor-filtro/editor-filtro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EditorFiltro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clase_2_multimedia');
}
