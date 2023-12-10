import { createContext } from "react";

const buttonType: "button" | "submit" | "reset" | undefined = "button";
export const ButtonTypeContext = createContext(buttonType);
