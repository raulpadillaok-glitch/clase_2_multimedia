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
  modoImagen = signal<'normal' | 'bn-artistico'>('normal');

  filtroScss = computed(() => {
    if (this.modoImagen() === 'bn-artistico') {
      return `saturate(0) contrast(150%) brightness(${this.brillo() - 10}%) blur(${this.blur()}px)`;
    }
     return `brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px)`;
  });

  toggleModo() {
    this.modoImagen.update(actual => actual === 'normal' ? 'bn-artistico' : 'normal');
  }

  actualizar(prop: string, evento: Event) {
    const valor = (evento.target as HTMLInputElement).value;
    if (prop === 'brillo') this.brillo.set(+valor);
    if (prop === 'contraste') this.contraste.set(+valor);
    if (prop === 'blur') this.blur.set(+valor);
  }
}