import { clsx } from "clsx";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import {
  Link as RemixLink,
  type LinkProps as RemixLinkProps,
  useLocation,
} from "@remix-run/react";

export type LinkProps = ComponentPropsWithoutRef<"a"> &
  Omit<RemixLinkProps, "to"> & { href: string };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  props,
  ref
) {
  const { href, ...restProps } = props;
  const location = useLocation();
  const externalLinkProps = href?.startsWith("http")
    ? { target: "_blank", rel: "noopener" }
    : {};

  const isCurrent = location.pathname === href;
  return (
    <RemixLink
      ref={ref}
      to={href}
      {...restProps}
      {...externalLinkProps}
      aria-current={isCurrent ? "page" : undefined}
      className={clsx(
        "cursor-pointer focus:outline-none focus-visible:underline",
        isCurrent ? "underline" : "no-underline",
        props.className
      )}
    />
  );
});
