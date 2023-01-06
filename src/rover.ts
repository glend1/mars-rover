import * as utils from './utils';

export const marsRover = (positionData: positionData, instructions: string, maxSize = 5) => {
    const newPositionData = {...positionData}
    for (let i = 0; i < instructions.length; i++) {
        switch(instructions[i]) {
            case "L":
                newPositionData.direction = utils.rotateLeft(newPositionData.direction)
                break
            case "R":
                newPositionData.direction = utils.rotateRight(newPositionData.direction)
                break
            case "M":
                switch (newPositionData.direction) {
                    case "N":
                        newPositionData.y++
                        break
                    case "E":
                        newPositionData.x++
                        break
                    case "S":
                        newPositionData.y--
                        break
                    case "W":
                        newPositionData.x--
                        break
                    }
                    //throw error
                break
        }
    }
    return newPositionData
}