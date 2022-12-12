import React, { Component } from 'react'

export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data)
            this.setState({posts:res.data})
        })
    }
  render() {
    const {posts}=this.state 
      return (
      <div>GetEx
      <p>{this.state.posts.map
    ((post) => <ul key={post.id}><li>{post.title}</li></ul>)}</p>
      </div>
    )
  }
}
