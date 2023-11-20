import { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
export const Movie = (props) => {
  const [detalle, setDetalle] = useState([])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const fetchDetalle = () => {
    fetch(props.API_URL + 'apikey=' + props.API_KEY + '&i=' + props.pelicula.imdbID)
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setDetalle(data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchDetalle()
  }, [])

  return (
    <>
      <img src={props.pelicula.Poster} alt={props.pelicula.Title} />

      <cite className='pelicula-cite'>{props.pelicula.Year}</cite>
      <h3>{props.pelicula.Title}</h3>
      <p>{detalle.Plot}</p>
      <Button variant='primary' onClick={handleShow}>
        More Info
      </Button>

      <Modal show={show} onHide={handleClose} className='modal modal-md'>
        <Modal.Header closeButton className='modal-head'>
          <Modal.Title>{detalle.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <div>
            <img src={detalle.Poster} alt={detalle.Title} />
            <cite>{detalle.Genre}</cite>
            <p>{detalle.Country}</p>
            <p>{detalle.Director}</p>
            <p>{detalle.Plot}</p>
            <p>{detalle.Runtime}</p>
          </div>
        </Modal.Body>
        <Modal.Footer className='modal-fot'>
          <Button className='btn-danger' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
