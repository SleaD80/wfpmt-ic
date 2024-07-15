import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function PayerInfo({payer_name, payer_inn, payer_amount, payer_address}) {
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
          Плательщик:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={payer_name} />
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
          <Form.Control type="text" defaultValue={payer_inn} />
        </Col>
        <Form.Label column sm={2}>
          Сумма:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={payer_amount} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Адрес места жительства:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={payer_address} />
        </Col>
        <Form.Label column sm={2}>
          Комиссии и расходы:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" />
        </Col>
      </Form.Group>
      <Button variant="secondary" type="submit">
        Проверить
      </Button>
    </Form>
  );
}

export default PayerInfo;
