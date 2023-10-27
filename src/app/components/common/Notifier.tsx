import React, { forwardRef, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}
export type Ref = HTMLDialogElement;

const Notifier = forwardRef<Ref, Props>(({ children }, ref) => (
    <dialog ref={ref} id="badge-dismiss-green" className="flex z-50 h-screen items-center justify-center bg-transparent">
        <span className="flex items-center px-2 py-1 mr-2 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300">
            {
                children
            }
        </span>
    </dialog>
));
Notifier.displayName = 'Notifier'
export default Notifier