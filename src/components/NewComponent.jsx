function NewComponent ({cssClass, randomName}) {
    return <h3 className={cssClass}>ciao sono {randomName} </h3>
}

export default NewComponent
//ogni funzione componente react ha un parametro chiamato props che è un oggetto, che contiene tutte le prop che questo parametro riceve (vedi  App.js)