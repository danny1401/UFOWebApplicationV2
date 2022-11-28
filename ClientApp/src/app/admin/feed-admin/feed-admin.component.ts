import { Component, OnInit } from '@angular/core';
import { Sighting } from '../../sighting';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-feed-admin',
  templateUrl: './feed-admin.component.html',
  styleUrls: ['./feed-admin.component.css']
})
export class FeedAdminComponent {
  public everySightings: Array<Sighting>;
  public loading: boolean;
  public deleteInformation: string;
  public slettingOK: boolean;

  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal) { }

  // ReadAll()
  readAllUsers() {
    this.http.get<Sighting[]>("api/sighting/")
      .subscribe(data => {
        this.everySightings = data;
        this.loading = false;
      },
        error => console.log(error)
      )
  }

  // Delete()
  deleteSighting(id: number) {
    this.http.get<Sighting>("api/sighting/" + id)
      .subscribe(data => {
        this.deleteInformation = data.city + " " + data.country;

        this.showDeleteModal(id);
      },
        error => console.log(error)
      );
  }
  
  showDeleteModal(id: number) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.post = this.deleteInformation;

    modalRef.result.then(retur => {
      if (retur == "Delete") {

        this.http.delete("api/sighting/" + id)
          .subscribe(retur => {
            this.readAllUsers();
          },
            error => console.log(error)
          );
      }
      this.router.navigate(['/feed']);
    });
  }

  ngOnInit(): void {
    this.readAllUsers();
  }
}
