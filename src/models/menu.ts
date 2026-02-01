class Menu {
  description: string
  image: string
  infos: string[]
  title: string
  notes: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    notes: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.notes = notes
    this.title = title
  }
}

export default Menu
