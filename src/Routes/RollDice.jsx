import React, {useState} from "react"
import ConfigDrawer from "../Components/Habilidades/Drawer/Drawer"
import { Box, Text, Button, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, } from "@chakra-ui/react"
import './RollDice.css'

function RollDice(){

    const [tipo, setTipo] = useState()
    const [hab, setHab] = useState(10)
    const [dResult, setDResult] = useState()

    function roll(Tipo, Hab){
        setDResult(Math.random())

        console.log(`Tipo: ${Tipo}, Hab: ${Hab}`)
    }

return(
	<div className="App">
        <ConfigDrawer/>
        <NumberInput min={0} max={20} onChange={(e) => setHab(e)} >
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
        </NumberInput>

        <Select placeholder="Habilidade, Inabilidade, Proficiência" onChange={(e) => setTipo(e.target.value)} value={tipo} >
            <option value='Inabilidade'>Inabilidade</option>
            <option value='Habilidade'>Habilidade</option>
            <option value='Proficiencia'>Proficiência</option>
        </Select>
        <Text>{dResult}</Text>
        <Button onClick={() => roll(tipo, hab)}>Roll the Dice</Button>
	</div>
)
}

export default RollDice