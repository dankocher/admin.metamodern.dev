declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
}

// declare module "react" {
//     interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//         // extends React's HTMLAttributes
//         custom?: string;
//     }
// }
