export const cx = (...classes: (string | undefined)[]) =>
    classes.filter(Boolean).join(' ').trim()
