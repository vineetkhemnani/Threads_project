import { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'
import { useParams } from 'react-router-dom'
import useShowToast from '../hooks/useShowToast'

const UserPage = () => {
  // store the user state
  const [user, setUser] = useState(null)

  // fetch username from params
  const { username } = useParams()

  const showToast = useShowToast()
  // get user using fetch request
  const getUser = async () => {
    const res = await fetch(`/api/users/profile/${username}`)
    const data = await res.json()
    console.log(data)

    if (data.error) {
      showToast('Error', data.error, 'error')
      return
    }

    setUser(data)
  }
  useEffect(() => {
    try {
      // call the getUser() whenever username changes
      getUser()
    } catch (error) {
      // console.log(error)
      showToast('Error', error, 'error')
    }
  }, [username,useShowToast])

  if(!user) return null;
  return (
    <>
      <UserHeader user={user}/>
      <UserPost
        likes={1200}
        replies={481}
        postImg="./post1.png"
        postTitle="Let's talk about threads"
      />
      <UserPost
        likes={451}
        replies={12}
        postImg="./post2.png"
        postTitle="First post"
      />
      <UserPost
        likes={321}
        replies={989}
        postImg="./post3.png"
        postTitle="I love this guy"
      />
      <UserPost likes={212} replies={56} postTitle="This is my first thread" />
    </>
  )
}
export default UserPage
