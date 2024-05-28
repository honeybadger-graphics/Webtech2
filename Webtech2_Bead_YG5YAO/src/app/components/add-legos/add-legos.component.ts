import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-legos',
  templateUrl: './add-legos.component.html',
  styleUrls: ['./add-legos.component.css'],
})
export class AddLegosComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private crudService: CrudService,
    private ngZone: NgZone
  ) {}

  legosForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.compose([Validators.required, Validators.min(500)])],
    description: ['', Validators.required],
    recomendedAge: ['', Validators.required],
  });

  get name() {
    return this.legosForm.get('name');
  }

  get price() {
    return this.legosForm.get('price');
  }

  get description() {
    return this.legosForm.get('description');
  }
  get recomendedAge() {
    return this.legosForm.get('recomendedAge');
  }

  ngOnInit(): void {}

  onSubmit(): any {
    this.crudService.addLegos(this.legosForm.value).subscribe({
      next: () =>
        this.ngZone.run(() => this.router.navigateByUrl('/legos-list')),
      error: (err: any) => console.log(err),
      complete: () => console.info('Data added successfully!'),
    });
  }

  getErrorMessage(err: any) {
    if (err.hasError('required')) {
      return 'Kötelezően kitöltendő mező!';
    }
    return '';
  }

  getErrorMessagePrice(err: any) {
    if (err.hasError('required')) {
      return 'Kötelezően kitöltendő mező!';
    }
    if (err.hasError('min')) {
      return 'Minimum ár 500 Ft';
    }
    return '';
  }
}
