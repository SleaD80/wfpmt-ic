import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function PayerInfo({name, inn, amount, address, warningStyle}) {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    // }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" style={{position: "relative"}}>
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
          <Form.Select required isInvalid>
            <option></option>
            <option value="1">40817810050011139320</option>
            <option value="2">40702810800404929610</option>
            <option value="3">40817810900014095294</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid" tooltip={warningStyle==="tooltip"} >
            Выберите номер счета
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" style={{position: "relative"}}>
        <Form.Label column sm={2}>
          ИНН:
        </Form.Label>
        <Col sm={3}>
          <Form.Control type="text" defaultValue={inn?.value} isInvalid={inn?.status==="ERROR"} />
          <Form.Control.Feedback type="invalid" tooltip={warningStyle==="tooltip"} >
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
      {/* <Button variant="secondary" type="submit">
        Проверить
      </Button> */}
    </Form>
  );
}

export default PayerInfo;
