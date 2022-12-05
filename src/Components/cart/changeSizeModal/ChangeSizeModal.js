import React from "react";
import { useSelector } from "react-redux";

// Styles
import styles from "./ChangeSizeModal.module.css";

const ChangeSizeModal = ({
  show,
  onClose,
  allSize,
  name,
  onChangeSize,
  onSave,
}) => {
  // get previous size
  const modalSelectedSize = useSelector((state) => state.cart.selectedSize);

  // hide modal when its deactivated
  if (!show) {
    return null;
  }


  const fetchdata=()=>{
  fetch("http://localhost:3002/accounts")
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data[0].cart);
  })
}
useEffect(()=>{
   fetchdata();
},[])


  return (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p onClick={onClose}>×</p>
          <h2>
            CONFIGURE
            <br />'{name}'
          </h2>
        </div>
        <div className={styles.modalBody}>
          <p>SIZE:</p>
          {/* all available sizes */}
          <div className={styles.modalSizes}>
            {allSize.map((size) => (
              <div
                key={size.name}
                className={
                  modalSelectedSize === size.name ? styles.selected : ""
                }
                // change selected size style
                onClick={() => onChangeSize(size.name)}
              >
                {size.name}
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              // change selected size
              onSave();
              // close modal
              onClose();
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeSizeModal;
