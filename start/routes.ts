// //file: start/routes.ts

// import Route from '@ioc:Adonis/Core/Route'

// // Route get for accessing index
// Route.get('posts', 'PostsController.index')

// // Route post for accesing store data
// Route.post('posts', 'PostControllers.store')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { message: 'Welcome to blog post API, this REST API created using AdonisJS',
          documentation: 'Please refer to ...... for more detail about this API' }
})

// Route get for accessing index
Route.get('posts', 'PostsController.index')

// Route post for accesing store data
Route.post('posts', 'PostsController.store')

// Route delete for accesing drop method
Route.delete('posts/:id', 'PostsController.drop')