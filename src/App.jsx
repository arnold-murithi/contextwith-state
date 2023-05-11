//import { useState } from 'react'
import Heading from './Heading'
import Section from './Section'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post 
      title="Hello traveller!"
      body="Read about my adventures"
            />
    <AllPosts/>
    </Section>
  )
}

function AllPosts(){
  return(
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts/>
    </Section>
  );
}

function RecentPosts(){
  return(
    <Section>
      <Heading>Recent Posts</Heading>
      <Post title="Flavours of lisbon"
            body="....those pastei`s de nata"
            />
      <Post title="Bueinos aires in the rythm of tango"
            body="I loved it"
            />      
    </Section>
  )
}

function Post({title,body}){
  return(
    <Section isFancy={true}> 
        <Heading>
          {title}
        </Heading>
        <p><i>{body}</i></p>
    </Section>
  )
}

export default App
