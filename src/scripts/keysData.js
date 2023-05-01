const keysArr = [
  [
    {
      code: "Backquote",
      eng: ["`", "~"],
      ru: ["ё", "Ё"],
    },
    {
      code: "Digit1",
      eng: ["1", "!"],
      ru: ["1", "!"],
    },
    {
      code: "Digit2",
      eng: ["2", "@"],
      ru: ["2", '"'],
    },
    {
      code: "Digit3",
      eng: ["3", "#"],
      ru: ["3", "№"],
    },
    {
      code: "Digit4",
      eng: ["4", "$"],
      ru: ["4", ";"],
    },
    {
      code: "Digit5",
      eng: ["5", "%"],
      ru: ["5", "%"],
    },
    {
      code: "Digit6",
      eng: ["6", "^"],
      ru: ["6", ":"],
    },
    {
      code: "Digit7",
      eng: ["7", "&"],
      ru: ["7", "?"],
    },
    {
      code: "Digit8",
      eng: ["8", "*"],
      ru: ["8", "*"],
    },
    {
      code: "Digit9",
      eng: ["9", "("],
      ru: ["9", "("],
    },
    {
      code: "Digit0",
      eng: ["0", ")"],
      ru: ["0", ")"],
    },
    {
      code: "Minus",
      eng: ["-", "_"],
      ru: ["-", "_"],
    },
    {
      code: "Equal",
      eng: ["=", "+"],
      ru: ["=", "+"],
    },
    {
      code: "Backspace",
      eng: ["Backspace", "Backspace"],
      ru: ["Backspace", "Backspace"],
      styleClass: "style1",
    },
  ],

  [
    {
      code: "Tab",
      eng: ["Tab ↹", "Tab ↹"],
      ru: ["Tab ↹", "Tab ↹"],
      styleClass: "style1",
    },
    {
      code: "KeyQ",
      eng: ["q", "Q"],
      ru: ["й", "Й"],
    },
    {
      code: "KeyW",
      eng: ["w", "W"],
      ru: ["ц", "Ц"],
    },
    {
      code: "KeyE",
      eng: ["e", "E"],
      ru: ["у", "У"],
    },
    {
      code: "KeyR",
      eng: ["r", "R"],
      ru: ["к", "К"],
    },
    {
      code: "KeyT",
      eng: ["t", "T"],
      ru: ["е", "Е"],
    },
    {
      code: "KeyY",
      eng: ["y", "Y"],
      ru: ["н", "Н"],
    },
    {
      code: "KeyU",
      eng: ["u", "U"],
      ru: ["г", "Г"],
    },
    {
      code: "KeyI",
      eng: ["i", "I"],
      ru: ["ш", "Ш"],
    },
    {
      code: "KeyO",
      eng: ["o", "O"],
      ru: ["щ", "Щ"],
    },
    {
      code: "KeyP",
      eng: ["p", "P"],
      ru: ["з", "З"],
    },
    {
      code: "BracketLeft",
      eng: ["[", "{"],
      ru: ["х", "Х"],
    },
    {
      code: "BracketRight",
      eng: ["]", "}"],
      ru: ["ъ", "Ъ"],
    },
    {
      code: "Backslash",
      eng: ["\\", "|"],
      ru: ["\\", "/"],
      styleClass: "style1",
    },
  ],

  [
    {
      code: "CapsLock",
      eng: ["Caps Lock", "Caps Lock"],
      ru: ["Caps Lock", "Caps Lock"],
      styleClass: "style2",
    },
    {
      code: "KeyA",
      eng: ["a", "A"],
      ru: ["ф", "Ф"],
    },
    {
      code: "KeyS",
      eng: ["s", "S"],
      ru: ["ы", "Ы"],
    },
    {
      code: "KeyD",
      eng: ["d", "D"],
      ru: ["в", "В"],
    },
    {
      code: "KeyF",
      eng: ["f", "F"],
      ru: ["а", "А"],
    },
    {
      code: "KeyG",
      eng: ["g", "G"],
      ru: ["п", "П"],
    },
    {
      code: "KeyH",
      eng: ["h", "H"],
      ru: ["р", "Р"],
    },
    {
      code: "KeyJ",
      eng: ["j", "J"],
      ru: ["о", "О"],
    },
    {
      code: "KeyK",
      eng: ["k", "K"],
      ru: ["л", "Л"],
    },
    {
      code: "KeyL",
      eng: ["l", "L"],
      ru: ["д", "Д"],
    },
    {
      code: "Semicolon",
      eng: [";", ":"],
      ru: ["ж", "Ж"],
    },
    {
      code: "Quote",
      eng: ["'", '"'],
      ru: ["э", "Э"],
    },
    {
      code: "Enter",
      eng: ["Enter ↵", "Enter ↵"],
      ru: ["Enter ↵", "Enter ↵"],
      styleClass: "style3",
    },
  ],

  [
    {
      code: "ShiftLeft",
      eng: ["Shift ⇧", "Shift ⇧"],
      ru: ["Shift ⇧", "Shift ⇧"],
      styleClass: "style4",
    },
    {
      code: "KeyZ",
      eng: ["z", "Z"],
      ru: ["я", "Я"],
    },
    {
      code: "KeyX",
      eng: ["x", "X"],
      ru: ["ч", "Ч"],
    },
    {
      code: "KeyC",
      eng: ["c", "C"],
      ru: ["с", "С"],
    },
    {
      code: "KeyV",
      eng: ["v", "V"],
      ru: ["м", "М"],
    },
    {
      code: "KeyB",
      eng: ["b", "B"],
      ru: ["и", "И"],
    },
    {
      code: "KeyN",
      eng: ["n", "N"],
      ru: ["т", "Т"],
    },
    {
      code: "KeyM",
      eng: ["m", "M"],
      ru: ["ь", "Ь"],
    },
    {
      code: "Comma",
      eng: [",", "<"],
      ru: ["б", "Б"],
    },
    {
      code: "Period",
      eng: [".", ">"],
      ru: ["ю", "Ю"],
    },
    {
      code: "Slash",
      eng: ["/", "?"],
      ru: [".", ","],
    },
    {
      code: "ArrowUp",
      eng: ["↑", "↑"],
      ru: ["↑", "↑"],
    },
    {
      code: "ShiftRight",
      eng: ["Shift ⇧", "Shift ⇧"],
      ru: ["Shift ⇧", "Shift ⇧"],
      styleClass: "style4",
    },
  ],

  [
    {
      code: "ControlLeft",
      eng: ["Ctrl", "Ctrl"],
      ru: ["Ctrl", "Ctrl"],
    },
    {
      code: "MetaLeft",
      eng: ["Win", "Win"],
      ru: ["Win", "Win"],
    },
    {
      code: "AltLeft",
      eng: ["Alt", "Alt"],
      ru: ["Alt", "Alt"],
    },
    {
      code: "Space",
      eng: [" ", " "],
      ru: [" ", " "],
      styleClass: "style5",
    },
    {
      code: "AltRight",
      eng: ["Alt", "Alt"],
      ru: ["Alt", "Alt"],
    },
    {
      code: "ControlRight",
      eng: ["Ctrl", "Ctrl"],
      ru: ["Ctrl", "Ctrl"],
    },
    {
      code: "ArrowLeft",
      eng: ["←", "←"],
      ru: ["←", "←"],
    },
    {
      code: "ArrowDown",
      eng: ["↓", "↓"],
      ru: ["↓", "↓"],
    },
    {
      code: "ArrowRight",
      eng: ["→", "→"],
      ru: ["→", "→"],
    },
  ],
];

export default keysArr;
