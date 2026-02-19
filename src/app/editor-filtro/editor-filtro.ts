import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.scss',
})
export class EditorFiltroComponent {
  brillo = signal(100);
  contraste = signal(100);
  blur = signal(0);
  // Nuevo signal para el estado Blanco y Negro
  esBlancoYNegro = signal(false);

 filtroScss = computed(() => {
  const bn = this.esBlancoYNegro() ? 'grayscale(100%) contrast(110%)' : 'grayscale(0%)';
  return `${bn} brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px)`;
});

  // Función para alternar el filtro
  toggleBlancoYNegro() {
    this.esBlancoYNegro.update(v => !v);
  }

  actualizar(prop: string, evento: Event) {
    const valor = (evento.target as HTMLInputElement).value;
    if (prop === 'brillo') this.brillo.set(+valor);
    if (prop === 'contraste') this.contraste.set(+valor);
    if (prop === 'blur') this.blur.set(+valor);
  }
}