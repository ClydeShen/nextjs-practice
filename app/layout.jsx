import ThemeProvider from '@/components/ThemeProvider';
export default function Layout(props) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>{props.children}</ThemeProvider>
      </body>
    </html>
  );
}
