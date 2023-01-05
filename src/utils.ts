export const createPlateau = (size: number): string[][] => {
    return Array(size).fill(Array(size).fill(""))
}

const directions: directions[] = ["N", "E", "S", "W"]

export const rotateLeft = (direction: directions) => {
    if (direction === "N") return directions[3]
    return directions[directions.indexOf(direction) - 1]
}

export const rotateRight = (direction: directions) => {
    if (direction === "W") return directions[0]
    return directions[directions.indexOf(direction) + 1]
}