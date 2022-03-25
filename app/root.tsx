import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Form,
  json,
  useActionData,
} from "remix";
import type { MetaFunction, ActionFunction } from "remix";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  console.log("title", title);
  return json(title);
};

export default function App() {
  const data = useActionData();
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <div>Welcome from root.tsx.</div>
        <div>Enter text and press save!</div>
        <Form method='post'>
          <input name='title' type='text' />
          <button type='submit'>Save</button>
        </Form>
        <p>Echo from root.tsx: {data}</p>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
