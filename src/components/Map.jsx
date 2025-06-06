import { Grass } from './Grass'
import { Row } from './Row'
import useStore from '../stores/map'

export function Map() {
  const rows = useStore((state) => state.rows)

  return (
    <>
      <Grass rowIndex={0} />
      <Grass rowIndex={-1} />
      <Grass rowIndex={-2} />
      <Grass rowIndex={-3} />
      <Grass rowIndex={-4} />

      {rows.map((rowData, index) => (
        <Row key={index} rowIndex={index + 1} rowData={rowData} />
      ))}
    </>
  )
}
