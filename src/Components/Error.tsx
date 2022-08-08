import * as React from "react";
import { Layout } from "./Layout";

export interface ErrorProps {
  error: string;
}

export function Error({ error }: ErrorProps) {
  return (
    <Layout>
      <h1 className="error">{error}</h1>
    </Layout>
  );
}
