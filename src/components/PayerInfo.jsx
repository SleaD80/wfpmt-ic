import styles from './PayerInfo.module.css';

function PayerInfo(props) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>№</div>
      <div className={styles.attr}>{props.number}</div>
      <div className={styles.label}>от</div>
      <div className={styles.attr}>{props.date}</div>
      <div className={styles.label}>Плательщик:</div>
      <div className={styles.attr}>{props.name}</div>
      <div className={styles.label}>Номер счета:</div>
      <div className={styles.attr}>{props.account}</div>
      <div className={styles.label}>ИНН:</div>
      <div className={styles.attr}>{props.inn}</div>
      <div className={styles.label}>Сумма:</div>
      <div className={styles.attr}>{props.amount}</div>
      <div className={styles.label}>Адрес места жительства:</div>
      <div className={styles.attr}>{props.address}</div>
      <div className={styles.label}>Комиссии и расходы:</div>
      <div className={styles.attr}>{props.fee}</div>
    </div>
  );
}

export default PayerInfo;
