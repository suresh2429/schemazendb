import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { Mail02FreeIcons, TelegramIcon } from '@hugeicons/core-free-icons';
import { Call02FreeIcons } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [RouterModule, HugeiconsIconComponent, FormsModule, CommonModule,HttpClientModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  TelegramIcon = TelegramIcon;
  callIcon = Call02FreeIcons;
  mailIcon = Mail02FreeIcons;
  userName: string = '';
  userEmail: string = '';
  userMessage: string = '';
  country:string='';
  phoneNum:string='';
constructor(private http: HttpClient) {}

sendMessage() {
  if (!this.userEmail || !this.userMessage.trim()) {
    alert('Please fill all required fields');
    return;
  }

  const payload = {
    email: this.userEmail,
    message: this.userMessage,
    name: this.userName,
    country:this.country,
    mobile:this.phoneNum
  };

 this.http.post('https://schemazendb-api.onrender.com/api/contact-us', payload)
  .subscribe({
    next: (res: any) => {
      alert("Message sent successfully ✅");
    },
    error: (err) => {
      console.error(err);
      alert("Failed ❌");
    }
  });
}
}
