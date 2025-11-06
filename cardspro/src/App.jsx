import React from 'react';
import './App.css';
import Card from './components/card.jsx';


const App = () => {
const jobopenings =  [
    {
      id: 1,
      company: "Amazon",
      posted: "5 days ago",
      role: "Senior UI/UX Designer",
      type: "Part time",
      level: "Senior level",
      salary: "$12/hr",
      location: "Mumbai"
    },
    {
      id: 2,
      company: "Google",
      posted: "2 days ago",
      role: "Frontend Developer",
      type: "Full time",
      level: "Junior level",
      salary: "$18/hr",
      location: "Hyderabad"
    },
    {
      id: 3,
      company: "Microsoft",
      posted: "1 week ago",
      role: "Backend Engineer",
      type: "Full time",
      level: "Mid level",
      salary: "$22/hr",
      location: "Bangalore"
    },
    {
      id: 4,
      company: "Netflix",
      posted: "3 days ago",
      role: "React Developer",
      type: "Contract",
      level: "Mid level",
      salary: "$25/hr",
      location: "Remote"
    },
    {
      id: 5,
      company: "Tesla",
      posted: "Today",
      role: "Product Designer",
      type: "Internship",
      level: "Entry level",
      salary: "$10/hr",
      location: "Pune"
    }
  ];

  return (
    <div className='parent'>
      {jobopenings.map(function(elem){
        return <Card company={elem.company} />
      })}
    </div>
  );
};

export default App;
