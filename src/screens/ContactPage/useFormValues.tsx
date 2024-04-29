import { useState } from "react";

export const useFormValues = () => {
  const [name, setName] = useState<string>("");
  const [nameInvalid, setNameInvalid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailInvalid, setEmailInvalid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messageInvalid, setMessageInvalid] = useState<boolean>(false);

  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    if (!event.target.value) {
      setNameInvalid(true);

      return;
    }
    setNameInvalid(false);
  };

  const onPhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const onMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);

    if (!event.target.value) {
      setMessageInvalid(true);

      return;
    }
    setMessageInvalid(false);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (!event.target.value) {
      setEmailInvalid(true);

      return;
    }

    const validateEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );

    if (!validateEmail.test(event.target.value)) {
      setEmailInvalid(true);

      return;
    }

    setEmailInvalid(false);
  };

  const clearFields = () => {
    setName("");
    setNameInvalid(false);
    setEmail("");
    setEmailInvalid(false);
    setMessage("");
    setMessageInvalid(false);
  };

  return {
    name,
    onNameChange,
    message,
    onMessageChange,
    email,
    onEmailChange,
    clearFields,
    phoneNumber,
    onPhoneNumberChange,
    nameInvalid,
    emailInvalid,
    messageInvalid,
    setNameInvalid,
    setEmailInvalid,
    setMessageInvalid,
  };
};
