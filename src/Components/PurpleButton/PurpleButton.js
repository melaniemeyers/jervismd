import './PurpleButton.css'

function PurpleButton(props){
    return(

        <button className='purple_button'><a href={props.link}>{props.text}</a></button>

    )
}

export default PurpleButton;