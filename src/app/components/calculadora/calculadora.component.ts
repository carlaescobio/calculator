import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent {
  numero1: number = 0; 
  numero2: number = 0; 
  resultado: number = 0; 
  operacion: string = '+'; 
  display: string = "0"; 

  add(value: string) {
    if (this.display === "0") { // si el valor actual es 0, reemplazarlo por el valor a añadir
      this.display = value;
    } else {
      this.display += value; // si no, añadir el valor al final del valor actual
    }
  }

  realizarOperacion() {
    switch (this.operacion) { // según el tipo de operación, realizar el cálculo correspondiente
      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;
      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;
      case '*':
        this.resultado = this.numero1 * this.numero2;
        break;
        case '/':
      if (this.numero2 === 0) {
        alert('No es posible la división entre 0');
        return;
      }
      this.resultado = this.numero1 / this.numero2;
      break;
      default:
      alert('Operación inválida'); // si la operación no es reconocida, mostrar una alerta
    }
  }

  clear() {
    this.display = "0"; // reiniciar el valor que se muestra en la pantalla a 0
  }

  calculate() {
    // Usar regex para separar el valor de la pantalla en dos números y la operación
    const match = this.display.match(/^(\d+)(\D)(\d+)$/);
  
    if (match) {
      this.numero1 = parseFloat(match[1]);
      this.numero2 = parseFloat(match[3]);
      this.operacion = match[2];
  
      // Realizar la operación y actualizar el valor que se muestra en la pantalla y el resultado
      this.realizarOperacion();
      this.display = this.resultado.toString();
    } else {
      alert('Operación no válida'); // si la operación no es reconocida, mostrar una alerta
    }
  }
}
