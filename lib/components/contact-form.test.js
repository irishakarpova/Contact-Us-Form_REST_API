import { render, fireEvent, act } from "@testing-library/react";
import ContactForm from "./contact-form";
test("Should trigger Required error when name is not filled in on inout blur", async () => {
  const fieldName = "name";
  const labelName = "Name";
  const {
    getByLabelText,
    getByTestId
  } = await render( /*#__PURE__*/React.createElement(ContactForm, null));
  const input = await getByLabelText(labelName); // Call blur without inputting anything which should trigger a validation error

  await act(async () => {
    fireEvent.blur(input);
  });
  const validationErrors = await getByTestId('errors-name');
  await expect(validationErrors.innerHTML).toBe("Required");
});
test("Should trigger Required error when name is not filled in on inout blur", async () => {
  const {
    getByLabelText,
    getByTestId
  } = await render( /*#__PURE__*/React.createElement(ContactForm, null));
  const input = await getByLabelText('Email');
  await act(async () => {
    fireEvent.blur(input);
  });
  const validationErrors = await getByTestId('errors-email');
  await expect(validationErrors.innerHTML).toBe("Required");
});
test("Should trigger Required error when name is not filled in on inout blur", async () => {
  const {
    getByLabelText,
    getByTestId
  } = await render( /*#__PURE__*/React.createElement(ContactForm, null));
  const input = await getByLabelText('Question&Comments');
  await act(async () => {
    fireEvent.blur(input);
  });
  const validationErrors = await getByTestId('errors-message');
  await expect(validationErrors.innerHTML).toBe("Required");
});
test("Should call onSubmit on submit button click", async () => {
  let handleOnSubmit = jest.fn();
  const props = {
    handleOnSubmit
  };
  const {
    getByLabelText,
    getByTestId
  } = await render( /*#__PURE__*/React.createElement(ContactForm, props));
  const input = await getByTestId('submit-button');
  await act(async () => {
    await fireEvent.change(getByTestId('name'), {
      target: {
        value: 'My name'
      }
    });
    await fireEvent.change(getByTestId('email'), {
      target: {
        value: 'myemail@local.com'
      }
    });
    await fireEvent.change(getByTestId('message'), {
      target: {
        value: 'hello'
      }
    });
    await fireEvent.click(input);
  });
  await expect(handleOnSubmit).toHaveBeenCalledTimes(1);
});