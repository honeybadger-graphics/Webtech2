import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/service/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-legos-list',
  templateUrl: './legos-list.component.html',
  styleUrls: ['./legos-list.component.css'],
})
export class LegosListComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'price',
    'description',
    'recomendedAge',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private crudService: CrudService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllLegos();
  }

  openDialog(id: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllLegos();
    });
  }

  getAllLegos() {
    this.crudService.getLegos().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }
}
