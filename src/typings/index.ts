import { NextPage } from "next";
import { NextJSContext } from "next-redux-wrapper";

export interface NextReduxPage<P = {}, IP = P>
  extends Omit<NextPage, "getInitialProps"> {
  getInitialProps?(ctx: NextJSContext): Promise<IP>;
}
