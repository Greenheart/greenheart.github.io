export const cx = (...classes: (string | undefined | false)[]) =>
    classes.filter(Boolean).join(' ').trim()

const dateTimeFormat = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})

export function formatDate(date: string) {
    return dateTimeFormat.format(new Date(date))
}
