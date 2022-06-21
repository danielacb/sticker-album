import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
    </div>
  );
};

export default Loading;
