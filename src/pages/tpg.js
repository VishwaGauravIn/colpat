import Toast from "@/components/elements/toast/Toast";
import ColorPicker from "@/components/globals/ColorPicker";
import { genericColorName } from "@/utils/getColorName";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function tpg() {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
    }
  }, [router.isReady]);

  //  WARN: Using Dom method to avoid redering
  function getEncodedVal(id) {
    return encodeURIComponent(document.getElementById(`${id}_val`).value);
  }
  function onChangeTrigger() {
    router.push(
      `?col1=${getEncodedVal("col1")}&col2=${getEncodedVal(
        "col2"
      )}&col3=${getEncodedVal("col3")}&col4=${getEncodedVal(
        "col4"
      )}&col5=${getEncodedVal("col5")}`
    );
  }
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="w-full flex flex-wrap justify-evenly">
            <ColorPicker
              id="col1"
              label={genericColorName[0]}
              onChangeTrigger={onChangeTrigger}
            />
            <ColorPicker
              id="col2"
              label={genericColorName[1]}
              onChangeTrigger={onChangeTrigger}
            />
            <ColorPicker
              id="col3"
              label={genericColorName[2]}
              onChangeTrigger={onChangeTrigger}
            />
            <ColorPicker
              id="col4"
              label={genericColorName[3]}
              onChangeTrigger={onChangeTrigger}
            />
            <ColorPicker
              id="col5"
              label={genericColorName[4]}
              onChangeTrigger={onChangeTrigger}
            />
          </div>
        </div>
      </div>
      <Toast />
    </>
  );
}
