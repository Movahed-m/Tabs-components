import styles from "../styles/Content.module.css"

function Content({ title }) {

  return (
    <>
      <h3 className={styles.content_title}>{title}</h3>
      <p className={styles.content_description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        officiis suscipit iusto deserunt fuga rem aliquam, vero itaque
        consectetur mollitia odit dolores fugit doloremque nulla harum quidem
        doloribus quae laborum?
      </p>
    </>
  );
}

export default Content;
