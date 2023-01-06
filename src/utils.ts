const directions: directions[] = ["N", "E", "S", "W"]

export const rotateLeft = (direction: directions) => {
    //this should be the last element
    if (direction === "N") return directions[3]
    return directions[directions.indexOf(direction) - 1]
}

export const rotateRight = (direction: directions) => {
    if (direction === "W") return directions[0]
    return directions[directions.indexOf(direction) + 1]
}

export const validPosition = (positionData: positionData, maxSize: number) => positionData.x > maxSize || positionData.y > maxSize || positionData.x < 0 || positionData.y < 0 ? false : true
