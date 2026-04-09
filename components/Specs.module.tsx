import styles from "./Specs.module.css";

export default function Specs() {
  const data = [
    { label: "Fixed Carbon", value: "80% - 85%" },
    { label: "Ash Content", value: "Max 3%" },
    { label: "Moisture", value: "Max 5%" },
    { label: "Burning Time", value: "4 - 5 Hours" },
  ];

  return (
    <section className={styles.specContainer}>
      <h2>Technical Specifications</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Property</th>
            <th>Standard Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.label}</td>
              <td className={styles.value}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
