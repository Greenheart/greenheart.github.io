import talks from '$lib/talks'

export async function load() {
    return { talks: talks.reverse() }
}
