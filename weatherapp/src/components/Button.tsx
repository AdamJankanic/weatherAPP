"use client";

type ReusableFunction = {
  buttonText: string;
  test: () => void;
};

export function Button({ buttonText, test }: ReusableFunction) {
  return <button onClick={() => test()}>{buttonText}</button>;
}
