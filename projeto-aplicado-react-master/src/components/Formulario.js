import { useState } from "react";
import emailjs from "@emailjs/browser";

function Formulario() {
    const[nome, setNome] = useState("");
    const[telefone, setTelefone] = useState("");
    const[email, setEmail] = useState("");
    const[assunto, setAssunto] = useState("");
    const[mensagem, setMensagem] = useState("");



    function sendEmail(e){
        e.preventDefault();
        if(nome === '' || telefone === '' || email === '' || assunto === '' || mensagem === '') {
            alert('Preencha todos os campos');
            return;
        }

        const templateParms = {
            from_name: nome,
            message: mensagem,
            email: email,
            phone: telefone,
            subject: assunto
    }

        emailjs.send("service_3x1oitb", "template_kiscbzh", templateParms, "sxjMEaGSferIiCUL7" )
        .then((response) => {
            alert("EMAIL ENVIADO", response.status, response.text);
            setAssunto('');
            setEmail('');
            setMensagem('');
            setNome('');
            setTelefone('');
        }, (err) => {
            console.log("ERRO: ", err)
        })
    }
    

    return(
        <form onSubmit={sendEmail} method="post">
            <div className="campos-geral">
                <div className="campos">
                    <div>
                        <label for="">Nome</label>
                    </div>
                        <div><input type="text" placeholder="Seu nome" onChange={(e) => setNome(e.target.value)}/></div>
                </div>
                <div className="campos" id="campo-telefone">
                    <div>
                        <label for="">Telefone</label>
                    </div>
                    <div><input type="text" placeholder="(21) 99999-9999" onChange={(e) => setTelefone(e.target.value)}/></div>
                </div>
                <div id="campo-email">
                    <div>
                        <label for="">E-mail</label>
                    </div>
                    <div>
                        <input type="email" placeholder="contato@email.com" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="campos">
                    <div>
                        <label for="">Escolha seu assunto</label>
                    </div>
                    <div>
                        <select placeholder="Selecione um campo" name="assunto" id="assunto" onChange={(e) => setAssunto(e.target.value)} required>
                            <option></option>
                            <option value="trabalho">Trabalhe conosco</option>
                            <option value="feedback">Feedback</option>
                            <option value="outro">Outros</option>
                        </select>
                    </div>
                </div>
                <div className="campos">
                    <div>
                        <label for="">Mensagem</label>
                    </div>
                    <div>
                        <textarea name="mensagem" id="mensagem" cols="95" rows="5"placeholder="Mensagem" onChange={(e) => setMensagem(e.target.value)}></textarea>
                    </div>
                </div>
            </div>
                <div className="botao-formulario">
                    <button type="submit">ENVIAR MENSAGEM</button>
                </div>
        </form>
    )
}


export default Formulario;