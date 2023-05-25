const Events = () => {

    const handleMyEvent = (e) => {

        console.log(e);

    }

    const renderSomething = (x) => {

        if(x) {

            return <h1>Renderizando isso!</h1>

        } else {

            return <h1>Renderizando aquilo!</h1>

        }

    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}> Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("é pode pah")}> vai tomar no cu </button>
                <button onClick={() => {
                    if(true){
                        console.log("isso não deveria existir =)");
                    }
                }}> é</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );

} 

export default Events;