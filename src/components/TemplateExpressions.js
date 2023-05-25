import MyComponent from "./MyComponent";

const TemplateExpressions = () => {

    const name = "Roberto";
    const data = {
        age: 26,
        job: "Programmer",
    }

    return(
        <div>
        <h1>Olá {name}, Tudo certinho? </h1>
        <p>Você atua como {data.job}, e tem {data.age} anos!</p>
        <MyComponent/>
        </div>
    )

}

export default TemplateExpressions