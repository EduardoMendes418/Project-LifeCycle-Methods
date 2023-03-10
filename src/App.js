import './App.css';
import React from 'react';

//Hard coding
class App extends React.Component {
    state = {
      counter: 0,
      posts: [
        {
          id: 1,
          title: 'teste 01',
          body: 'o corpo 2'
        },
        {
          id: 2,
          title: 'teste 02',
          body: 'o corpo 3'
        },
        {
          id: 3,
          title: 'teste 03',
          body: 'o corpo 3'
        },
      ]
  };

  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    const { posts, counter} = this.state;
    posts[0].title = 'o titulo mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter +1})
    }, 2000)
  }

  render() {

    const { posts, counter} = this.state;

    return (
          <div className="App">
            <p>{counter}</p>
            {posts.map(post => (
              <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              </div>
            ))}
          </div>
        );
  }
}


export default App;
