import { ThemeProvider } from "next-themes";
import "@pebblo/css/main.css";

function Pebblo({ Component, pageProps }: any) {
  return (
      <ThemeProvider forcedTheme={Component.theme || undefined}>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default Pebblo;