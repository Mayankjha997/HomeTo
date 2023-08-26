import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  position: string;
  company: string;
  avatarUrl: string;
  linkedIn: String;
  instagram: String;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Yusuf Siddiqui',
      position: 'Project Mentor',
      company: 'NIIT Stackroute',
      avatarUrl: 'assets/team-avatar/0.png',
      linkedIn: '',
      instagram: ''
    },
    {
      name: 'Hasib Al Galib',
      position: 'Training Mentor',
      company: 'NIIT Stackroute',
      avatarUrl: 'assets/team-avatar/1.png',
      linkedIn: '',
      instagram: ''
    },
    {
      name: 'Aakriti Thakur',
      position: 'Software Engineer',
      company: 'CGI',
      avatarUrl: 'assets/team-avatar/2.png',
      linkedIn: 'https://www.linkedin.com/in/aakriti-t-16437317a',
      instagram: ''
    },
    {
      name: 'Mayank Jha',
      position: 'Software Engineer',
      company: 'CGI',
      avatarUrl: 'assets/team-avatar/3.png',
      linkedIn: 'https://www.linkedin.com/in/mayank-jha-9276821a5/',
      instagram: ''
    },
    {
      name: 'Ruhul Zaid Ahmad',
      position: 'Software Engineer',
      company: 'CGI',
      avatarUrl: 'assets/team-avatar/4.png',
      linkedIn: 'https://www.linkedin.com/in/ruhul-zaid-ahmad-891486255',
      instagram: ''
    },
    {
      name: 'Shreya Jayant',
      position: 'Software Engineer',
      company: 'CGI',
      avatarUrl: 'assets/team-avatar/5.png',
      linkedIn: 'https://www.linkedin.com/in/shreya-jayant-636a37206',
      instagram: ''
    },
    {
      name: 'Shriti Panda',
      position: 'Software Engineer',
      company: 'CGI',
      avatarUrl: 'assets/team-avatar/6.png',
      linkedIn: 'https://www.linkedin.com/in/shriti-panda-45a843190',
      instagram: ''
    },
    {
      name: 'V Naveen Reddy',
      position: 'Software Engineer',
      company: 'CGI',
      avatarUrl: 'assets/team-avatar/7.png',
      linkedIn: '',
      instagram: ''
    },
    {
      name: 'Yashpal Singh Baghel',
      position: 'Software Engineer',
      company: 'CGI',
      avatarUrl: 'assets/team-avatar/8.png',
      linkedIn: 'https://www.linkedin.com/in/yashpal-singh-baghel-1a63101b0/',
      instagram: 'https://www.instagram.com/singhhyashpal/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
