"use client";
import { useEffect } from "react";
import { transformedData } from "../helper/transformData";
import { useDispatch, useSelector } from "react-redux";
import { setDataList } from "../redux/feature/product.slice";
import styles from "../styles/Home.module.css";

export default function SpaceData() {
  const dispatch = useDispatch();
  const { space_data = {} } = useSelector((state) => state.products.dataList);

  let spaceArr = Object.entries(space_data);

  useEffect(() => {
    dispatch(setDataList(transformedData()));
  }, []);

  const toggelFun = (id1, id2) => {
    let transData = {};
    let spd = "space_data";
    let updateData = spaceArr?.map(([key1, val1], idx1) => {
      transData[spd] = transData[spd] || {};

      const nameArr = Object.entries(val1);

      return nameArr?.map(([key2, val2], idx2) => {
        transData[spd][key1] = transData[spd][key1] || {};

        if (key1 === id1 && key2 === id2) {
          transData[spd][key1][key2] = {
            ...val2,
            openStatus: !val2.openStatus,
          };
        } else {
          transData[spd][key1][key2] = {
            ...val2,
            openStatus: false,
          };
        }
      });
    });
    dispatch(setDataList(transData));
  };

  return (
    <div>
      {spaceArr?.length
        ? spaceArr?.map(([key1, val1], idx1) => {
            const nameArr = Object.entries(val1);

            return nameArr?.length
              ? nameArr?.map(([key2, val2], idx2) => {
                  return (
                    <div className={styles.cstmAccordin} key={`${idx1}${idx2}`}>
                      <h4
                        className={styles.heading}
                        onClick={() => toggelFun(key1, key2)}
                      >
                        {key1} {key2}
                      </h4>
                      {val2?.openStatus && (
                        <div className={styles.openDiv}>
                          <h5 className={styles.label}>File: {val2?.url}</h5>
                          <h5 className={styles.label}>
                            File Name: {val2?.fileName}
                          </h5>
                          <h5 className={styles.label}>Size: {val2?.size}</h5>
                        </div>
                      )}
                    </div>
                  );
                })
              : "No Data";
          })
        : "No Data"}
    </div>
  );
}
