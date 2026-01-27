import "./App.css";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

function App() {

  const cards = [
  {
    id: 1,
    backgroundImg: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    intro: "Customers who are happy with current services.",
    tag: "Satisfied",
  },
  {
    id: 2,
    backgroundImg: "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
    intro: "People who lack access to adequate services.",
    tag: "Underserved",
  },
  {
    id: 3,
    backgroundImg: "https://plus.unsplash.com/premium_photo-1661774756724-e740f94443fb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    intro: "Individuals with limited banking access.",
    tag: "Underbanked",
  },
  {
    id: 4,
    backgroundImg: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
    intro: "Users actively looking for better solutions.",
    tag: "Seeking",
  },
  {
    id: 5,
    backgroundImg: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
    intro: "Customers willing to try new products.",
    tag: "Open-minded",
  },
  {
    id: 6,
    backgroundImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
    intro: "Digitally active and tech-savvy users.",
    tag: "Tech Ready",
  },
  {
    id: 7,
    backgroundImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
    intro: "Users who need guidance and education.",
    tag: "Learners",
  },
  {
    id: 8,
    backgroundImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
    intro: "Small business owners with growth goals.",
    tag: "Entrepreneurs",
  },
  {
    id: 9,
    backgroundImg: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
    intro: "Professionals focused on stability.",
    tag: "Working Class",
  },
  {
    id: 10,
    backgroundImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0",
    intro: "New users entering the ecosystem.",
    tag: "Newcomers",
  },
];


  return (
    <>
      <Section1 users = {cards} />
      <Section2 />
    </>
  );
}



export default App;