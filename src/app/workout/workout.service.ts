import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IExercise from '../entities/Exercise';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) { }

  getExercises(): Observable<IExercise[]> {
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkozZmRIaC1qc05SWFppeWhTb1dDNSJ9.eyJpc3MiOiJodHRwczovL2Rldi0zMW5rcHRpbC51cy5hdXRoMC5jb20vIiwic3ViIjoiTUZ5OEYzTE5HOHlYN1A3OUZDbDNWMGV1T2lnVExJS2ZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LTMxbmtwdGlsLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjU3Mzc5NzUzLCJleHAiOjE2NTc0NjYxNTMsImF6cCI6Ik1GeThGM0xORzh5WDdQNzlGQ2wzVjBldU9pZ1RMSUtmIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyByZWFkOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHJlYWQ6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpsb2dzX3VzZXJzIHJlYWQ6c2hpZWxkcyByZWFkOmFub21hbHlfYmxvY2tzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgcmVhZDpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIHJlYWQ6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHJlYWQ6bG9nX3N0cmVhbXMgcmVhZDpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgcmVhZDpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSByZWFkOm9yZ2FuaXphdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgcmVhZDpvcmdhbml6YXRpb25faW52aXRhdGlvbnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.OEWkoEwfvucw7kYy6BLpyb_eMmlLNYOzBDcCSw9rGLBrEHskO2l_ikFMd1TtAKAWcXrJ8lwEyuXRDlJy6lSNhLDxMBnRbXsogXC-IdY5BOzKbndFNo-2QFquSxZ7Uzna1wssYTi08vUIvcYJGEqN3iUQ5ZzGORdbekkt_VH34frpLr8WxmBx4uys_pgQg8ItzKwqPKB6sm30XLHqk-dxmL8D87qRwnUfD8LPFgp37GURTrxlWQ8oNZby-SguzjnZdT1QI_KtSpA_dpQ11zVRL-RmnM4forr5DVIcjr1z8vZBwMRufmPmWjhFRfSh6PNXLCaCcycmjPmEfwLl6HBmuw');
    const request = this.http.get<IExercise[]>('http://localhost:8080/exercise', { headers: headers});

    return request;
  }

  createExercise(exercise: IExercise): Observable<IExercise> {
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkozZmRIaC1qc05SWFppeWhTb1dDNSJ9.eyJpc3MiOiJodHRwczovL2Rldi0zMW5rcHRpbC51cy5hdXRoMC5jb20vIiwic3ViIjoiTUZ5OEYzTE5HOHlYN1A3OUZDbDNWMGV1T2lnVExJS2ZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LTMxbmtwdGlsLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjU3Mzc5NzUzLCJleHAiOjE2NTc0NjYxNTMsImF6cCI6Ik1GeThGM0xORzh5WDdQNzlGQ2wzVjBldU9pZ1RMSUtmIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyByZWFkOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHJlYWQ6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpsb2dzX3VzZXJzIHJlYWQ6c2hpZWxkcyByZWFkOmFub21hbHlfYmxvY2tzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgcmVhZDpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIHJlYWQ6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHJlYWQ6bG9nX3N0cmVhbXMgcmVhZDpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgcmVhZDpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnNfc3VtbWFyeSByZWFkOm9yZ2FuaXphdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgcmVhZDpvcmdhbml6YXRpb25faW52aXRhdGlvbnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.OEWkoEwfvucw7kYy6BLpyb_eMmlLNYOzBDcCSw9rGLBrEHskO2l_ikFMd1TtAKAWcXrJ8lwEyuXRDlJy6lSNhLDxMBnRbXsogXC-IdY5BOzKbndFNo-2QFquSxZ7Uzna1wssYTi08vUIvcYJGEqN3iUQ5ZzGORdbekkt_VH34frpLr8WxmBx4uys_pgQg8ItzKwqPKB6sm30XLHqk-dxmL8D87qRwnUfD8LPFgp37GURTrxlWQ8oNZby-SguzjnZdT1QI_KtSpA_dpQ11zVRL-RmnM4forr5DVIcjr1z8vZBwMRufmPmWjhFRfSh6PNXLCaCcycmjPmEfwLl6HBmuw')
    .set('Content-Type', 'application/json');
    const request = this.http.post<IExercise>('http://localhost:8080/exercise', exercise, { headers: headers});

    return request;
  }
}