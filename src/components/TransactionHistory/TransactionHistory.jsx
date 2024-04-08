import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ transactions }) {
    return (
      <table className={css.table}>
        <thead className={css.head}>
          <tr>
            <th className={css.headContent}>Type</th>
            <th className={css.headContent}>Amount</th>
            <th className={css.headContent}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.body}>
        {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={css.bodyContent}>{type}</td>
              <td className={css.bodyContent}>{amount}</td>
              <td className={css.bodyContent}>{currency}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
}