export const contact = () => {
  const form = document.querySelector(".contact__form");
  const inputEmail = document.querySelector(".input__email");
  const inputText = document.querySelector(".input__text");
  const lockEmail = document.querySelector(".email__lock");
  const lockText = document.querySelector(".text__lock");
  const btnForm = document.querySelector(".btn__form");

  const spinner = document.querySelector(".spinner");
  const error = document.querySelector(".form__error");
  const success = document.querySelector(".form__success");

  let activeEmail = false;
  let activeText = false;
  let correctEmail = false;
  let correctText = false;

  const sendEmail = (text, email) => {
    const data = {
      email,
      text,
    };
    error.style.display = "none";
    success.style.display = "none";
    spinner.style.display = "flex";
    fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        spinner.style.display = "none";
        success.style.display = "flex";
      })
      .catch((err) => {
        spinner.style.display = "none";
        error.style.display = "flex";
        console.log(err);
      });
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (correctEmail && correctText) {
      sendEmail(inputText.value, inputEmail.value);
    }
  });

  inputText.addEventListener("focus", () => {
    activeText = true;
    if (!correctText) {
      if (activeText) {
        lockText.style.color = "#DF524A";
      }
    }
  });

  inputEmail.addEventListener("focus", () => {
    activeEmail = true;
    if (!correctEmail) {
      if (activeEmail) {
        lockEmail.style.color = "#DF524A";
      }
    }
  });

  inputEmail.addEventListener("keyup", (e) => {
    validationEmail(e);
  });
  inputEmail.addEventListener("keydown", (e) => {
    validationEmail(e);
  });

  inputText.addEventListener("keyup", (e) => {
    validationText(e);
  });
  inputText.addEventListener("keydown", (e) => {
    validationText(e);
  });

  function validationEmail(e) {
    if (testEmail(e.target)) {
      correctEmail = true;
      lockEmail.classList.remove("fa-lock");
      lockEmail.classList.add("fa-unlock");
      lockEmail.style.color = "#76b852";
      inputEmail.style.borderBottom = "2px solid #76b852";
    } else {
      correctEmail = false;
      lockEmail.classList.remove("fa-unlock");
      lockEmail.classList.add("fa-lock");
      lockEmail.style.color = "#DF524A";
      inputEmail.style.borderBottom = "2px solid #DF524A";
    }

    styleButton();
  }

  function validationText(e) {
    const withoutSpace = testText(e.target.value);
    if (withoutSpace.length > 5) {
      correctText = true;
      lockText.classList.remove("fa-lock");
      lockText.classList.add("fa-unlock");
      lockText.style.color = "#76b852";
      inputText.style.borderBottom = "2px solid #76b852";
    } else {
      correctText = false;
      lockText.classList.remove("fa-unlock");
      lockText.classList.add("fa-lock");
      lockText.style.color = "#DF524A";
      inputText.style.borderBottom = "2px solid #DF524A";
    }

    styleButton();
  }
  function styleButton() {
    if (correctEmail && correctText) {
      console.log("walidacja");
      btnForm.classList.remove("disabled");
      btnForm.classList.add("active");
    } else {
      btnForm.classList.remove("active");
      btnForm.classList.add("disabled");
    }
  }
  function testText(field) {
    const arrField = [...field];
    const arrWithoutSpace = [];

    arrField.forEach((el) => {
      const reg = new RegExp("[A-Za-z]");
      if (reg.test(el)) {
        arrWithoutSpace.push(el);
      }
    });
    return arrWithoutSpace;
  }
  function testEmail(field) {
    const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    return reg.test(field.value);
  }
};
