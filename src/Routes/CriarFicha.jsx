import React, {useState} from "react"
import Habilidades from "../Components/Habilidades/Habilidades"
import './CriarFicha.css'

function CriarFicha(){

	const [Nome, setNome] = useState("")
	const [Imagem, setImagem] = useState("")
	const [Cor, setCor] = useState("")
	const [Mesa, setMesa] = useState("")
	const [Idade, setIdade] = useState("")
	const [Nacionalidade, setNacionalidade] = useState("")
	const [Ocupacao, setOcupacao] = useState("")
	const [Historia, setHistoria] = useState("")
	const [Forca, setForca] = useState({})
	const [Agilidade, setAgilidade] = useState({})
	const [Percepcao, setPercepcao] = useState({})
	const [Intelecto, setIntelecto] = useState({})
	const [HabManuais, setHabManuais] = useState({})
	const [HabSociais, setHabSociais] = useState({})
	const [Contatos, setContatos] = useState([])

	const jsonData = {
		Nome, Imagem, Cor, Mesa, Idade, Nacionalidade, Ocupacao, Historia, Forca, Agilidade, Percepcao, Intelecto, HabManuais, HabSociais, Contatos
	};

	function download(content, fileName, contentType) {
		const a = document.createElement("a");
		const file = new Blob([content], { type: contentType });
		a.href = URL.createObjectURL(file);
		a.download = fileName;
		a.click();
	}

	function onDownload(){
		download(JSON.stringify(jsonData), `${Nome}.json`, "text/plain");
	}

return(
	<div className="App">
		<form>
			<div className="Page1">
				<div className="Field">
					<label htmlFor="Nome">Nome do Personagem:</label><br/>
					<input type="text" id="Nome" value={Nome} onChange={ (event) => setNome(event.target.value)}/><br/>
				</div>
				<div className="Field">
					<label htmlFor="Imagem">Imagem:</label><br/>
					<input type="text" id="Imagem" value={Imagem} onChange={ (event) => setImagem(event.target.value)}/><br/>
				</div>
				<div className="Field">
					<label htmlFor="Cor">Cor</label><br/>
					<input type="text" id="Cor" value={Cor} onChange={ (event) => setCor(event.target.value)}/><br/>
				</div>
				<div className="Field">
					<label htmlFor="Mesa">Mesa</label><br/>
					<input type="text" id="Mesa" value={Mesa} onChange={ (event) => setMesa(event.target.value)}/><br/>
				</div>
				<div className="Field">
					<label htmlFor="Idade">Idade</label><br/>
					<input type="text" id="Idade" value={Idade} onChange={ (event) => setIdade(event.target.value)}/><br/>
				</div>
				<div className="Field">
					<label htmlFor="Nacionalidade">Nacionalidade</label><br/>
					<input type="text" id="Nacionalidade" value={Nacionalidade} onChange={ (event) => setNacionalidade(event.target.value)}/><br/>
				</div>
				<div className="Field">
					<label htmlFor="Ocupacao">Ocupacao</label><br/>
					<input type="text" id="Ocupacao" value={Ocupacao} onChange={ (event) => setOcupacao(event.target.value)}/><br/>
				</div>
				<div className="Field">
					<label htmlFor="Historia">História</label><br/>
					<textarea type="text" id="Historia" value={Historia} onChange={ (event) => setHistoria(event.target.value)}/><br/>
				</div>
			</div>

			<div className="habilities">
				<div className="hdiv">
					<label htmlFor="Forca">Forca</label>
					<Habilidades setHabilidade={setForca} name="Agilidade" />
				</div>
				<div className="hdiv">
					<label htmlFor="Agilidade">Agilidade</label>
					<Habilidades setHabilidade={setAgilidade} name="Agilidade" />
				</div>
				<div className="hdiv">
					<label htmlFor="Percepcao">Percepção</label>
					<Habilidades setHabilidade={setPercepcao} name="Percepcao" />
				</div>
				</div>
				<div className="habilities">
				<div className="hdiv">
					<label htmlFor="Intelecto">Intelecto</label>
					<Habilidades setHabilidade={setIntelecto} name="Intelecto" />
				</div>
				<div className="hdiv">
					<label htmlFor="HabManuais">Habilidades Manuais</label>
					<Habilidades setHabilidade={setHabManuais} name="HabManuais" />
				</div>
				<div className="hdiv">
					<label htmlFor="HabSociais">Habilidades Sociais</label>
					<Habilidades setHabilidade={setHabSociais} name="HabSociais" />
				</div>
			</div>
		</form>
			<button className="submitButton" onClick={onDownload}>Clica aqui puta</button>
	</div>
)
}

export default CriarFicha