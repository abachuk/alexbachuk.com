import React, { useRef, useEffect } from "react";
import styles from "./Book.module.scss";

const Book = ({ title, children, meta }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles["page"]}>
      <div className={styles["page__inner"]}>
        <div className={styles["book__meta"]}>
          <img src={meta.cover} className={styles["book__cover"]} />
          {title && <h1 className={styles["book__title"]}>{title}</h1>}
          <a href={meta.bookLink} target="_blank">
            Buy the book
          </a>
          <p>Category: {meta.category}</p>
          <p>Finished reading: {meta.dateFinished}</p>
        </div>
        <div className={styles["book__body"]}>{children}</div>
      </div>
    </div>
  );
};

export default Book;
