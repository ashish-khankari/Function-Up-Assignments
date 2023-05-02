
import './UserCard.css'

export default function ShowUserCard({users}){
    const {id, email, first_name, last_name, avatar} = users
    return(
        <div className="cards">
            <p className='id'>{id}</p>
            <img src={avatar} className='img'/>
            <p className='txt'> Email: {email}</p>
            <p className='txt'> First-Name: {first_name}</p>
            <p className='txt'>Last-Name:  {last_name}</p>

        </div>
    )
}