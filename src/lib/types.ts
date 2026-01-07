export type { BlogPost } from '$lib/posts'
export type { Project } from '$lib/projects'

export type TechStack = {
    Current: string[]
    Past: string[]
    Learning: string[]
}

/**
 * Mark properties P as required. Useful to override only a few properties.
 *
 * @example
 * ```ts
 * type RunningShoes = {
 *   color: string
 *   size?: string
 *   comfortable?: boolean
 * }
 * type RunningShoesWithSize = RequiredProperties<RunningShoes, 'size'>
 *
 * // Works well: `size` is defined
 * const favorites: RunningShoesWithSize = {
 *   color: 'black',
 *   size: 'perfect'
 * }
 * // Error: Missing required property `size`
 * const barelyUsed: RunningShoesWithSize = {
 *   color: 'darkgray',
 *   comfortable: false
 * }
 * ```
 */
export type RequiredProperties<T, P extends keyof T> = Omit<T, P> &
    Required<Pick<T, P>>
