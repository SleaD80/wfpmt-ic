import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function PayerInfo(props) {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalNumber">
        <Form.Label column sm={2}>
          №
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" placeholder={props.number}/>
        </Col>
        <Form.Label column sm={2}>
          от
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" placeholder={props.date}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalNumber">
        <Form.Label column sm={2}>
          Плательщик:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" placeholder={props.name}/>
        </Col>
        <Form.Label column sm={2}>
          Номер счета:
        </Form.Label>
        <Col sm={3}>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">00000000000000000000</option>
            <option value="2">12345678901234567890</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalNumber">
        <Form.Label column sm={2}>
          ИНН:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" placeholder={props.inn}/>
        </Col>
        <Form.Label column sm={2}>
          Сумма:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" placeholder={props.amount}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalNumber">
        <Form.Label column sm={2}>
          Адрес места жительства:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" placeholder={props.address}/>
        </Col>
        <Form.Label column sm={2}>
          Комиссии и расходы:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" placeholder={props.fee}/>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default PayerInfo;
