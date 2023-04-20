import './Invitation.css'
export function Invitation(props) {
    return (
        <fragment>
            <div className={"letter"}>
                <p>Subject : <span>{props.invitation}</span> </p>
                <p>To : <span>{props.email}</span> </p>
                <p>Hi , <span>{props.name}</span> </p>
                <p>I am having a <span>{props.reason}</span>  next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them - <span>{props.friendsNames}</span>.</p>
                <p>My house is behind our school , near <span>{props.address}</span>  .</p>
                <p>I hope you will come and see you soon .</p>
                <p>from ,</p>
                <p><span>{props.nameOfManager}</span> </p>
            </div>

        </fragment>

    )
}
