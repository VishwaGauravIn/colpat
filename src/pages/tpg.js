import Toast from "@/components/elements/toast/Toast";
import ColorPicker from "@/components/globals/ColorPicker";
import { genericColorName } from "@/utils/getColorName";
import { tailwindcssPaletteGenerator } from "@bobthered/tailwindcss-palette-generator";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import stringify from "json-stringify-pretty-compact";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Clipboard2Check } from "react-bootstrap-icons";
import codeCopier from "@/utils/codeCopier";

export default function Tpg() {
  const router = useRouter();
  const [tailwindShades, setTailwindShades] = useState();
  useEffect(() => {
    if (router.isReady) {
    }
  }, [router.isReady]);

  //  WARN: Using Dom method to avoid redering
  function getEncodedVal(id) {
    return encodeURIComponent(document.getElementById(`${id}_val`).value);
  }
  function getVal(id) {
    return document.getElementById(`${id}_val`).value;
  }
  function onChangeTrigger() {
    router.push(
      `?col1=${getEncodedVal("col1")}&col2=${getEncodedVal(
        "col2"
      )}&col3=${getEncodedVal("col3")}&col4=${getEncodedVal(
        "col4"
      )}&col5=${getEncodedVal("col5")}`
    );
    updateTailwindShades();
  }
  function updateTailwindShades() {
    setTailwindShades(
      tailwindcssPaletteGenerator([
        getVal("col1"),
        getVal("col2"),
        getVal("col3"),
        getVal("col4"),
        getVal("col5"),
      ])
    );
  }
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl flex items-center flex-col gap-10">
          <div className="w-full flex flex-wrap justify-evenly">
            <ColorPicker
              id="col1"
              label={genericColorName[0]}
              onChangeTrigger={onChangeTrigger}
              updateTailwindShades={updateTailwindShades}
            />
            <ColorPicker
              id="col2"
              label={genericColorName[1]}
              onChangeTrigger={onChangeTrigger}
              updateTailwindShades={updateTailwindShades}
            />
            <ColorPicker
              id="col3"
              label={genericColorName[2]}
              onChangeTrigger={onChangeTrigger}
              updateTailwindShades={updateTailwindShades}
            />
            <ColorPicker
              id="col4"
              label={genericColorName[3]}
              onChangeTrigger={onChangeTrigger}
              updateTailwindShades={updateTailwindShades}
            />
            <ColorPicker
              id="col5"
              label={genericColorName[4]}
              onChangeTrigger={onChangeTrigger}
              updateTailwindShades={updateTailwindShades}
            />
          </div>
          <button
            className="rounded-full py-4 px-8 text-xl font-semibold bg-tint-emerald text-black flex justify-center items-center gap-2 group hover:ring-4 ring-offWhite/40"
            onClick={() => codeCopier(stringify(tailwindShades))}
          >
            <Clipboard2Check className="h-10 w-10 group-hover:scale-90 transition-all ease-in-out" />
            One Click Copy
          </button>
          <Highlight
            {...defaultProps}
            code={stringify(tailwindShades)}
            language="js"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={`${className} rounded-lg p-4 w-full max-w-3xl`}
                style={style}
              >
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
      <Toast />
    </>
  );
}
