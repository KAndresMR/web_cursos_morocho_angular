import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  // Esta función se activará cuando el usuario presione una tecla
  onKeyPress(event: Event) {
    const input = event.target as HTMLInputElement;
    
    // Añadir la clase 'shake' al input
    input.classList.add('shake');

    // Remover la clase 'shake' después de la animación (0.4s)
    setTimeout(() => {
      input.classList.remove('shake');
    }, 400);
  }

}
