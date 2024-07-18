import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function PayerInfo({name, inn, amount, address}) {
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
          <Form.Control type="text" defaultValue={name?.value} />
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
          <Form.Control type="text" defaultValue={inn?.value} className={inn?.status==="ERROR"?"is-invalid":"is-valid"} />
          <Form.Control.Feedback type="invalid">
            {inn?.message}
          </Form.Control.Feedback>
        </Col>
        <Form.Label column sm={2}>
          Сумма:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={amount?.value} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Адрес места жительства:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={address?.value} />
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
