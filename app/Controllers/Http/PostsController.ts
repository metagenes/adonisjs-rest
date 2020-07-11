import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
   
    private static posts=[
            { id: 1, title: 'First Post', content: 'This is my first blog post' },
            { id: 2 , title: 'Second Post', content: 'This is my second blog post'},
        ]
    public async index(){
        return PostsController.posts
    }

    // method save post
    public async store ({ request }: HttpContextContract) {
        const data = request.only(['title', 'content'])
        const newId = PostsController.posts.length + 1
        const post = {
            id: newId,
            title: data.title,
            content: data.content,
        }
        PostsController.posts.push(post)
        return post
        
    }

    // method drop post
    public async drop ({ params }: HttpContextContract) {
        const postId = Number(params.id) // transform to number
        PostsController.posts = PostsController.posts.filter(p => p.id !== postId)
    }

    // method to find post
    public async find ({ params }: HttpContextContract) {
        const postId = Number(params.id)
        return PostsController.posts.find(p => p.id === postId)
    }

    // method to update post
    // public async update ({ request,params }: HttpContextContract) {
    //     const postId = Number(params.id)
    //     const data = request.only(['title', 'content'])
    //     const post = {
    //         id: postId,
    //         title: data.title,
    //         content: data.content,
    //     }


    //     PostsController.posts.find(p => p.id === postId)
    //     PostsController.posts.replace()
    //     return post

    // }

}
