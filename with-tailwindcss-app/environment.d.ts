export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PROJECT_ID: string;
      NEXT_PUBLIC_ALCEHMY_BASE: string;
      NEXT_PUBLIC_ALCEHMY_ETH: string;
    }
  }
}
