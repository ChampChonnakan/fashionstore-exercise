import Layout from "@/components/Layout";
import { CartProvider } from "@/contexts/cart";
import { ThemeProvider } from "@/contexts/theme";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ThemeProvider>
  );
}
