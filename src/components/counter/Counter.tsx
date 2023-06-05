import styles from "./Counter.module.css";

interface CounterProps {
  counterType: "created" | "finished";
  count: number;
  maxCount?: number;
}

export function Counter({ count, counterType, maxCount }: CounterProps) {
  return (
    <div className={styles.counter}>
      {counterType === "created" || maxCount === 0 ? (
        <p>{count}</p>
      ) : (
        <p>
          {count} of {maxCount}
        </p>
      )}
    </div>
  );
}
