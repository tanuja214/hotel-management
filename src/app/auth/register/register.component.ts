import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  // USER REGISTRATION DATA (UI)
  registrationDetails = {
    fullName: '',
    email: '',
    password: ''
  };

  // RANDOM NUMBER
  randomNumber: number = 0;

  generateRandom() {
    this.randomNumber = Math.floor(Math.random() * 100000);
  }

  // BRANCH DATA
  branchDetails = {
    branchName: '',
    address: '',
    rating: ''
  };

  branchList: any[] = [];

  ngOnInit(): void {
    this.loadBranches();
  }

  // Common HTTPS header for ngrok
  private headers(): HttpHeaders {
    return new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });
  }

  // REGISTER USER API
  
  registerUser() {
    console.log("Register Button Clicked");

    // Convert UI camelCase -> backend snake_case
    const payload = {
      full_name: this.registrationDetails.fullName,
      email: this.registrationDetails.email,
      password: this.registrationDetails.password
    };

    const url = `${environment.apiUrl}/user/register`; 

    console.log("Register URL:", url);
    console.log("Payload:", payload);

    this.http.post(url, payload, { headers: this.headers() })
      .subscribe({
        next: (res: any) => {
          console.log('User registered successfully:', res);
          alert('User Registered Successfully');

          // Clear form
          this.registrationDetails = {
            fullName: '',
            email: '',
            password: ''
          };

          // Navigate to login
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          console.error('Registration error:', err);
          alert('Registration Failed: ' +
            (err?.error?.message || err?.error || err?.message || 'Unknown error'));
        }
      });
  }

  
  // ADD BRANCH API
  addBranch() {

    const payload = {
      branch_name: this.branchDetails.branchName,
      address: this.branchDetails.address,
      rating: this.branchDetails.rating
    };

    const url = `${environment.apiUrl}/branch/add`;

    console.log("Add Branch URL:", url);

    this.http.post(url, payload, { headers: this.headers() })
      .subscribe({
        next: (res) => {
          console.log('Branch added successfully:', res);
          alert('Branch Added Successfully');
          this.loadBranches();
        },
        error: (err) => {
          console.error('Add branch error:', err);
          alert('Branch addition failed: ' +
            (err?.error?.message || err?.error || err?.message || 'Unknown error'));
        }
      });
  }

  // LOAD BRANCHES API
 
  loadBranches() {

    const url = `${environment.apiUrl}/branch/all`;

    this.http.get<any[]>(url, { headers: this.headers() })
      .subscribe({
        next: (data) => {
          console.log('Branches loaded:', data);
          this.branchList = data || [];
        },
        error: (err) => {
          console.error('Load branches error:', err);
          this.branchList = [];
        }
      });
  }

}