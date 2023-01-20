import React, { useState, useEffect } from "react";
import {
	FaAngleDoubleLeft,
	FaAngleDoubleRight,
	FaUndo,
	FaRegFilePdf,
	FaRegFileAlt,
} from "react-icons/fa";

import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  //   removeElements,
  Controls,
  Background,
  MiniMap,
} from "reactflow";
import Popup from "reactjs-popup";
import CustomNode from "../CustomNodes/CustomNode";
import CustomNode2 from "../CustomNodes/CustomNode2";
import CustomNode3 from "../CustomNodes/CustomNode3";
import CustomNode4 from "../CustomNodes/CustomNode4";
import CustomNode5 from "../CustomNodes/CustomNode5";
import CustomNode6 from "../CustomNodes/CustomNode6";
import CustomNode7 from "../CustomNodes/CustomNode7";
import CustomNode8 from "../CustomNodes/CustomNode8";
import CustomNode9 from "../CustomNodes/CustomNode9";
import CustomNode10 from "../CustomNodes/CustomNode10";
import CustomNode11 from "../CustomNodes/CustomNode11";
import CustomNode12 from "../CustomNodes/CustomNode12";
import CustomNode13 from "../CustomNodes/CustomNode13";
import CustomNode14 from "../CustomNodes/CustomNode14";
import CustomNode15 from "../CustomNodes/CustomNode15";
import CustomNode16 from "../CustomNodes/CustomNode16";
import CustomNode17 from "../CustomNodes/CustomNode17";
import CustomNode18 from "../CustomNodes/CustomNode18";
import CustomNode19 from "../CustomNodes/CustomNode19";
import CustomNode20 from "../CustomNodes/CustomNode20";
import CustomNode21 from "../CustomNodes/CustomNode21";
import CustomNode22 from "../CustomNodes/CustomNode22";
import CustomNode23 from "../CustomNodes/CustomNode23";
import CustomNode24 from "../CustomNodes/CustomNode24";
import CustomNode25 from "../CustomNodes/CustomNode25";
import CustomNode26 from "../CustomNodes/CustomNode26";
import CustomNode27 from "../CustomNodes/CustomNode27";
import CustomNode28 from "../CustomNodes/CustomNode28";
import CustomNode29 from "../CustomNodes/CustomNode29";
import CustomNode30 from "../CustomNodes/CustomNode30";
import CustomNode31 from "../CustomNodes/CustomNode31";
import CustomNode32 from "../CustomNodes/CustomNode32";
import CustomNode33 from "../CustomNodes/CustomNode33";
import CustomNode34 from "../CustomNodes/CustomNode34";
import CustomNode35 from "../CustomNodes/CustomNode35";
import CustomNode36 from "../CustomNodes/CustomNode36";
import CustomNode37 from "../CustomNodes/CustomNode37";
import CustomNode38 from "../CustomNodes/CustomNode38";
import CustomNode39 from "../CustomNodes/CustomNode39";
import CustomNode40 from "../CustomNodes/CustomNode40";
import CustomNode41 from "../CustomNodes/CustomNode41";
import CustomNode42 from "../CustomNodes/CustomNode42";
import CustomNode43 from "../CustomNodes/CustomNode43";
import CustomNode44 from "../CustomNodes/CustomNode44";
import CustomNode45 from "../CustomNodes/CustomNode45";
import CustomNode46 from "../CustomNodes/CustomNode46";
import CustomNode47 from "../CustomNodes/CustomNode47";
import CustomNode48 from "../CustomNodes/CustomNode48";
import * as htmlToImage from "html-to-image";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { jsPDF } from "jspdf";

import { Link, useLocation } from "react-router-dom";
import useEventListener from "@use-it/event-listener";
import useUndoState from "@rooks/use-undo-state";
import Sidebar from "../Type1/Sidebar";
import { updateData } from "../../../utils/utils";

const nodeTypes = {
	selectorNode: CustomNode,
	customNode: CustomNode2,
	nodeWithImageText: CustomNode3,
	nodeWithImageOnly: CustomNode4,
	nodeWithTextAndArea: CustomNode5,
	mainCustomNode: CustomNode6,
	nodeWith3Text: CustomNode7,
	nodeWith2TextArea: CustomNode8,
	nodeWith3TextArea: CustomNode9,
	nodeWith3Image: CustomNode10,
	nodeWith2Image: CustomNode11,
	nodeWith2Field1Area: CustomNode12,
	nodeWith2Field1Image: CustomNode13,
	nodeWith2Area1Field: CustomNode14,
	nodeWith2Area1Image: CustomNode15,
	nodeWith2Image1Field: CustomNode16,
	nodeWith2Image1Area: CustomNode17,
	nodeWithCode: CustomNode18,
	nodeWithOnlyText: CustomNode19,
	squareNode: CustomNode20,
	circleNode: CustomNode21,
	codethree: CustomNode22,
	oneTextTwoCode: CustomNode23,
	oneAreaTwoCode: CustomNode24,
	oneImageTwoCode: CustomNode25,
	twoTextOneCode: CustomNode26,
	twoAreaOneCode: CustomNode27,
	twoImageOneCode: CustomNode28,
	oneConeAoneI: CustomNode29,
	oneConeToneI: CustomNode30,
	oneConeAoneT: CustomNode31,
	onlyCode: CustomNode32,
	oneCodeoneImage: CustomNode33,
	oneCodeoneArea: CustomNode34,
	fourElements: CustomNode35,
	twoTexttwoArea: CustomNode36,
	twoTexttwoImage: CustomNode37,
	twoTexttwoCode: CustomNode38,
	twoAreatwoCode: CustomNode39,
	twoAreatwoImage: CustomNode40,
	twoImagetwoCode: CustomNode41,
	twoTextOneAreaOneImage: CustomNode42,
	twoTextOneAreaOneCode: CustomNode43,
	twoTextOneImageOneCode: CustomNode44,
	twoImageoneTextoneArea: CustomNode45,
	twoImageoneTextoneCode: CustomNode46,
	twoCodeoneTextoneArea: CustomNode47,
	twoCodeoneTextoneImage: CustomNode48,
};

const DnDFlow = (props) => {
  const [toggle, setToggle] = useState(true);
  const handleToggleSidebar = (value) => {
    setToggle(value);
  };
  var location = useLocation();
  const elemen = JSON.parse(location.state);
  const projectId = location.id;
  const projectName = location.name;
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [projectDetail, setProjectDetail] = useState({});

  Object.entries(elemen).map((item) => {
    if (item[1].type === "nodeWithCode") {
      item[1].data.settingWidth = function callbackFunction(childData) {
        setWidth(childData);
      };
      item[1].data.settingHeight = function callbackFunction2(childData) {
        setHeight(childData);
      };
    }
  });
  const [elements, setElements, undo] = useUndoState(elemen);
  const onConnect = (params) => {
    setElements((els) =>
      addEdge(
        {
          ...params,
          type: "default",
          animated: true,
          style: { stroke: "#000", cursor: "pointer" },
          label: "Edge Label",
          labelStyle: {
            fill: "#000",
            fontWeight: "800",
            fontSize: "1rem",
            cursor: "pointer",
          },
          arrowHeadType: "arrow",
        },
        els
      )
    );
  };
  // const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const updateFile = () => {
    var data = {
      name: projectName,
      values: JSON.stringify(elements),
      date: new Date().getTime(),
    };
    if (projectId === undefined) {
      console.log("error");
    } else {
      updateData("file", projectId, data);
    }
  };

  const download = (content, fileName, contentType) => {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  };

  const exportJson = () => {
    if (window.confirm("Download the file Now")) {
      download(JSON.stringify(elements), "data.json", "text/plain");
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  function KeyPress(e) {
    // eslint-disable-next-line no-restricted-globals
    var evtobj = window.event ? event : e;
    if (evtobj.keyCode === 90 && evtobj.ctrlKey) {
      undo();
    }
  }
  function handler({ key }) {
    KeyPress();
  }

  useEventListener("keydown", handler);

  const onDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("application/reactflow");
    const design = event.dataTransfer.getData("application/reactflow2");
    const imageUrl = "https://source.unsplash.com/random";
    const position = reactFlowInstance.project({
      x: event.clientX,
      y: event.clientY - 40,
    });

    if (design === "twoCodeoneTextoneImage") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            label: "Text Field",
            source: `${imageUrl}`,
            code: `function fun(){
    name = "Daya"
  }`,
            code2: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoCodeoneTextoneArea") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            label: "Text Field",
            textarea: "Text Area",
            code: `function fun(){
    name = "Daya"
  }`,
            code2: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoImageoneTextoneCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            label: "Text Field",
            source: `${imageUrl}`,
            source2: `${imageUrl}`,
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }
    if (design === "twoImageoneTextoneArea") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            label: "Text Field",
            textarea: "Text Area",
            source: `${imageUrl}`,
            source2: `${imageUrl}`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoTextOneImageOneCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            label: "Text Field",
            label2: "2nd Text Field",
            source: `${imageUrl}`,
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoTextOneAreaOneImage") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            label: "Text Field",
            label2: "2nd Text Field",
            textarea: "Text Area",
            source: `${imageUrl}`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoTextOneAreaOneCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            label: "Text Field",
            label2: "2nd Text Field",
            textarea: "Text Area",
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoAreatwoCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            textarea: "Text Area",
            textarea2: "2nd Text Area",
            code: `function fun(){
    name = "Daya"
  }`,
            code2: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoTexttwoArea") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            label: "Text Field",
            label2: "2nd Text Field",
            textarea: "Text Area",
            textarea2: "2nd Text Area",
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoTexttwoImage") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            label: "Text Field",
            label2: "2nd Text Field",
            source: `${imageUrl}`,
            source2: `${imageUrl}`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoImagetwoCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            source: `${imageUrl}`,
            source2: `${imageUrl}`,
            code: `function fun(){
    name = "Daya"
  }`,
            code2: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoAreatwoImage") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            textarea: "Text Area",
            textarea2: "2nd Text Area",
            source: `${imageUrl}`,
            source2: `${imageUrl}`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoTexttwoCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            label: "Text Field",
            label2: "2nd Text Field",
            code: `function fun(){
    name = "Daya"
  }`,
            code2: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "fourElements") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            background: "#fff",
            radius: 8,
            label: "Text Field",
            textarea: "Text Area",
            source: `${imageUrl}`,
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "onlyCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "oneCodeoneImage") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            source: `${imageUrl}`,
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "oneCodeoneArea") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            textarea: "Text Area",
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "threecode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            code: `function fun(){
    name = "Daya"
  }`,
            code2: `function fun2(){
    name = "Hello"
  }`,
            code3: `function fun3(){
    name = "Bye!"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "oneTextTwoCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            label: "Text Field",
            code: `function fun(){
    name = "Daya"
  }`,
            code2: `function fun2(){
    name = "Hello"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "oneAreaTwoCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            textarea: "Text Area",
            code: `function fun(){
    name = "Daya"
  }`,
            code2: `function fun2(){
    name = "Hello"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "oneImageTwoCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            source: `${imageUrl}`,
            code: `function fun(){
    name = "Daya"
  }`,
            code2: `function fun2(){
    name = "Hello"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoTextOneCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            label: "Text Field",
            label2: "2nd Text Field",
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoAreaOneCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            textarea: "Text Area",
            textarea2: "2nd Text Area",
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "twoImageOneCode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            source: `${imageUrl}`,
            source2: `${imageUrl}`,
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "oneConeAoneI") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            textarea: "Text Area",
            source: `${imageUrl}`,
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "oneConeAoneT") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            label: "Text Field",
            textarea: "Text Area",
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "oneConeToneI") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            background: "#fff",
            label: "Text Field",
            source: `${imageUrl}`,
            code: `function fun(){
    name = "Daya"
  }`,
          },
          style: {
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "codeNode") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            label: `Code Node`,
            width: width,
            height: height,
            settingWidth: callbackFunction,
            settingHeight: callbackFunction2,
            background: "#fff",
            code: `function daya(){
    name = "Daya"
  }`,
          },
        })
      );
      return;
    }

    if (design === "circle") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: { label: `node`, background: "#fff" },
          style: {
            textAlign: "center",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          },
        })
      );
      return;
    }

    if (design === "square") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: { label: `node`, background: "#fff" },
        })
      );
      return;
    }

    if (design === "rectangleWithImageArea") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            source: `${imageUrl}`,
            textarea: "Text Area",
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "rectangleWithImage") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            label: `node`,
            source: `${imageUrl}`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "rectangleWithImageText") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            label: `node`,
            source: `${imageUrl}`,
            textarea: `Text Area Text`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "onlyImage") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            source: `${imageUrl}`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        })
      );
      return;
    }

    if (design === "nodeTextAndArea") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            label: `Text Field`,
            textarea: "Text Area ",
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "text2") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            label: `Text Field`,
            label2: `2nd Text Field`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "290px",
          },
        })
      );
      return;
    }
    if (design === "text3") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            label: `Text Field`,
            label2: `2nd Text Field`,
            label3: `3rd Text Field`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "280px",
          },
        })
      );
      return;
    }

    if (design === "textarea2") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            textarea: `Text area`,
            textarea2: `2nd Text area`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "textarea3") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            textarea: `Text area`,
            textarea2: `2nd Text area`,
            textarea3: `3rd Text area`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "290px",
          },
        })
      );
      return;
    }

    if (design === "image2") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            source: `${imageUrl}`,
            source2: `${imageUrl}`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "220px",
            height: "2100px",
          },
        })
      );
      return;
    }

    if (design === "image3") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            source: `${imageUrl}`,
            source2: `${imageUrl}`,
            source3: `${imageUrl}`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "220px",
            height: "180px",
          },
        })
      );
      return;
    }

    if (design === "field2area1") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            label: `1st Text Field`,
            label2: `2nd Text Field`,
            textarea: `Text Area`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "field2image1") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            label: `1st Text Field`,
            label2: `2nd Text Field`,
            source: `${imageUrl}`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "280px",
          },
        })
      );
      return;
    }

    if (design === "area2field1") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            textarea: `1st Text Area`,
            textarea2: `2nd Text Area`,
            label: `Text Field`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "280px",
          },
        })
      );
      return;
    }

    if (design === "area2image1") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            textarea: `1st Text Area`,
            textarea2: `2nd Text Area`,
            source: `${imageUrl}`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "image2field1") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            label: `Text Field`,
            source: `${imageUrl}`,
            source2: `${imageUrl}`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "255px",
          },
        })
      );
      return;
    }

    if (design === "image2area1") {
      setElements((es) =>
        es.concat({
          id: (es.length + 1).toString(),
          type,
          position,
          data: {
            radius: 8,
            textarea: `Text Area`,
            source: `${imageUrl}`,
            source2: `${imageUrl}`,
            background: "#fff",
          },
          style: {
            textAlign: "center",
            width: "255px",
          },
        })
      );
      return;
    }

    setElements((es) =>
      es.concat({
        id: (es.length + 1).toString(),
        type,
        position,
        data: { label: `node`, background: "#fff" },
        style: {
          textAlign: "center",
          borderColor: "#ff0072",
          width: "172px",
        },
      })
    );
  };

  // Node Properties
  const [nodeName, setNodeName] = useState("");
  const [nodeName2, setNodeName2] = useState("");
  const [nodeName3, setNodeName3] = useState("");
  const [nodeBg, setNodeBg] = useState("#fff");
  const [nodeImage, setNodeImage] = useState("");
  const [nodeImage2, setNodeImage2] = useState("");
  const [nodeImage3, setNodeImage3] = useState("");
  const [nodeX, setNodeX] = useState("");
  const [nodeY, setNodeY] = useState("");
  const [element, setElement] = useState({});
  const [nodeHidden, setNodeHidden] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [textArea2, setTextArea2] = useState("");
  const [textArea3, setTextArea3] = useState("");
  const [hideText1, setHideText1] = useState(false);
  const [hideText2, setHideText2] = useState(false);
  const [hideText3, setHideText3] = useState(false);
  const [hideTextArea1, setHideTextArea1] = useState(false);
  const [hideTextArea2, setHideTextArea2] = useState(false);
  const [hideTextArea3, setHideTextArea3] = useState(false);
  const [hideImage, setHideImage] = useState(false);
  const [hideImage2, setHideImage2] = useState(false);
  const [hideImage3, setHideImage3] = useState(false);
  const [hideCode, setHideCode] = useState(false);
  const [hideCode2, setHideCode2] = useState(false);
  const [hideCode3, setHideCode3] = useState(false);
  const [code, setCode] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);
  const [radius, setRadius] = useState("");

  // Edge Properties

  const [edgeLabel, setEdgeLabel] = useState("");
  const [edgeLabelStyle, setEdgeLabelStyle] = useState({});
  const [edgeType, setEdgeType] = useState("default");
  const [edgeAnimated, setEdgeAnimated] = useState(true);
  const [edgeStyle, setEdgeStyle] = useState({});
  const [edgeArrowHead, setEdgeArrowHead] = useState("arrow");
  const [showEdgeProperties, setShowEdgeProperties] = useState(false);

  const callbackFunction = (childData) => {
    setWidth(childData);
  };

  const callbackFunction2 = (childData) => {
    setHeight(childData);
  };

  const isEdge = (val) => {
    if (
      val === "default" ||
      val === "straight" ||
      val === "step" ||
      val === "smoothstep"
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onElementClick = (event, elem) => {
    handleToggleSidebar(false);
    elements.map((element) => {
      if (elem.id === element.id) {
        setElement(element);
        if (isEdge(element.type)) {
          setEdgeType(element.type);
          setEdgeLabel(element.label);
          setEdgeLabelStyle(element.labelStyle);
          setEdgeAnimated(element.animated);
          setEdgeStyle(element.style);
          setEdgeArrowHead(element.arrowHeadType);
        } else {
          setNodeX(element.position.x);
          setNodeY(element.position.y);
          setNodeName(element.data.label);
          setNodeName2(element.data.label2);
          setNodeName3(element.data.label3);
          setNodeImage(element.data.source);
          setNodeImage2(element.data.source2);
          setNodeImage3(element.data.source3);
          setTextArea(element.data.textarea);
          setTextArea2(element.data.textarea2);
          setTextArea3(element.data.textarea3);
          setCode(element.data.code);
          setCode2(element.data.code2);
          setCode3(element.data.code3);
          setNodeBg(element.data.background);
          setRadius(element.data.radius);
        }

        // Edge
        if (isEdge(element.type)) {
          setShowEdgeProperties(true);
        }

        // Node

        if (
          element.type === "nodeWithOnlyText" ||
          element.type === "circleNode" ||
          element.type === "squareNode"
        ) {
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "selectorNode") {
          setHideText1(true);
          setHideImage(true);
          setHideText2(false);
          setHideText3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "customNode") {
          setHideText1(true);
          setHideImage(true);
          setHideTextArea1(true);
          setHideText2(false);
          setHideText3(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWithImageText") {
          setHideText1(false);
          setHideImage(true);
          setHideTextArea1(true);
          setHideText2(false);
          setHideText3(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWithImageOnly") {
          setHideText1(false);
          setHideImage(true);
          setHideTextArea1(false);
          setHideText2(false);
          setHideText3(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWithTextAndArea") {
          setHideText1(true);
          setHideImage(false);
          setHideTextArea1(true);
          setHideText2(false);
          setHideText3(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "mainCustomNode") {
          setHideText1(true);
          setHideText2(true);
          setHideImage(false);
          setHideTextArea1(false);
          setHideText3(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "nodeWith3Text") {
          setHideText1(true);
          setHideText2(true);
          setHideText3(true);
          setHideImage(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWith2TextArea") {
          setHideTextArea1(true);
          setHideTextArea2(true);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideImage(false);
          setHideTextArea3(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "nodeWith3TextArea") {
          setHideTextArea1(true);
          setHideTextArea2(true);
          setHideTextArea3(true);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWith3Image") {
          setHideImage(true);
          setHideImage2(true);
          setHideImage3(true);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWith2Field1Area") {
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(true);
          setHideText3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWith2Field1Image") {
          setHideImage(true);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(true);
          setHideText3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWith2Area1Field") {
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(true);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWith2Area1Image") {
          setHideImage(true);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(true);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWith2Image") {
          setHideImage(true);
          setHideImage2(true);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWith2Image1Field") {
          setHideImage(true);
          setHideImage2(true);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWith2Image1Area") {
          setHideImage(true);
          setHideImage2(true);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "nodeWithCode") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "codethree") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(true);
          setHideCode3(true);
          setShowEdgeProperties(false);
        }
        if (element.type === "oneTextTwoCode") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(true);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "oneAreaTwoCode") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(true);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "oneImageTwoCode") {
          setHideCode(true);
          setHideImage(true);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(true);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "twoTextOneCode") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(true);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "twoTextOneCode") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(true);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "twoAreaOneCode") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(true);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "twoImageOneCode") {
          setHideCode(true);
          setHideImage(true);
          setHideImage2(true);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "oneConeAoneI") {
          setHideCode(true);
          setHideImage(true);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "oneConeAoneT") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "oneConeToneI") {
          setHideCode(true);
          setHideImage(true);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "onlyCode") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "oneCodeoneArea") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "oneCodeoneImage") {
          setHideCode(true);
          setHideImage(true);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "fourElements") {
          setHideCode(true);
          setHideImage(true);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "twoTexttwoArea") {
          setHideCode(false);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(true);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(true);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "twoTexttwoImage") {
          setHideCode(false);
          setHideImage(true);
          setHideImage2(true);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(true);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "twoTexttwoCode") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(true);
          setHideText3(false);
          setHideCode2(true);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "twoAreatwoCode") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(true);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(true);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "twoAreatwoImage") {
          setHideCode(false);
          setHideImage(true);
          setHideImage2(true);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(true);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "twoImagetwoCode") {
          setHideCode(true);
          setHideImage(true);
          setHideImage2(true);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(false);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(true);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "twoTextOneAreaOneImage") {
          setHideCode(false);
          setHideImage(true);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(true);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "twoTextOneAreaOneCode") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(true);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "twoTextOneImageOneCode") {
          setHideCode(true);
          setHideImage(true);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(true);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "twoImageoneTextoneArea") {
          setHideCode(false);
          setHideImage(true);
          setHideImage2(true);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "twoImageoneTextoneCode") {
          setHideCode(true);
          setHideImage(true);
          setHideImage2(true);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(false);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }

        if (element.type === "twoCodeoneTextoneArea") {
          setHideCode(true);
          setHideImage(false);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(true);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(true);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
        if (element.type === "twoCodeoneTextoneImage") {
          setHideCode(true);
          setHideImage(true);
          setHideImage2(false);
          setHideImage3(false);
          setHideTextArea1(false);
          setHideTextArea2(false);
          setHideTextArea3(false);
          setHideText1(true);
          setHideText2(false);
          setHideText3(false);
          setHideCode2(true);
          setHideCode3(false);
          setShowEdgeProperties(false);
        }
      }
    });
  };

  const onDragEnd = (event, element) => {
    setElement(element);
    setNodeX(element.position.x);
    setNodeY(element.position.y);
  };

  // Edge

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el = { ...el, type: edgeType };
        }
        return el;
      })
    );
  }, [edgeType, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el = { ...el, label: edgeLabel };
        }
        return el;
      })
    );
  }, [edgeLabel, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el = { ...el, animated: edgeAnimated };
        }
        return el;
      })
    );
  }, [edgeAnimated, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el = { ...el, arrowHeadType: edgeArrowHead };
        }
        return el;
      })
    );
  }, [setEdgeArrowHead, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.labelStyle = {
            ...el.labelStyle,
            fontSize: edgeLabelStyle.fontSize,
          };
        }
        return el;
      })
    );
  }, [edgeLabelStyle, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.labelStyle = {
            ...el.labelStyle,
            fill: edgeLabelStyle.fill,
          };
        }
        return el;
      })
    );
  }, [edgeLabelStyle, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.labelStyle = {
            ...el.labelStyle,
            fontWeight: edgeLabelStyle.fontWeight,
          };
        }
        return el;
      })
    );
  }, [edgeLabelStyle, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.style = {
            ...el.style,
            stroke: edgeStyle.stroke,
          };
        }
        return el;
      })
    );
  }, [edgeStyle, setElements]);

  // Node
  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = {
            ...el.data,
            radius: radius,
          };
        }
        return el;
      })
    );
  }, [radius, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = {
            ...el.data,
            label: nodeName,
          };
        }
        return el;
      })
    );
  }, [nodeName, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = {
            ...el.data,
            label2: nodeName2,
          };
        }
        return el;
      })
    );
  }, [nodeName2, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = {
            ...el.data,
            label3: nodeName3,
          };
        }
        return el;
      })
    );
  }, [nodeName3, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = { ...el.data, textarea: textArea };
        }

        return el;
      })
    );
  }, [textArea, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = { ...el.data, textarea2: textArea2 };
        }

        return el;
      })
    );
  }, [textArea2, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = { ...el.data, textarea3: textArea3 };
        }

        return el;
      })
    );
  }, [textArea3, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = { ...el.data, background: nodeBg };
        }

        return el;
      })
    );
  }, [nodeBg, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.position = {
            ...el.position,
            x: nodeX,
          };
        }

        return el;
      })
    );
  }, [nodeX, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.position = {
            ...el.position,
            y: nodeY,
          };
        }

        return el;
      })
    );
  }, [nodeY, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = { ...el.data, code: code };
        }
        return el;
      })
    );
  }, [code, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = { ...el.data, code2: code2 };
        }
        return el;
      })
    );
  }, [code2, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = { ...el.data, code3: code3 };
        }
        return el;
      })
    );
  }, [code3, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = { ...el.data, width: width };
        }

        return el;
      })
    );
  }, [width, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = { ...el.data, height: height };
        }

        return el;
      })
    );
  }, [height, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = {
            ...el.data,
            source: nodeImage,
          };
        }

        return el;
      })
    );
  }, [nodeImage, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = {
            ...el.data,
            source2: nodeImage2,
          };
        }

        return el;
      })
    );
  }, [nodeImage2, setElements]);

  useEffect(() => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === element.id) {
          el.data = {
            ...el.data,
            source3: nodeImage3,
          };
        }

        return el;
      })
    );
  }, [nodeImage3, setElements]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setNodeImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onImageChange2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setNodeImage2(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const onImageChange3 = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setNodeImage3(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  // ===========================================================
  return (
    <main className="main-container">
      <header className="top-nav">
        <div className="back-button">
          <Link className="tab active-tab" to="/">
            <FaAngleDoubleLeft />
            <span className="tab-text"> Return </span>
          </Link>
        </div>
        <div className="header-right">
          <div className="btn-container">
            <Popup
              trigger={
                <button className="export-pdf">
                  <FaRegFilePdf />
                  <span className="tab-text"> Export to PDF </span>
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <div className="header"> Download PDF </div>
                  <div className="content">
                    <p>
                      Before clicking on download button to download the pdf
                      file, make sure you hide the MiniMap for clear picture of
                      graph only.
                    </p>
                  </div>
                  <div className="actions">
                    <button className="popup-btn" onClick={close}>
                      Cancel
                    </button>
                    <button
                      className="button popup-btn"
                      onClick={() => {
                        htmlToImage
                          .toPng(document.getElementById("reactflow-wrapper"), {
                            quality: 1,
                          })
                          .then(function (dataUrl) {
                            var link = document.createElement("a");
                            link.download = "chart.jpeg";
                            const pdf = new jsPDF();
                            const imgProps = pdf.getImageProperties(dataUrl);
                            const pdfWidth = pdf.internal.pageSize.getWidth();
                            const pdfHeight =
                              (imgProps.height * pdfWidth) / imgProps.width;
                            pdf.addImage(
                              dataUrl,
                              "PNG",
                              0,
                              0,
                              pdfWidth,
                              pdfHeight
                            );
                            pdf.save("chart.pdf");
                          });
                        close();
                      }}
                    >
                      Download
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div className="btn-container">
            <button className="export-json" onClick={exportJson}>
              <FaRegFileAlt />
              <span className="tab-text"> Export to JSON </span>
            </button>
          </div>
          <div className="btn-container">
            <button
              className="tab"
              onClick={() => {
                updateFile();
              }}
            >
              <FaUndo />
              <span className="tab-text"> Update </span>
            </button>
          </div>
        </div>
      </header>
      <div className="dndflow">
        <ReactFlowProvider>
          <Sidebar />
          <div className="reactflow-wrapper" id="reactflow-wrapper">
            <ReactFlow
              elements={elements}
              onConnect={onConnect}
              onElementClick={onElementClick}
              // onElementsRemove={onElementsRemove}
              nodeTypes={nodeTypes}
              onLoad={onLoad}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onNodeDragStop={onDragEnd}
            >
              <Background
                className="project-background"
                color="#000"
                gap={12}
              />
              {nodeHidden ? (
                ""
              ) : (
                <MiniMap
                  nodeColor={(n) => {
                    if (n.type === "input") return "blue";

                    return "#FFCC00";
                  }}
                />
              )}
              <Controls />
            </ReactFlow>
          </div>

          <aside
            className={`${
              toggle ? "toggle-sidebar project-sidebar" : "project-sidebar"
            }`}
          >
            {showEdgeProperties ? (
              <div>
                <div
                  className="toggle-btn"
                  onClick={() => handleToggleSidebar(!toggle)}
                >
                  {toggle ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
                </div>
                <div className="description">
                  <h1>Edit Edge</h1>
                </div>
                <div className="checkboxwrapper">
                  <span>Hide MiniMap:</span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={nodeHidden}
                      onChange={(evt) => setNodeHidden(evt.target.checked)}
                    />
                    <span class="slider round"></span>
                  </label>
                </div>
                <br></br>
                <div className="edge-input">
                  <label>Edge label:</label>
                  <input
                    value={edgeLabel}
                    onChange={(evt) => {
                      setEdgeLabel(evt.target.value);
                    }}
                  />
                </div>
                <div className="edge-input">
                  <label>Edge Type</label>
                  <select
                    name="edgeType"
                    id="edgeType"
                    value={edgeType}
                    onChange={(evt) => setEdgeType(evt.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="straight">Straight</option>
                    <option value="step">Step</option>
                    <option value="smoothstep">Smooth Step</option>
                  </select>
                </div>
                <div className="edge-input">
                  <label>Edge Colour</label>
                  <input
                    type="color"
                    value={edgeStyle.stroke}
                    onChange={(evt) =>
                      setEdgeStyle({ ...edgeStyle, stroke: evt.target.value })
                    }
                  />
                </div>
                <div className="checkboxwrapper">
                  <span>Animated Edge</span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={edgeAnimated}
                      onChange={(evt) => setEdgeAnimated(evt.target.checked)}
                    />
                    <span class="slider round"></span>
                  </label>
                </div>
                <div className="edge-input">
                  <label>Label Size</label>
                  <input
                    type="number"
                    value={edgeLabelStyle.fontSize}
                    onChange={(evt) =>
                      setEdgeLabelStyle({
                        ...edgeLabelStyle,
                        fontSize: evt.target.value,
                      })
                    }
                  />
                </div>
                <div className="edge-input">
                  <label>Label Colour</label>
                  <input
                    type="color"
                    value={edgeLabelStyle.fill}
                    onChange={(evt) =>
                      setEdgeLabelStyle({
                        ...edgeLabelStyle,
                        fill: evt.target.value,
                      })
                    }
                  />
                </div>
                <div className="edge-input">
                  <label>Label fontWeight</label>
                  <select
                    name="edgeLabelFontWeight"
                    id="edgeLabel-fontWeight"
                    value={edgeLabelStyle.fontWeight}
                    onChange={(evt) =>
                      setEdgeLabelStyle({
                        ...edgeLabelStyle,
                        fontWeight: evt.target.value,
                      })
                    }
                  >
                    <option value="normal">light</option>
                    <option value="bolder" selected>
                      bold
                    </option>
                  </select>
                </div>
              </div>
            ) : (
              <div>
                <div
                  className="toggle-btn"
                  onClick={() => handleToggleSidebar(!toggle)}
                >
                  {toggle ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
                </div>
                <div className="description">
                  <h1>Edit Node</h1>
                </div>
                <div className="checkboxwrapper">
                  <span>Hide MiniMap:</span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={nodeHidden}
                      onChange={(evt) => setNodeHidden(evt.target.checked)}
                    />
                    <span class="slider round"></span>
                  </label>
                </div>
                <br></br>
                <div className="node-input">
                  <label>Border Radius:</label>
                  <input
                    type="number"
                    value={radius || ""}
                    onChange={(evt) => setRadius(evt.target.value)}
                  />
                </div>
                {hideText1 ? (
                  <div className="node-input">
                    <label>label:</label>
                    <input
                      value={nodeName || ""}
                      onChange={(evt) => {
                        setNodeName(evt.target.value);
                      }}
                    />
                  </div>
                ) : (
                  ""
                )}
                {hideText2 ? (
                  <div className="node-input">
                    <label>label2:</label>
                    <input
                      value={nodeName2 || ""}
                      onChange={(evt) => setNodeName2(evt.target.value)}
                    />
                  </div>
                ) : (
                  ""
                )}
                {hideText3 ? (
                  <div className="node-input">
                    <label>label3:</label>
                    <input
                      value={nodeName3 || ""}
                      onChange={(evt) => setNodeName3(evt.target.value)}
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className="node-position">
                  <label>
                    <b>Position X:</b> &nbsp; {Math.trunc(nodeX)}
                  </label>
                  <label>
                    <b>Position Y:</b> &nbsp; {Math.trunc(nodeY)}
                  </label>{" "}
                </div>
                {/* <div className="dimensions">
										<div>
										<label>Width:</label> 
										<input
											style={{ width: "50px" }}
											value={parseInt(width)}
											type="number"
											onChange={(evt) => setWidth(evt.target.value)}
										/>
										</div>
										<div>
										<label>Height:</label> 
										<input
											style={{ width: "50px" }}
											value={parseInt(height)}
											type="number"
											onChange={(evt) => setHeight(evt.target.value)}
										/>
										</div>
									</div> */}
                <div className="node-input">
                  <label>background:</label>
                  <input
                    type="color"
                    value={nodeBg}
                    onChange={(evt) => setNodeBg(evt.target.value)}
                  />
                </div>
                {hideCode ? (
                  <div
                    className="node-input-textarea node-input"
                    style={{ marginTop: "12px" }}
                  >
                    <label>Code:</label>
                    <textarea
                      value={code}
                      rows="5"
                      onChange={(evt) => setCode(evt.target.value)}
                    ></textarea>
                  </div>
                ) : (
                  ""
                )}
                {hideCode2 ? (
                  <div
                    className="node-input-textarea node-input"
                    style={{ marginTop: "12px" }}
                  >
                    <label>Code2:</label>
                    <textarea
                      value={code2}
                      rows="5"
                      onChange={(evt) => setCode2(evt.target.value)}
                    ></textarea>
                  </div>
                ) : (
                  ""
                )}
                {hideCode3 ? (
                  <div
                    className="node-input-textarea node-input"
                    style={{ marginTop: "12px" }}
                  >
                    <label>Code3:</label>
                    <textarea
                      value={code3}
                      rows="5"
                      onChange={(evt) => setCode3(evt.target.value)}
                    ></textarea>
                  </div>
                ) : (
                  ""
                )}
                {hideImage ? (
                  <div className="image-node">
                    <div className="node-input">
                      <label>Image:</label>
                      <input type="file" onChange={onImageChange} />
                    </div>{" "}
                    <img src={nodeImage} width="100%" alt="img" />{" "}
                  </div>
                ) : (
                  ""
                )}
                {hideImage2 ? (
                  <div className="image-node">
                    <label>Image2:</label>
                    <input type="file" onChange={onImageChange2} />{" "}
                    <img src={nodeImage2} width="100%" alt="img" />{" "}
                  </div>
                ) : (
                  ""
                )}
                {hideImage3 ? (
                  <div className="image-node">
                    <label>Image3:</label>
                    <input type="file" onChange={onImageChange3} />{" "}
                    <img src={nodeImage3} width="100%" alt="img" />{" "}
                  </div>
                ) : (
                  ""
                )}
                {hideTextArea1 ? (
                  <div
                    className="node-input-textarea node-input"
                    style={{ marginTop: "12px" }}
                  >
                    <label>Text Area:</label>
                    <textarea
                      value={textArea}
                      rows="5"
                      onChange={(evt) => setTextArea(evt.target.value)}
                    ></textarea>
                  </div>
                ) : (
                  ""
                )}
                {hideTextArea2 ? (
                  <div
                    className="node-input-textarea node-input"
                    style={{ marginTop: "12px" }}
                  >
                    <label>Text Area2:</label>
                    <textarea
                      value={textArea2}
                      rows="5"
                      onChange={(evt) => setTextArea2(evt.target.value)}
                    ></textarea>
                  </div>
                ) : (
                  ""
                )}
                {hideTextArea3 ? (
                  <div
                    className="node-input-textarea node-input"
                    style={{ marginTop: "12px" }}
                  >
                    <label>Text Area3:</label>
                    <textarea
                      value={textArea3}
                      rows="5"
                      onChange={(evt) => setTextArea3(evt.target.value)}
                    ></textarea>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </aside>
        </ReactFlowProvider>
      </div>
    </main>
  );
};

export default DnDFlow;
