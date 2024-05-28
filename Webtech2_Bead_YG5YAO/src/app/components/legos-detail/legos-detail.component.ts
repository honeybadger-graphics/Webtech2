import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-legos-detail',
  templateUrl: './legos-detail.component.html',
  styleUrls: ['./legos-detail.component.css'],
})
export class LegosDetailComponent implements OnInit {
  getId: any;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {}

  legosForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.compose([Validators.required, Validators.min(500)])],
    description: ['', Validators.required],
    recomendedAge: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getLego(this.getId).subscribe((res) => {
      this.legosForm.setValue({
        name: res.data['name'],
        price: res.data['price'],
        description: res.data['description'],
        recomendedAge: res.data['recomendedAge'],
      });
    });
  }

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

  onUpdate(): any {
    this.crudService.updateLego(this.getId, this.legosForm.value).subscribe({
      next: () =>
        this.ngZone.run(() => this.router.navigateByUrl('/legos-list')),
      error: (err: any) => console.log(err),
      complete: () => console.log('Data updated successfully!'),
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
