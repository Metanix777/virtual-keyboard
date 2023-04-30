import keysArr from "./scripts/keysData";

function createMarkup() {
  document.body.innerHTML = `
        <main class='main'>
            <section class='entry-field'>
                <textarea name="entry-field__input" id="entry-field__input" cols="30" rows="10"></textarea>
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
      element.className = "keyboard__item";
      element.innerHTML = item.eng[0];
      line.append(element);
    });
  });
}

createMarkup();
createKeyboard();
