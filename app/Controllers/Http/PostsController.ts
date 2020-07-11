import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
   
    // private static posts=[
    //         { id: 1, title: 'First Post', content: 'This is my first blog post' },
    //         { id: 2 , title: 'Second Post', content: 'This is my second blog post'},
    //     ]

    public async index(){
        return await Post.all()
    }

    // method save post
    public async store ({ request }: HttpContextContract) {
        const data = request.only(['title', 'content'])
        const post = {
            title: data.title,
            content: data.content,
        }
       return await Post.create(post)
        
    }

    // method drop post
    public async drop ({ params }: HttpContextContract) {
        const post = await Post.find(params.id)
         post?.delete()
    }

    // method to find post
    public async find ({ params }: HttpContextContract) {
        return await Post.find(params.id)
    }

    // method to update post
    // public async update ({ request,params }: HttpContextContract) {
    //     const data = request.only(['title', 'content'])
    //     const post = {
    //         title: data.title,
    //         content: data.content,
    //     }
    //     const post = await Post.updateOrCreate()
    // }

}
