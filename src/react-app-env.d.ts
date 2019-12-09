/// <reference types="react-scripts" />
interface External {
  ReturnValue: string;
  InvokeMethod(methodId: number, params: string);
}

interface Window {
  sendGreetingToSWGen2: (params: string) => void;
}

declare module '*.md' {
  const value: string;
  export default value;
}
