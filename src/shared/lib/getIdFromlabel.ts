const getIdFromLabel = (title: string) => {
  return title.toLocaleLowerCase().replaceAll(' ', '-')
}
export default getIdFromLabel
