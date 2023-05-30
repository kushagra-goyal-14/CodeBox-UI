import ace from "ace-builds";
import AceEditor from "react-ace";
ace.config.set(
  "basePath",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
);
ace.config.setModuleUrl(
  "ace/mode/javascript_worker",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js"
);
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/ext-language_tools";

import {
  Box,
  Button,
  MenuItem,
  LinearProgress,
  ThemeProvider,
  createTheme,
  TextField,
  InputLabel,
  Select,
  IconButton,
  Menu,
} from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

import { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { saveAs } from "file-saver";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2196F3",
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        borderRadius: "10px",
        label: {
          color: "#FFFFFF",
        },
      },
    },
  },
});

function Editor() {
  const [output, setOutput] = useState("");
  const [code, setCode] = useState("");
  const [lang, setLang] = useState("cpp");
  const [input, setInput] = useState("");
  const [executing, setExecuting] = useState(false);
  const [editorlang, setEditorLang] = useState("c_cpp");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (lang === "cpp") {
      setEditorLang("c_cpp");
    } else if (lang === "c") {
      setEditorLang("c_cpp");
    } else if (lang === "java") {
      setEditorLang("java");
    } else if (lang === "python3") {
      setEditorLang("python");
    } else if (lang === "go") {
      setEditorLang("golang");
    } else if (lang === "javascript") {
      setEditorLang("javascript");
    }
  }, [lang]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
  };
  const handleDownloadCode = () => {
    const languageArrayExtension = {
      java: "java",
      python3: "py",
      cpp: "cpp",
      c: "c",
      javascript: "js",
      go: "go",
    };
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `code.${languageArrayExtension[lang]}`);
  };
  const createRequest = async () => {
    let data = {
      src: code,
      lang: lang,
      stdin: input,
    };
    setExecuting(true);
    console.log(JSON.stringify(data));
    const response = await fetch(
      "https://code-box.onrender.com/api/v1/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    setExecuting(false);
    console.log(res);
    setOutput(res);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridGap: "0 20px",
            "& .ace_gutter": {
              backgroundColor: "#19202b",
            },
            "& .ace_editor": {
              backgroundColor: "#19202b",
            },
            "& .ace_support.ace_function": {
              color: "#2196F3",
            },
            height: "93%",
          }}
        >
          <AceEditor
            placeholder=""
            mode={editorlang}
            theme="dracula"
            name="CodeBox"
            onChange={(e) => {
              console.log(e);
              setCode(e);
            }}
            value={code}
            fontSize={17}
            showPrintMargin={false}
            style={{
              gridColumn: "span 9",
              height: "100%",
              width: "100% ",
              borderRight: "2px solid #2196F3",
              borderBottom: "2px solid #2196F3",
              "& *": {
                fontFamily: "monospace",
              },
            }}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              // useWorker: false,
            }}
          />
          <div
            style={{
              gridColumn: "span 3",
              display: "grid",
              gridTemplateRows: "auto 1fr auto",
              padding: "0px 0px",
            }}
          >
            <div style={{ textAlign: "right !important" }}>
              <Select
                value={lang}
                onChange={(e) => {
                  setLang(e.target.value);
                }}
                inputProps={{
                  name: "language",
                  id: "outlined-age-native-simple",
                }}
                disabled={executing}
                sx={{
                  color: "#2196F3",
                  height: "33px",
                  textAlign: "left !important",
                  marginLeft: 15,
                  marginRight: 1,
                  "& *": {
                    fontFamily: "poppins",
                  },
                }}
              >
                <MenuItem value={"python3"}>Python</MenuItem>
                <MenuItem value={"c"}>C</MenuItem>
                <MenuItem value={"cpp"}>C++</MenuItem>
                <MenuItem value={"java"}>Java</MenuItem>
                <MenuItem value={"go"}>Golang</MenuItem>
                <MenuItem value={"javascript"}>JS</MenuItem>
              </Select>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={createRequest}
                style={{
                  marginTop: "6px",
                  marginBottom: "9px",
                  marginRight: "2px",
                }}
                startIcon={<PlayArrowRoundedIcon />}
                disabled={false}
              >
                Run
              </Button>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {" "}
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
              >
                <MenuItem onClick={handleCopyCode}>Copy</MenuItem>
                <MenuItem onClick={handleDownloadCode}>Download</MenuItem>
              </Menu>
              {executing && (
                <LinearProgress
                  size={14}
                  style={{ color: "white", margin: "auto" }}
                />
              )}
            </div>
            <div>
              <InputLabel
                style={{
                  color: "#2196F3",
                  margin: "7px 0",
                  textAlign: "left !important",
                  fontFamily: "poppins",
                }}
              >
                Input
              </InputLabel>
              <TextField
                multiline
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                inputProps={{
                  style: {
                    fontSize: 20,
                    height: "10rem",
                    overflow: "auto",
                    borderColor: "#fff",
                  },
                }}
                variant="outlined"
                sx={{
                  backgroundColor: "#001e3c",
                  width: "21rem",
                  color: "#f8f8f2",
                }}
              />
            </div>
            <div>
              <InputLabel
                style={{
                  color: "#2196F3",
                  margin: "7px 0",
                  textAlign: "left !important",
                  fontFamily: "Poppins",
                }}
              >
                Output
              </InputLabel>
              <div
                style={{
                  textAlign: "left",
                  color: "white",
                  overflow: "auto",
                  whiteSpace: "pre-line",
                  fontFamily: "monospace",
                  overflow: "auto",
                  height: "25rem",
                  width: "21rem",
                  fontSize: "17px",
                  backgroundColor: "#001e3c",
                  border: "1px solid rgba(255, 255, 255, 0.23)",
                  borderRadius: "4px",
                }}
              >
                {output?.data?.output || output?.data?.error}
              </div>
            </div>
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Editor;
