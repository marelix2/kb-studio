import React, { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, styled, TextField, Typography } from "@mui/material";

import { useFormValues } from "./useFormValues";

const PUB_KEY = "q9FG4BcBB_jyVKZal";
const SERVICE_KEY = "service_6ahmgce";
const TEMPLATE_KEY = "template_6oc78zt";

export const Form = () => {
  const {
    name,
    email,
    message,
    phoneNumber,
    clearFields,
    onNameChange,
    onEmailChange,
    onMessageChange,
    onPhoneNumberChange,
    nameInvalid,
    emailInvalid,
    messageInvalid,
    setEmailInvalid,
    setNameInvalid,
    setMessageInvalid,
  } = useFormValues();

  const [status, setStatus] = useState<"sending" | "error" | "success" | null>(
    null
  );

  const handleSend = () => {
    setStatus("sending");
    emailjs
      .send(
        SERVICE_KEY,
        TEMPLATE_KEY,
        {
          fromName: name,
          fromEmail: email,
          fromPhoneNumber: phoneNumber,
          message,
        },
        {
          publicKey: PUB_KEY,
        }
      )
      .then(
        () => {
          setStatus("success");
        },
        () => {
          setStatus("error");
        }
      );
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      setNameInvalid(true);

      return;
    }

    if (!email) {
      setEmailInvalid(true);

      return;
    }

    if (!message) {
      setMessageInvalid(true);

      return;
    }

    handleSend();
  };

  useEffect(() => {
    if (status === "success") {
      clearFields();
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  }, [status]);

  return (
    <NativeForm onSubmit={sendEmail} sx={{ flex: 1 }}>
      <>
        <Wrapper>
          <FormInput
            onChange={onNameChange}
            variant="outlined"
            value={name}
            placeholder="imię i nazwisko/nazwa firmy"
            type="text"
            error={nameInvalid}
          />
          <FormInput
            onChange={onEmailChange}
            placeholder="e-mail"
            value={email}
            type="email"
            error={emailInvalid}
          />
          <FormInput
            onChange={onPhoneNumberChange}
            placeholder="tel."
            value={phoneNumber}
            type="tel"
          />
          <FormInput
            onChange={onMessageChange}
            placeholder="wiadomość"
            multiline
            rows={6}
            value={message}
            type="message"
          />
          <FormButton
            variant="contained"
            type="submit"
            disabled={emailInvalid || nameInvalid || messageInvalid}
          >
            Wyślij
          </FormButton>
        </Wrapper>
        <StatusWrapper>
          {status === "sending" && (
            <Typography variant="body1">Wysyłanie...</Typography>
          )}
          {status === "success" && (
            <Typography variant="body1">Sukces</Typography>
          )}
          {status === "error" && (
            <Typography variant="body1">Nie mozna wysłać wiadomości</Typography>
          )}
        </StatusWrapper>
      </>
    </NativeForm>
  );
};

const FormInput = styled(TextField)(
  ({ theme: { spacing, typography, breakpoints, palette } }) => ({
    [breakpoints.down("md")]: {
      width: "328px",
      marginLeft: 0,
    },
    ...typography.caption,
    marginLeft: spacing(3),
    color: palette.primary.main,
    backgroundColor: "white",
    textTransform: "uppercase",
    borderColor: "white",
    borderRadius: 0,
    borderWidth: 0,
    borderStyle: "solid",
    fieldset: {
      borderWidth: 0,
    },
    input: {
      "&.Mui-focused &::placeholder": {
        textOverflow: "ellipsis !important",
        textTransform: "uppercase",
        color: palette.text.primary,
      },
      "&::placeholder": {
        textOverflow: "ellipsis !important",
        color: palette.grey[600],
      },

      "&.MuiOutlinedInput-root": {
        borderRadius: 0,
        borderWidth: 0,
      },
    },
  })
);

const FormButton = styled(Button)(
  ({ theme: { spacing, typography, palette, breakpoints } }) => ({
    [breakpoints.down("md")]: {
      width: "328px",
      marginLeft: 0,
    },
    ...typography.caption,
    background: "white",
    borderRadius: 0,
    padding: `${spacing(2.5)} ${spacing(6)}`,
    marginLeft: spacing(3),
    color: palette.primary.dark,
    width: "328px",
    textTransform: "uppercase",
    "&:hover": {
      background: palette.background.paper,
    },
    "&:disabled": {
      background: palette.background.paper,
    },
  })
);

const NativeForm = styled("form")(({ theme: { spacing } }) => ({
  flex: 1,
  padding: spacing(4),
}));

const Wrapper = styled(Box)(({ theme: {} }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "24px",
}));

const StatusWrapper = styled(Box)(({ theme: {} }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  px: "16px",
}));
