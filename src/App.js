import React from "react";
import "./App.css";
import axios from 'axios';
import Posts from "./components/Posts";

function App() {
  const [timerOne, setTimerOne] = React.useState(0);
  const [timerTwo, setTimerTwo] = React.useState(0);
  const [posts, setPosts] = React.useState([]);


  React.useEffect(() => {
    console.log('Run on every render mount + update ');
  });


  React.useEffect(() => {
    console.log('Run everytime timerOne changes');
    const interval = setInterval(() => setTimerOne(timerOne + 1), 1000);

    // clean up 
    return () => clearInterval(interval,console.log('Run before clean up'));
    
  }, [timerOne]);



  React.useEffect(() => {
    // mounting 
    console.log('Run everytime timerTwo changes');
    const intervalTwo = setInterval(() => setTimerTwo(timerTwo + 2), 1000);

    // unmonting 
    return () => clearInterval(intervalTwo,console.log('Run once before clean up'));
    
  }, []);


  React.useEffect(() => {
    // render on page load
    console.log('Run after the first render');
    fetchPost();
  }, []);


  const fetchPost = async () => {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setPosts(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <h1>Redux</h1>
      <h1>{timerOne}</h1>
      <h1>{timerTwo}</h1>
      <Posts posts={posts} />
    </div>
  );
}
export default App;
