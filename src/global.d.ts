declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "*.jpg" {
    const content: string;
    export default content;
}

// Extend the Window interface to include the persistor property
declare global {
    interface Window {
        persistor: typeof persistor;
    }
}