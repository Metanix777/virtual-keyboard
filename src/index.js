import keysArr from "./scripts/keysData";

function createMarkup() {
  document.body.innerHTML = `
        <main class='main'>
            <section class='entry-field'>
                <textarea name="entry-field__input" id="entry-field__input" cols="100" rows="10"></textarea>
            </section>
            <section class='keyboard'></section>
        </main>
    `;
}

function createKeyboard() {
  const keyboard = document.querySelector(".keyboard");
  keysArr.forEach((el) => {
    const line = document.createElement("div");
    line.className = "keyboard__line";
    keyboard.append(line);

    el.forEach((item) => {
      const element = document.createElement("div");
      element.className = item.styleClass
        ? `keyboard__item ${item.styleClass}`
        : "keyboard__item";
      element.setAttribute("data-code", item.code);
      element.setAttribute("data-printable", item.printable);
      element.innerHTML = item.eng[0];
      line.append(element);
    });
  });
}

createMarkup();
createKeyboard();

const keyboard = document.querySelector(".keyboard");
const textarea = document.querySelector("#entry-field__input");

keyboard.addEventListener("click", (e) => {
  if (e.target.classList.contains("keyboard__item")) {
    if (e.target.dataset.printable === "true") {
      textarea.textContent = textarea.textContent + e.target.innerText;
    }
  }
});

const getKeyCode = document.querySelectorAll("[data-code]");
document.addEventListener("keydown", (e) => {
  getKeyCode.forEach((el) => {
    if (e.code === el.dataset.code) {
      el.classList.add("keydown");
      if (el.dataset.printable === "true") {
        textarea.textContent = textarea.textContent + e.key;
      }
    }
  });
});

document.addEventListener("keyup", (e) => {
  getKeyCode.forEach((el) => {
    if (e.code === el.dataset.code) {
      el.classList.remove("keydown");
    }
  });
});
