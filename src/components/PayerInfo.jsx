import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function PayerInfo(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          №
        </Form.Label>
        <Col sm={3}>
          <Form.Control required type="text" defaultValue={props.number}/>
          <Form.Control.Feedback type="invalid">
            Укажите номер документа
          </Form.Control.Feedback>
        </Col>
        <Form.Label column sm={2}>
          от
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={props.date}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Плательщик:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={props.name}/>
        </Col>
        <Form.Label column sm={2}>
          Номер счета:
        </Form.Label>
        <Col sm={3}>
          <Form.Select required>
            <option></option>
            <option value="1">00000000000000000000</option>
            <option value="2">12345678901234567890</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Выберите номер счета
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          ИНН:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={props.inn}/>
        </Col>
        <Form.Label column sm={2}>
          Сумма:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={props.amount}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Адрес места жительства:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={props.address}/>
        </Col>
        <Form.Label column sm={2}>
          Комиссии и расходы:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={props.fee}/>
        </Col>
      </Form.Group>
      <Button type="submit">Проверить</Button>
    </Form>
  );
}

export default PayerInfo;
