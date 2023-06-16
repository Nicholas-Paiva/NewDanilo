import React, {useState} from "react"
import ConfigDrawer from "../Components/Habilidades/Drawer/Drawer"
import { Box, Text, Button, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, } from "@chakra-ui/react"
// import './RollDice.css'

function RollDice(){

    const [tipo, setTipo] = useState()
    const [hab, setHab] = useState(10)
    const [dResult, setDResult] = useState()
    const sys = [
        [99, 99, 20, 6, 1],
        [99, 20, 19, 5, 1],
        [99, 20, 18, 4, 1],
        [99, 19, 17, 4, 1],
        [20, 19, 16, 4, 1],
        [20, 18, 15, 3, 1],
        [20, 18, 14, 3, 1],
        [20, 17, 13, 3, 1],
        [20, 17, 12, 3, 1],
        [19, 16, 11, 3, 1],
        [19, 16, 10, 3, 1], // Skill 10 - 1a2FE - 3a10F - 11a15N - 16a18B - 19e20SE
        [19, 15, 9, 3, 1],
        [19, 15, 8, 3, 1],
        [19, 14, 7, 3, 1],
        [18, 14, 6, 3, 1],
        [18, 13, 5, 2, 1],
        [18, 13, 3, 2, 1],
        [18, 12, 3, 2, 1],
        [18, 12, 2, 0, 1],
        [17, 11, 0, 0, 1]
    ]

    function roll(Tipo, Hab){
        let randomResult = (Math.floor(Math.random()*20)+1)
        let quality
        let HabAmount = parseInt(Hab)-1
        if(randomResult >= sys[HabAmount][4] && randomResult <= sys[HabAmount][3]){
            quality = `${randomResult} - Fracasso Extremo`
            console.log(quality)
        }
        if(randomResult >= sys[HabAmount][3] && randomResult <= sys[HabAmount][2]){
            quality = `${randomResult} - Fracasso`
            console.log(quality)
        }
        if(randomResult >= sys[HabAmount][2] && randomResult <= sys[HabAmount][1]){
            quality = `${randomResult} - Neutro`
            console.log(quality)
        }
        if(randomResult >= sys[HabAmount][1] && randomResult <= sys[HabAmount][0]){
            quality = `${randomResult} - Bom`
            console.log(quality)
        }
        if(randomResult >= sys[HabAmount][0]){
            quality = `${randomResult} - Sucesso Extremo`
            console.log(quality)
        }
        
        setDResult(quality)
        

        console.log(`Tipo: ${Tipo}, Hab: ${HabAmount}, Quality: ${quality}, Dado: ${randomResult}`)
        console.log(`Hab: ${sys[HabAmount]}`)
    }
    
return(
	<Box className="App">
        <ConfigDrawer/>
        <Box className="General">
            <Box className="habDiv">
                <Text>Habilidade</Text>
                <NumberInput min={0} max={20} onChange={(e) => setHab(e)}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Box>


            <Select placeholder="Habilidade, Inabilidade, Proficiência" onChange={(e) => setTipo(e.target.value)} value={tipo} >
                <option value='Inabilidade'>Inabilidade</option>
                <option value='Habilidade'>Habilidade</option>
                <option value='Proficiencia'>Proficiência</option>
            </Select>
            <Text>{dResult}</Text>
            <Button onClick={() => roll(tipo, hab)}>Roll the Dice</Button>
        </Box>
	</Box>
)
}

export default RollDice