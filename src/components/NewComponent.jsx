function NewComponent (props) {
    return <h3 className={props.cssClass}>ciao sono {props.randomName} </h3>
}

export default NewComponent
//ogni funzione componente react ha un parametro chiamato props che è un oggetto, che contiene tutte le prop che questo parametro riceve (vedi  App.js)