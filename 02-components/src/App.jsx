import './App.css'
import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
    postedAgo: "5 days ago",
    title: "Senior UI/UX Designer",
    jobType: "Part-time",
    level: "Senior level",
    salary: "$120/hr",
    location: "San Francisco, CA",
    isSaved: false
  },
  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    postedAgo: "2 days ago",
    title: "Frontend Engineer",
    jobType: "Full-time",
    level: "Mid level",
    salary: "$140/hr",
    location: "Mountain View, CA",
    isSaved: false
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    postedAgo: "1 week ago",
    title: "Software Engineer",
    jobType: "Full-time",
    level: "Senior level",
    salary: "$130/hr",
    location: "Redmond, WA",
    isSaved: false
  },
  {
    id: 4,
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    postedAgo: "3 days ago",
    title: "Product Designer",
    jobType: "Contract",
    level: "Senior level",
    salary: "$110/hr",
    location: "Menlo Park, CA",
    isSaved: false
  },
  {
    id: 5,
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    postedAgo: "6 days ago",
    title: "UI Engineer",
    jobType: "Full-time",
    level: "Mid level",
    salary: "$150/hr",
    location: "Cupertino, CA",
    isSaved: false
  },
  {
    id: 6,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    postedAgo: "4 days ago",
    title: "Frontend Developer",
    jobType: "Contract",
    level: "Mid level",
    salary: "$125/hr",
    location: "Los Gatos, CA",
    isSaved: false
  },
  {
    id: 7,
    company: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    postedAgo: "1 day ago",
    title: "UI Software Engineer",
    jobType: "Full-time",
    level: "Senior level",
    salary: "$135/hr",
    location: "Austin, TX",
    isSaved: false
  },
  {
    id: 8,
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Adobe_Logo.svg",
    postedAgo: "1 week ago",
    title: "UX Researcher",
    jobType: "Full-time",
    level: "Mid level",
    salary: "$115/hr",
    location: "San Jose, CA",
    isSaved: false
  },
  {
    id: 9,
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    postedAgo: "2 weeks ago",
    title: "Product Designer",
    jobType: "Remote",
    level: "Senior level",
    salary: "$100/hr",
    location: "Remote",
    isSaved: false
  },
  {
    id: 10,
    company: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    postedAgo: "3 days ago",
    title: "UX/UI Designer",
    jobType: "Full-time",
    level: "Mid level",
    salary: "$118/hr",
    location: "San Francisco, CA",
    isSaved: false
  }
];

  return (
      <div className='parent'>
        {jobs.map((job,idx) => {          
          return (
            <div key={idx+1}>
              
              <Card company={job.company} logo={job.logo} posted={job.postedAgo} title={job.title} jobType={job.jobType} level={job.jobType} salary={job.salary} location={job.location} />
            </div>
          )
        })} 
      </div>
  )
}

export default App
