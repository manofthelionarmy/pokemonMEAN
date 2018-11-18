import { PokemonService } from './../../services/pokemon.service';
import { MatSnackBar } from '@angular/material';
import { Attacks } from './../../models/pokemon/attacks.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attack-create',
  templateUrl: './attack-create.component.html',
  styleUrls: ['./attack-create.component.css']
})
export class AttackCreateComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if ( form.invalid ) {
      return;
    }

    const attack: Attacks = {
      id: null,
      attackNumber: form.value.attackNumber,
      attackName: form.value.attackName,
      power: form.value.power,
      PP: form.value.powerpoints,
      accuracy: form.value.accuracy,
      type: form.value.type,
      category: form.value.category
    };

    this.pokemonService.addAttack(attack);

    form.resetForm();

    this.snackbar.open('Attack Added', 'Close', {
      duration: 3000
    });
  }

}
