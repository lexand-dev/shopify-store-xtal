import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles.LoaderWrapper}>
    <div className={styles.Loader}>
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  </div>
  )
}
