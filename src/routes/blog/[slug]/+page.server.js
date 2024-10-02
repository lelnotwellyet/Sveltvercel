/** @param {{ params: { slug: string } }} context */
export function load(context) {
    const { params } = context;
    return {
        content: `hello ${params.slug}`
    };
}
