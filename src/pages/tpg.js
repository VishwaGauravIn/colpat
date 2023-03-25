import Toast from "@/components/elements/toast/Toast";
import ColorPicker from "@/components/globals/ColorPicker";
import { genericColorName } from "@/utils/getColorName";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function tpg() {
  const router = useRouter();
  const [col1, setCol1] = useState("#ffffff");
  const [col2, setCol2] = useState("#ffffff");
  const [col3, setCol3] = useState("#ffffff");
  const [col4, setCol4] = useState("#ffffff");
  const [col5, setCol5] = useState("#ffffff");
  useEffect(() => {
    if (router.isReady) {
      if (router.query.col1) {
        setCol1(router.query.col1);
      }
      if (router.query.col2) {
        setCol2(router.query.col2);
      }
      if (router.query.col3) {
        setCol3(router.query.col3);
      }
      if (router.query.col4) {
        setCol4(router.query.col4);
      }
      if (router.query.col5) {
        setCol5(router.query.col5);
      }
    }
  }, [router.isReady]);
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="w-full flex flex-wrap justify-evenly">
            <ColorPicker
              val={col1}
              setVal={setCol1}
              label={genericColorName[0]}
            />
            <ColorPicker
              val={col2}
              setVal={setCol2}
              label={genericColorName[1]}
            />
            <ColorPicker
              val={col3}
              setVal={setCol3}
              label={genericColorName[2]}
            />
            <ColorPicker
              val={col4}
              setVal={setCol4}
              label={genericColorName[3]}
            />
            <ColorPicker
              val={col5}
              setVal={setCol5}
              label={genericColorName[4]}
            />
          </div>
        </div>
      </div>
      <Toast />
    </>
  );
}
