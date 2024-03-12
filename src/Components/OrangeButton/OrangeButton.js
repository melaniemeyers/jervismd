import './OrangeButton.css'

function OrangeButton(props){
    return(

        <button className='orange_button'><a href={props.link}>{props.text}</a></button>

    )
}

export default OrangeButton;