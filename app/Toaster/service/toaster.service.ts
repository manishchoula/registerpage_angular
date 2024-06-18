import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr:ToastrService) { }
  public showSuccess(message:string): void {
    this.toastr.success(message, 'Title Success!');
  }

  public showInfo(): void {
    this.toastr.info('Message Info!', 'Title Info!');
  }

  public showWarning(): void {
    this.toastr.warning('Message Warning!', 'Title Warning!');
  }

  public showError(message:string): void {
    this.toastr.error(message, 'Title Error!');
  }
}
