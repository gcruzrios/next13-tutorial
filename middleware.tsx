
export {default } from "next-auth/middleware";

//import middleware from "next-auth/middleware";


//import { NextRequest, NextResponse } from "next/server";

// export function middleware(request:NextRequest){

//     return  NextResponse.redirect(new URL('/nueva-pagina', request.url))
// }


//export default middleware;

export const config = {
    /* *= cero o mas parametros
     += uno o mas parametros
     ?= cero o un parametro
    */

    matcher: ['/usuarios/:id*']
}