import { useState, useEffect } from 'react'

export default function App(){
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        name: ''
    })
    const [bookmark, setBookmark] = useState({
        title: '',
        url: ''
       })
    const [token, setToken] = useState('')
    const login = async () => {
        try {
            const response = await fetch('/api/user/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:   JSON.stringify({ email: credentials.email, password: credentials.password })
            })
            const tokenResponse = await response.json()
            setToken(tokenResponse)
            localStorage.setItem('token', JSON.stringify(tokenResponse))
        } catch (error) {
            console.error(error)
        }
    }
    const signUp = async () => {
        try {
            const response = await fetch('/api/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:   JSON.stringify({ ...credentials })
            })
            const tokenResponse = await response.json()
            setToken(tokenResponse)
            localStorage.setItem('token', JSON.stringify(tokenResponse))
        } catch (error) {
            console.error(error)
        }
    }
    const createBookmark = async () => {
        try {
            const response = await fetch('/api/bookmarks',  {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({...bookmakr})
            })
            const data = await response.json
            setBookmarks([data,...bookmarks])
            setBookmark({
                title: '',
                url: ''
            })

        } catch (error) {
            console.error(error)
        }
    }
    const listBookamrk = async () => {
        try {
            const response = await fetch('/api/users/bookmarks')
            const data = await response.json()
            setBookmarks(data)
        } catch (error) {
            console.error(error)
        }
    }
    const deletedBookmark = async(id) => {
        try {
            const response = await fetch(`/api/bookmarks/${id}`)
            const data = await response.json()
            const bookmarksCopy = [...bookmarks]
            const index = bookmarksCopy.findIndex( bookmark => id === bookmark.id )
            bookmarksCopy.splice(index, 1)
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }
    const updateBookmark = async(id, updatedData) => {
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `bearer $(token)`
                },
                body: JSON.stringify(updatedData)
            })
            const data = await response.json()
            const bookmarksCopy = [...bookmarks]
            const index = bookmarksCopy.findIndex(bookmark => id === bookmark.id )
            bookmarksCopy[index] = {...bookmarksCopy[index],  ...updatedData}
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        listBookmarksByUser()
    }, [])
return (
        <>
            <h1>Login</h1>
            <form>
                <input type="text"></input>
                <input type="text"></input>
                <input type="submit"/>
            </form>
            <h2>SignUp</h2>
            <form>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="submit"></input>
            </form>
            <h2> Create A Bookmark</h2>
            <form>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="submit"></input>
            </form>
        <ul>
            { bookmarks.length ? bookmarks.map(item => {
                <li key={item._id}>
                    <h4>{item.title}</h4>
                    <a href={item.url} target="_blank"> {item.url}</a>
                </li>
            }): <>No BookMarks Added</>}
        </ul>
        </>
    )
}