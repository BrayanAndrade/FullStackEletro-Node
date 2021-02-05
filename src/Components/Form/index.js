import React from 'react'

const Form = () => {

    const [form, setForm] = React.useState({
        nome: "",
        msg: ""
    })

    const [response, setResponse] = React.useState(null)

    function handleChange({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        console.log({ [id]: value })
    }

    //enviando dados para a API
    function handleSubmit(event) {
        event.preventDefault()
        fetch("http://localhost:3001/salvando", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).then((res) => {
            setResponse(res)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    value={form.nome}
                    onChange={handleChange}
                    className="form-control"

                /><br />

                <label htmlFor="msg">Mensagem</label>
                <input
                    type="text"
                    name="msg"
                    id="msg"
                    value={form.msg}
                    onChange={handleChange}
                    className="form-control"

                />

                <button type="submit" class="btn btn-secondary mt-2 mb-2">Enviar</button>
            </form>
            {response && response.ok && alert("Menssagem enviada!")}
        </div>
    )
}

export default Form
