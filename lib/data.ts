
export type JobPosting = {
  id: number;
  title: string;
  client: string;
  location: string;
  salary: number;
  status: 'open' | 'filled' | 'closed';
  description: string;
  datePosted: string;
};

export type Candidate = {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'active' | 'passive' | 'placed';
  avatarUrl: string;
  resume: string;
  dateApplied: string;
};

export type Client = {
  id: number;
  name: string;
  industry: string;
  location: string;
  contactPerson: string;
  email: string;
  phone: string;
  memberSince: string;
};

export type Request = {
  id: number;
  client: string;
  jobTitle: string;
  requestDate: string;
  status: 'pending' | 'approved' | 'rejected';
};

export const jobPostings: JobPosting[] = [
  { 
    id: 1, 
    title: 'SIA Static Guard', 
    client: 'Vanguard Commercial Build', 
    location: 'London, UK', 
    salary: 32000, 
    status: 'open', 
    description: 'Seeking an SIA licensed security officer for night patrol and access control duties on an active construction site.',
    datePosted: '2024-07-28'
  },
  { 
    id: 2, 
    title: 'CSCS General Site Labourer', 
    client: 'Apex Property Developers', 
    location: 'Manchester, UK', 
    salary: 28000, 
    status: 'open', 
    description: 'Required for an immediate start. Duties include heavy lifting, site clean-up, and assisting skilled trades.',
    datePosted: '2024-07-25'
  },
  { 
    id: 3, 
    title: 'Post-Construction Cleaning Supervisor', 
    client: 'Horizon Facilities Management', 
    location: 'Birmingham, UK', 
    salary: 30000, 
    status: 'filled', 
    description: 'Leading a specialized clean-up team handling an intense end-of-build handover sequence.',
    datePosted: '2024-07-20'
  },
  { 
    id: 4, 
    title: 'Front-of-House Concierge Security', 
    client: 'Prestige Residential Management', 
    location: 'London, UK', 
    salary: 35000, 
    status: 'closed', 
    description: 'SIA licensed corporate guard for high-end residential block portfolio.',
    datePosted: '2024-07-15'
  },
];

export const candidates: Candidate[] = [
  { 
    id: 1, 
    name: 'Marcus Vance', 
    email: 'm.vance@example.com', 
    phone: '+44 7700 900077', 
    role: 'SIA Manned Guard', 
    status: 'active', 
    avatarUrl: 'https://picsum.photos/id/101/100/100', 
    resume: 'path/to/marcus_sia_badge.pdf',
    dateApplied: '2024-07-29'
  },
  { 
    id: 2, 
    name: 'Liam O’Connor', 
    email: 'liam.oc@example.com', 
    phone: '+44 7700 900142', 
    role: 'CSCS Construction Operative', 
    status: 'passive', 
    avatarUrl: 'https://picsum.photos/id/102/100/100', 
    resume: 'path/to/liam_cscs_card.pdf',
    dateApplied: '2024-07-26'
  },
  { 
    id: 3, 
    name: 'Sarah Jenkins', 
    email: 's.jenkins@example.com', 
    phone: '+44 7700 900288', 
    role: 'Commercial Cleaning Specialist', 
    status: 'placed', 
    avatarUrl: 'https://picsum.photos/id/103/100/100', 
    resume: 'path/to/sarah_clean_cv.pdf',
    dateApplied: '2024-07-22'
  },
  { 
    id: 4, 
    name: 'David Kojo', 
    email: 'd.kojo@example.com', 
    phone: '+44 7700 900511', 
    role: 'SIA Night Patrol Guard', 
    status: 'active', 
    avatarUrl: 'https://picsum.photos/id/104/100/100', 
    resume: 'path/to/david_security_cv.pdf',
    dateApplied: '2024-07-18'
  },
];

export const clients: Client[] = [
  { 
    id: 1, 
    name: 'Vanguard Commercial Build', 
    industry: 'Commercial Contractors', 
    location: 'London, UK', 
    contactPerson: 'Arthur Pendelton', 
    email: 'a.pendelton@vanguardbuild.co.uk', 
    phone: '+44 20 7946 0192',
    memberSince: '2022-01-15'
  },
  { 
    id: 2, 
    name: 'Apex Property Developers', 
    industry: 'Property Development', 
    location: 'Manchester, UK', 
    contactPerson: 'Fiona Gallagher', 
    email: 'fiona.g@apexdevelopers.co.uk', 
    phone: '+44 161 496 0231',
    memberSince: '2021-06-20'
  },
  { 
    id: 3, 
    name: 'Horizon Facilities Management', 
    industry: 'Facilities Management', 
    location: 'Birmingham, UK', 
    contactPerson: 'Simon Vance', 
    email: 's.vance@horizonfm.co.uk', 
    phone: '+44 121 496 0444',
    memberSince: '2023-03-10'
  },
  { 
    id: 4, 
    name: 'Matrix Logistics Hubs', 
    industry: 'Warehousing & Logistics', 
    location: 'Coventry, UK', 
    contactPerson: 'Gary Lineker', 
    email: 'g.lineker@matrixwarehousing.co.uk', 
    phone: '+44 24 7696 0872',
    memberSince: '2022-11-05'
  },
];

export const requests: Request[] = [
  { 
    id: 1, 
    client: 'Vanguard Commercial Build', 
    jobTitle: 'SIA Static Guard', 
    requestDate: '2024-07-30', 
    status: 'approved' 
  },
  { 
    id: 2, 
    client: 'Matrix Logistics Hubs', 
    jobTitle: 'Contract Cleaning Services', 
    requestDate: '2024-07-28', 
    status: 'pending' 
  },
  { 
    id: 3, 
    client: 'Apex Property Developers', 
    jobTitle: 'End-of-Build Clean-up Team', 
    requestDate: '2024-07-26', 
    status: 'approved' 
  },
  { 
    id: 4, 
    client: 'Horizon Facilities Management', 
    jobTitle: 'CSCS General Site Labourer', 
    requestDate: '2024-07-24', 
    status: 'pending' 
  },
];