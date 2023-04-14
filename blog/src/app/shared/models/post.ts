export interface Post {
    _id: number,
    userId: number,
    title: string,
    content: string,
    hidden: boolean,
    published: Date
}
